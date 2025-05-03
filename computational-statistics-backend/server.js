require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const helmet = require('helmet');
const compression = require('compression');

const app = express();

// Middleware
app.use(helmet());
app.use(compression());
app.use(cors({
  origin: true,
  credentials: false,
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'PATCH', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization'],
  optionsSuccessStatus: 200,
  maxAge: 86400
}));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// MongoDB Connection
mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/cpp-labs', {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => console.log('✅ Connected to MongoDB'))
.catch(err => {
  console.error('❌ MongoDB connection error:', err);
  process.exit(1);
});

// Schema & Model
const problemSchema = new mongoose.Schema({
  question: String,
  code: String,
  output: String
}, { _id: false });

const assignmentSchema = new mongoose.Schema({
  title: String,
  icon: String,
  problems: [problemSchema],
  createdAt: { type: Date, default: Date.now }
});

const PythonAssignment = mongoose.model('PythonAssignment', assignmentSchema);

// Response Helpers
const respond = {
  success: (res, data, status = 200) => res.status(status).json({ success: true, data }),
  error: (res, message, status = 400, details = null) => {
    const response = { success: false, message };
    if (details && process.env.NODE_ENV !== 'production') response.details = details;
    res.status(status).json(response);
  }
};

// Async wrapper
function asyncHandler(fn) {
  return (req, res) => fn(req, res).catch(err => respond.error(res, err.message, 500, err));
}

// Routes
const router = express.Router();

// List all assignments
router.get('/python-assignments', asyncHandler(async (req, res) => {
  const docs = await PythonAssignment.find().sort({ createdAt: -1 }).lean();
  respond.success(res, docs);
}));

// Create a new assignment
router.post('/python-assignments', asyncHandler(async (req, res) => {
  const { title, problems = [], icon = 'FaPython' } = req.body;
  if (!title || !problems.length) return respond.error(res, 'Title and problems required');

  const validProblems = problems.map(p => {
    if (!p.question || !p.code || !p.output) throw new Error('Invalid problem');
    return p;
  });

  const newDoc = new PythonAssignment({ title, icon, problems: validProblems });
  const saved = await newDoc.save();
  respond.success(res, saved, 201);
}));

// Get single assignment
router.get('/python-assignments/:id', asyncHandler(async (req, res) => {
  const doc = await PythonAssignment.findById(req.params.id).lean();
  if (!doc) return respond.error(res, 'Not found', 404);
  respond.success(res, doc);
}));

// Update entire assignment
router.put('/python-assignments/:id', asyncHandler(async (req, res) => {
  const updated = await PythonAssignment.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
    runValidators: true
  }).lean();
  if (!updated) return respond.error(res, 'Not found', 404);
  respond.success(res, updated);
}));

// 🆕 Partial edit endpoint
router.patch('/python-assignments/:id/edit', asyncHandler(async (req, res) => {
  const { title, icon, problems } = req.body;
  const updates = {};

  if (title) updates.title = title;
  if (icon) updates.icon = icon;
  if (problems && Array.isArray(problems)) {
    const validProblems = problems.map(p => {
      if (!p.question || !p.code || !p.output) throw new Error('Invalid problem');
      return p;
    });
    updates.problems = validProblems;
  }

  const updated = await PythonAssignment.findByIdAndUpdate(req.params.id, updates, {
    new: true,
    runValidators: true
  }).lean();

  if (!updated) return respond.error(res, 'Assignment not found', 404);
  respond.success(res, updated);
}));

// Delete assignment
router.delete('/python-assignments/:id', asyncHandler(async (req, res) => {
  const deleted = await PythonAssignment.findByIdAndDelete(req.params.id);
  if (!deleted) return respond.error(res, 'Not found', 404);
  respond.success(res, { message: 'Deleted successfully' });
}));

// Mount router
app.use('/api', router);

// Health Check
app.get('/health', (req, res) => {
  res.status(200).json({
    status: 'OK',
    uptime: process.uptime(),
    timestamp: new Date(),
    database: mongoose.connection.readyState === 1 ? 'connected' : 'disconnected'
  });
});

// 404
app.use((req, res) => {
  respond.error(res, 'Endpoint not found', 404);
});

// Global Error Handler
app.use((err, req, res, next) => {
  console.error('Unhandled error:', err);
  respond.error(res, 'Internal Server Error', 500, err.stack);
});

// Start Server
const PORT = process.env.PORT || 5001; // Use a different port if needed
app.listen(PORT, () => {
  console.log(`🚀 Python Assignment Server running on port ${PORT}`);
});
