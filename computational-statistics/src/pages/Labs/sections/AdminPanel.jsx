import { motion, AnimatePresence } from 'framer-motion';
import { FaPython, FaChartLine, FaDatabase, FaFlask, FaBookOpen, FaHome, 
    FaTimes, FaClipboard, FaTrash, FaPlus, FaFolder, FaProjectDiagram, 
    FaRegChartBar, FaCode,FaLock,FaEdit } from 'react-icons/fa';
import PinVerification from './PinVerification';

const iconComponents = {
    FaPython, FaChartLine, FaDatabase, FaFlask, FaBookOpen, FaHome, 
    FaTimes, FaClipboard, FaTrash, FaPlus, FaFolder, FaProjectDiagram, 
    FaRegChartBar, FaCode,FaLock,FaEdit
  };
export default function AdminPanel({
  isOpen,
  onClose,
  pinVerified,
  onPinSubmit,
  pin,
  setPin,
  isEditMode,
  formData,
  setFormData,
  onSubmit,
  assignments,
  onDelete,
  onEditAssignment
}) {
  if (!isOpen) return null;

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

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-[1002] bg-black/50 backdrop-blur-sm flex items-center justify-center p-4"
      >
        <motion.div
          initial={{ scale: 0.9 }}
          animate={{ scale: 1 }}
          className="bg-gray-800 p-6 rounded-xl w-full max-w-2xl mx-4 max-h-[80vh] overflow-y-auto border border-orange-500/30 shadow-2xl"
        >
          <div className="flex justify-between items-start mb-4">
            <h2 className="text-2xl font-bold flex items-center gap-2 text-orange-400">
              <FaLock className="text-orange-400" /> 
              {isEditMode ? 'EDIT LAB' : 'LAB MANAGEMENT CONSOLE'}
            </h2>
            <button
              onClick={onClose}
              className="p-2 hover:bg-gray-700 rounded-full text-orange-400"
            >
              <FaTimes className="text-xl" />
            </button>
          </div>

          {!pinVerified ? (
            <PinVerification 
              pin={pin}
              setPin={setPin}
              onSubmit={onPinSubmit}
            />
          ) : (
            <>
              <form onSubmit={onSubmit} className="space-y-6">
                <div className="space-y-2">
                  <label className="text-sm font-medium text-orange-400">LAB TITLE</label>
                  <input
                    value={formData.title}
                    onChange={(e) => setFormData({...formData, title: e.target.value})}
                    className="w-full p-2 bg-gray-700 rounded border border-orange-500/30"
                    placeholder="Enter lab title"
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium text-orange-400">ICON SELECTOR</label>
                  <select
                    value={formData.icon}
                    onChange={(e) => setFormData({...formData, icon: e.target.value})}
                    className="w-full p-2 bg-gray-700 rounded border border-orange-500/30 text-orange-400"
                  >
                    {Object.keys(iconComponents).map(icon => (
                      <option key={icon} value={icon} className="bg-gray-800 text-orange-400">
                        {icon}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="space-y-4">
                  {formData.problems.map((problem, index) => (
                    <motion.div 
                      key={index} 
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3 }}
                      className="bg-gray-700/30 p-4 rounded-lg border border-orange-500/20"
                    >
                      <div className="flex justify-between mb-2">
                        <span className="text-orange-300">Case Study {index + 1}</span>
                        {index > 0 && (
                          <button
                            type="button"
                            onClick={() => setFormData(prev => ({
                              ...prev,
                              problems: prev.problems.filter((_, i) => i !== index)
                            }))}
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
                          className="w-full p-2 bg-gray-700 rounded border border-orange-500/30"
                          rows="2"
                        />
                        <textarea
                          placeholder="Python Solution Code"
                          value={problem.code}
                          onChange={(e) => handleProblemChange(index, 'code', e.target.value)}
                          className="w-full p-2 bg-gray-700 rounded font-mono text-sm text-orange-300 border border-orange-500/30"
                          rows="4"
                        />
                        <textarea
                          placeholder="Expected Analysis"
                          value={problem.output}
                          onChange={(e) => handleProblemChange(index, 'output', e.target.value)}
                          className="w-full p-2 bg-gray-700 rounded border border-orange-500/30"
                          rows="2"
                        />
                      </div>
                    </motion.div>
                  ))}

                  <motion.button
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.98 }}
                    type="button"
                    onClick={addProblemField}
                    className="w-full py-2 bg-gray-700 hover:bg-gray-600 rounded text-orange-300 border border-orange-500/30 transition-colors"
                  >
                    <FaPlus className="inline mr-2" />
                    Add Case Study
                  </motion.button>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <motion.button
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.98 }}
                    type="submit"
                    className="px-6 py-2 bg-orange-600 hover:bg-orange-700 rounded-lg transition-colors"
                  >
                    {isEditMode ? 'UPDATE LAB' : 'DEPLOY LAB'}
                  </motion.button>
                  <motion.button
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.98 }}
                    type="button"
                    onClick={onClose}
                    className="px-6 py-2 bg-red-600 hover:bg-red-700 rounded-lg transition-colors"
                  >
                    ABORT
                  </motion.button>
                </div>
              </form>

              {!isEditMode && (
                <div className="mt-8">
                  <h3 className="text-lg font-semibold text-orange-400 mb-4 border-b border-orange-500/30 pb-2">
                    ACTIVE LAB INSTANCES
                  </h3>
                  <div className="space-y-2">
                    {assignments.map(assignment => (
                      <motion.div 
                        key={assignment._id}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.3 }}
                        className="flex justify-between items-center bg-gray-700/30 p-3 rounded-lg hover:bg-orange-900/10 transition-colors border border-gray-700"
                      >
                        <span className="text-orange-300">{assignment.title}</span>
                        <div className="flex space-x-2">
                          <button
                            onClick={() => onEditAssignment(assignment)}
                            className="p-2 text-orange-400 hover:text-orange-300"
                          >
                            <FaEdit />
                          </button>
                          <button
                            onClick={() => onDelete(assignment._id)}
                            className="p-2 text-red-400 hover:text-red-300"
                          >
                            <FaTrash />
                          </button>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>
              )}
            </>
          )}
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}