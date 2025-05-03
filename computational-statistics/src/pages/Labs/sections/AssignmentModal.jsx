import { motion, AnimatePresence } from 'framer-motion';
import { FaTimes, FaClipboard, FaEdit, FaTrash } from 'react-icons/fa';

export default function AssignmentModal({ 
  assignment, 
  isOpen, 
  onClose, 
  pinVerified, 
  onEdit, 
  onDelete 
}) {
  if (!isOpen || !assignment) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-50 backdrop-blur-md bg-black/50 flex items-center justify-center p-4"
        onClick={onClose}
      >
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.8, opacity: 0 }}
          className="bg-gray-800 rounded-xl border border-orange-500/30 w-full max-w-4xl max-h-[90vh] overflow-y-auto shadow-2xl"
          onClick={(e) => e.stopPropagation()}
        >
          <div className="p-8 relative">
            <button
              onClick={onClose}
              className="absolute top-6 right-6 p-2 rounded-full hover:bg-gray-700/50 transition-colors text-orange-400"
            >
              <FaTimes className="text-xl" />
            </button>

            <div className="flex items-center mb-8">
              <div className="text-4xl text-orange-400 mr-4">
                {assignment.icon}
              </div>
              <h2 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-orange-400 to-amber-400">
                {assignment.title}
              </h2>
            </div>

            {pinVerified && (
              <div className="mb-6 flex gap-3">
                <motion.button
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => {
                    onClose();
                    onEdit(assignment);
                  }}
                  className="flex items-center gap-2 px-4 py-2 bg-orange-600 hover:bg-orange-700 rounded-md text-white transition-colors shadow-lg shadow-orange-500/20"
                >
                  <FaEdit /> Edit Lab
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => {
                    if (window.confirm('Are you sure you want to delete this lab?')) {
                      onDelete(assignment._id);
                      onClose();
                    }
                  }}
                  className="flex items-center gap-2 px-4 py-2 bg-red-600 hover:bg-red-700 rounded-md text-white transition-colors shadow-lg shadow-red-500/20"
                >
                  <FaTrash /> Delete Lab
                </motion.button>
              </div>
            )}

            <div className="space-y-8">
              {assignment.problems.map((problem, pIndex) => (
                <motion.div 
                  key={pIndex} 
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3 }}
                  className="bg-gray-700/30 p-6 rounded-xl border border-gray-600"
                >
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
                    <pre className="p-6 text-sm text-orange-300 font-mono overflow-x-auto">
                      {problem.code}
                    </pre>
                    <button
                      onClick={() => navigator.clipboard.writeText(problem.code)}
                      className="absolute top-1.5 right-1.5 p-2 rounded-md bg-gray-700 hover:bg-gray-600 text-orange-300 text-lg"
                      title="Copy to clipboard"
                    >
                      <FaClipboard />
                    </button>
                  </div>

                  <div className="bg-gray-900 p-6 rounded-xl border border-gray-700">
                    <span className="text-orange-400 text-sm font-medium">EXPECTED OUTPUT:</span>
                    <pre className="text-gray-300 text-sm font-mono whitespace-pre-wrap mt-4">
                      {problem.output}
                    </pre>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}