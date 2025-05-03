import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  FaPython, FaChartLine, FaDatabase, FaFlask, FaBookOpen,
  FaHome, FaTimes, FaClipboard, FaTrash, FaPlus, FaFolder,
  FaProjectDiagram, FaLock, FaRegChartBar, FaCode, FaRocket, FaBook
} from 'react-icons/fa';

const iconComponents = {
  FaPython, FaChartLine, FaDatabase, FaFlask, FaBookOpen,
  FaHome, FaTimes, FaClipboard, FaTrash, FaPlus, FaFolder,
  FaProjectDiagram, FaRegChartBar, FaCode
};

export default function PythonLabsPage() {
  const [assignments, setAssignments] = useState([]);
  const [selectedAssignment, setSelectedAssignment] = useState(null);
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [showAdminPanel, setShowAdminPanel] = useState(false);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [formData, setFormData] = useState({
    title: '',
    icon: 'FaRegChartBar',
    problems: [{ question: '', code: '', output: '' }]
  });
  const [pin, setPin] = useState('');
  const [pinVerified, setPinVerified] = useState(false);
  const HARDCODED_PIN = '1234';

  useEffect(() => {
    const abortController = new AbortController();

    const fetchAssignments = async () => {
      try {
        const response = await fetch(`${import.meta.env.VITE_FRONTEND_URL}/api/python-assignments`, {
          signal: abortController.signal
        });
        if (!response.ok) throw new Error('Failed to fetch assignments');
        const { data } = await response.json();

        const formatted = data.map(a => ({
          ...a,
          icon: iconComponents[a.icon] || FaRegChartBar
        }));

        setAssignments(formatted);
        setError(null);
      } catch (err) {
        if (!abortController.signal.aborted) {
          setError(err.message);
        }
      } finally {
        if (!abortController.signal.aborted) {
          setLoading(false);
        }
      }
    };
    fetchAssignments();

    return () => abortController.abort();
  }, []);

  const handlePinSubmit = (e) => {
    e.preventDefault();
    if (pin === HARDCODED_PIN) {
      setPinVerified(true);
      setPin('');
    }
  };

  const handleCloseAdminPanel = () => {
    setShowAdminPanel(false);
    setPinVerified(false);
    setPin('');
    setFormData({
      title: '',
      icon: 'FaRegChartBar',
      problems: [{ question: '', code: '', output: '' }]
    });
  };

  const addProblemField = () => {
    setFormData(prev => ({
      ...prev,
      problems: [...prev.problems, { question: '', code: '', output: '' }]
    }));
  };

  const handleProblemChange = (index, field, value) => {
    const newProblems = formData.problems.map((p, i) => 
      i === index ? { ...p, [field]: value } : p
    );
    setFormData(prev => ({ ...prev, problems: newProblems }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(`${import.meta.env.VITE_FRONTEND_URL}/api/python-assignments`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });
  
      const { data } = await response.json();
      setAssignments(prev => [{
        ...data,
        icon: iconComponents[data.icon] || FaRegChartBar
      }, ...prev]);
      
      // Refresh and redirect
      window.location.href = '/labs'; // This will refresh the page and ensure latest data
    } catch (error) {
      console.error('Error creating assignment:', error);
    } finally {
      handleCloseAdminPanel();
    }
  };
  const handleDelete = async (id) => {
    try {
      await fetch(`${import.meta.env.VITE_FRONTEND_URL}/api/python-assignments/${id}`, { method: 'DELETE' });
      setAssignments(prev => prev.filter(a => a._id !== id));
    } catch (err) {
      setError(err.message);
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-900 flex items-center justify-center">
        <motion.div
          animate={{ rotate: [0, 360] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="text-4xl text-amber-400"
        >
          <FaPython />
        </motion.div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-gray-900 flex items-center justify-center p-4">
        <div className="text-center text-amber-400">
          <p className="text-xl mb-4">SYSTEM ERROR: {error}</p>
          <button 
            onClick={() => window.location.reload()}
            className="px-4 py-2 bg-amber-600 rounded-lg hover:bg-amber-700 transition-colors shadow-lg shadow-amber-500/20"
          >
            INITIATE REBOOT
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-900 text-gray-100 font-sans overflow-x-hidden">
      {/* Cyberpunk-style grid animation */}
      <div className="fixed inset-0 z-0 opacity-10">
        <div className="absolute inset-0 animate-pulse bg-[length:100px_100px] bg-[linear-gradient(to_right,#2a2a2a_1px,transparent_1px),linear-gradient(to_bottom,#2a2a2a_1px,transparent_1px)]" />
      </div>

      {/* Glowing accent lines */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <div className="absolute left-0 top-1/3 w-full h-1 bg-gradient-to-r from-transparent via-amber-500 to-transparent opacity-20 blur-lg" />
        <div className="absolute left-0 top-2/3 w-full h-1 bg-gradient-to-r from-transparent via-amber-500 to-transparent opacity-20 blur-lg" />
      </div>

      {/* Navigation */}
      <nav className="relative z-50 py-6 px-8 border-b border-gray-800 bg-gray-900/95 backdrop-blur">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <Link to="/" className="flex items-center space-x-3 group">
            <div className="p-2 bg-gradient-to-br from-amber-600 to-orange-600 rounded-lg transform group-hover:rotate-12 transition-all">
              <FaPython className="text-2xl text-amber-300" />
            </div>
            <span className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-amber-400 to-orange-400">
              PyStatLab
            </span>
          </Link>
          <div className="hidden md:flex space-x-8">
            <Link to="/labs" className="text-gray-400 hover:text-amber-400 transition-colors">
              Labs
            </Link>
            <Link to="/compiler" className="text-gray-400 hover:text-amber-400 transition-colors">
              Compiler
            </Link>
          </div>
          <Link 
            to="/" 
            className="px-5 py-2.5 bg-amber-600 hover:bg-amber-700 rounded-md font-medium text-white flex items-center space-x-2 transition-colors shadow-lg shadow-amber-500/20"
          >
            <span>Home</span>
          </Link>
        </div>
      </nav>

      {/* Main Content */}
      <div className="container mx-auto py-20 px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-16 text-center"
        >
          <h1 className="text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-amber-400 to-orange-400">
            <FaDatabase className="inline-block mr-4" />
            Computational Statistics Laboratory
          </h1>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Advanced statistical computing environment with GPU acceleration and distributed processing
          </p>
        </motion.div>

        {/* Assignments Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {assignments.map((assignment) => {
            const IconComponent = assignment.icon;
            return (
              <motion.div
                key={assignment._id}
                className="cursor-pointer"
                whileHover={{ y: -5 }}
                whileTap={{ scale: 0.98 }}
              >
                <div className="bg-gray-800 rounded-xl p-6 border border-gray-700 hover:border-amber-500 transition-all shadow-lg hover:shadow-xl h-full">
                  <div className="text-4xl mb-4 text-amber-400">
                    <IconComponent />
                  </div>
                  <h3 className="text-2xl font-semibold text-gray-100 mb-2">
                    {assignment.title}
                  </h3>
                  <div className="flex items-center text-sm text-amber-400/80">
                    <FaFolder className="mr-2" />
                    {assignment.problems.length} case studies
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Admin Panel Button */}
        <motion.button
          onClick={() => setShowAdminPanel(true)}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="fixed bottom-8 right-8 p-4 bg-amber-600 hover:bg-amber-700 rounded-full shadow-xl z-[1000] shadow-amber-500/30"
        >
          <FaLock className="text-2xl text-white" />
        </motion.button>

        {/* Assignment Details Modal */}
        <AnimatePresence>
          {isPopupOpen && selectedAssignment && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 backdrop-blur-md bg-black/50 flex items-center justify-center"
              onClick={() => setIsPopupOpen(false)}
            >
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.8, opacity: 0 }}
                className="bg-gray-800 rounded-xl border border-amber-500/30 w-full max-w-4xl max-h-[78vh] overflow-y-auto"
                onClick={(e) => e.stopPropagation()}
              >
                <div className="p-8 relative">
                  <button
                    onClick={() => setIsPopupOpen(false)}
                    className="absolute top-6 right-6 p-2 rounded-full hover:bg-gray-700/50 transition-colors text-amber-400"
                  >
                    <FaTimes className="text-xl" />
                  </button>

                  <div className="flex items-center mb-8">
                    <div className="text-4xl text-amber-400 mr-4">
                      {selectedAssignment.icon}
                    </div>
                    <h2 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-amber-400 to-orange-400">
                      {selectedAssignment.title}
                    </h2>
                  </div>

                  <div className="space-y-8">
                    {selectedAssignment.problems.map((problem, pIndex) => (
                      <div key={pIndex} className="bg-gray-700/30 p-6 rounded-xl">
                        <h4 className="text-xl font-medium text-gray-100 mb-6">
                          {problem.question}
                        </h4>

                        <div className="bg-gray-900 rounded-xl overflow-hidden mb-6 relative">
                          <div className="flex items-center bg-gray-800 px-4 py-3 border-b border-gray-700">
                            <div className="flex space-x-2 mr-3">
                              <div className="w-3 h-3 rounded-full bg-red-500"></div>
                              <div className="w-3 h-3 rounded-full bg-amber-500"></div>
                              <div className="w-3 h-3 rounded-full bg-green-500"></div>
                            </div>
                            <div className="text-sm text-gray-400 font-mono">solution.py</div>
                          </div>
                          <pre className="p-6 text-sm text-amber-300 font-mono overflow-x-auto">
                            {problem.code}
                          </pre>
                          <button
                            onClick={() => navigator.clipboard.writeText(problem.code)}
                            className="absolute top-1.5 right-1.5 p-2 rounded-md bg-gray-700 hover:bg-gray-600 text-amber-300 text-lg"
                            title="Copy to clipboard"
                          >
                            <FaClipboard />
                          </button>
                        </div>

                        <div className="bg-gray-900 p-6 rounded-xl">
                          <span className="text-amber-400 text-sm font-medium">EXPECTED OUTPUT:</span>
                          <pre className="text-gray-300 text-sm font-mono whitespace-pre-wrap mt-4">
                            {problem.output}
                          </pre>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Admin Panel */}
        <AnimatePresence>
          {showAdminPanel && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-[1002] bg-black/50 backdrop-blur-sm flex items-center justify-center"
            >
              <motion.div
                initial={{ scale: 0.9 }}
                animate={{ scale: 1 }}
                className="bg-gray-800 p-6 rounded-xl w-full max-w-2xl mx-4 max-h-[70vh] overflow-y-auto border border-amber-500/30"
              >
                <div className="flex justify-between items-start mb-4">
                  <h2 className="text-2xl font-bold flex items-center gap-2 text-amber-400">
                    <FaLock className="text-amber-400" /> LAB MANAGEMENT CONSOLE
                  </h2>
                  <button
                    onClick={handleCloseAdminPanel}
                    className="p-2 hover:bg-gray-700 rounded-full text-amber-400"
                  >
                    <FaTimes className="text-xl" />
                  </button>
                </div>

                {!pinVerified ? (
                  <form onSubmit={handlePinSubmit} className="space-y-6">
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-amber-400">
                        ENTER ADMINISTRATOR CREDENTIALS
                      </label>
                      <input
                        type="password"
                        value={pin}
                        onChange={(e) => setPin(e.target.value.replace(/\D/g, '').slice(0, 4))}
                        className="w-full p-2 bg-gray-700 rounded text-center text-2xl font-mono tracking-[0.5em] border border-amber-500/30"
                        placeholder="••••"
                        inputMode="numeric"
                      />
                    </div>
                    <button
                      type="submit"
                      className="w-full py-3 bg-amber-600 hover:bg-amber-700 rounded-lg font-medium transition-colors shadow-lg shadow-amber-500/20"
                    >
                      AUTHENTICATE
                    </button>
                  </form>
                ) : (
                  <>
                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div className="space-y-2">
                        <label className="text-sm font-medium text-amber-400">LAB TITLE</label>
                        <input
                          value={formData.title}
                          onChange={(e) => setFormData({...formData, title: e.target.value})}
                          className="w-full p-2 bg-gray-700 rounded border border-amber-500/30"
                          placeholder="Enter lab title"
                        />
                      </div>

                      <div className="space-y-2">
                        <label className="text-sm font-medium text-amber-400">ICON SELECTOR</label>
                        <select
                          value={formData.icon}
                          onChange={(e) => setFormData({...formData, icon: e.target.value})}
                          className="w-full p-2 bg-gray-700 rounded border border-amber-500/30"
                        >
                          {Object.keys(iconComponents).map(icon => (
                            <option key={icon} value={icon} className="bg-gray-800 text-amber-400">
                              {icon}
                            </option>
                          ))}
                        </select>
                      </div>

                      <div className="space-y-4">
                      {formData.problems.map((problem, index) => (
  <div key={index} className="bg-gray-700/30 p-4 rounded-lg border border-amber-500/20">
    <div className="flex justify-between mb-2">
      <span className="text-amber-300">Case Study {index + 1}</span>
      {index > 0 && (
        <button
          type="button"
          onClick={() => setFormData(prev => ({
            ...prev,
            problems: prev.problems.filter((_, i) => i !== index)
          }))}  // Corrected line
          className="text-red-400 hover:text-red-300"
        >
          <FaTimes />
        </button>
      )}
    </div>

    <div className="space-y-4">
      <textarea
        placeholder="Research Question"
        value={problem.question}
        onChange={(e) => handleProblemChange(index, 'question', e.target.value)}
        className="w-full p-2 bg-gray-700 rounded border border-amber-500/30"
        rows="2"
      />
      <textarea
        placeholder="Python Solution Code"
        value={problem.code}
        onChange={(e) => handleProblemChange(index, 'code', e.target.value)}
        className="w-full p-2 bg-gray-700 rounded font-mono text-sm text-amber-300 border border-amber-500/30"
        rows="4"
      />
      <textarea
        placeholder="Expected Analysis"
        value={problem.output}
        onChange={(e) => handleProblemChange(index, 'output', e.target.value)}
        className="w-full p-2 bg-gray-700 rounded border border-amber-500/30"
        rows="2"
      />
    </div>
  </div>
))}

                        <button
                          type="button"
                          onClick={addProblemField}
                          className="w-full py-2 bg-gray-700 hover:bg-gray-600 rounded text-amber-300 border border-amber-500/30 transition-colors"
                        >
                          <FaPlus className="inline mr-2" />
                          Add Case Study
                        </button>
                      </div>

                      <div className="grid grid-cols-2 gap-4">
                        <button
                          type="submit"
                          className="px-6 py-2 bg-amber-600 hover:bg-amber-700 rounded-lg transition-colors"
                        >
                          DEPLOY LAB
                        </button>
                        <button
                          type="button"
                          onClick={handleCloseAdminPanel}
                          className="px-6 py-2 bg-red-600 hover:bg-red-700 rounded-lg transition-colors"
                        >
                          ABORT
                        </button>
                      </div>
                    </form>

                    <div className="mt-8">
                      <h3 className="text-lg font-semibold text-amber-400 mb-4 border-b border-amber-500/30 pb-2">
                        ACTIVE LAB INSTANCES
                      </h3>
                      <div className="space-y-2">
                        {assignments.map(assignment => (
                          <div 
                            key={assignment._id}
                            className="flex justify-between items-center bg-gray-700/30 p-3 rounded-lg hover:bg-amber-900/10 transition-colors"
                          >
                            <span className="text-amber-300">{assignment.title}</span>
                            <button
                              onClick={() => handleDelete(assignment._id)}
                              className="p-2 text-red-400 hover:text-red-300"
                            >
                              <FaTrash />
                            </button>
                          </div>
                        ))}
                      </div>
                    </div>
                  </>
                )}
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Footer */}
        <footer className="mt-20 pt-12 border-t border-gray-800">
          <div className="max-w-7xl mx-auto text-center">
            <div className="flex items-center justify-center space-x-3 mb-6">
              <FaPython className="text-2xl text-amber-400" />
              <span className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-amber-400 to-orange-400">
                PyStatLab
              </span>
            </div>
            <div className="text-sm text-gray-500">
              © {new Date().getFullYear()} Next Generation Statistical Computing Platform
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}