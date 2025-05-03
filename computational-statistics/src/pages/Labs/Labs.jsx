import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import {
  FaPython, FaChartLine, FaDatabase, FaFlask, FaBookOpen, FaHome, 
  FaTimes, FaClipboard, FaTrash, FaPlus, FaFolder, FaProjectDiagram, 
  FaLock, FaRegChartBar, FaCode, FaRocket, FaBook, FaEdit,
} from 'react-icons/fa';
import PythonBackground from '../../components/PythonBackground';
import Footer from '../../components/Footer';
import Navbar from './sections/Navbar';
import Hero from './sections/Hero';
import AssignmentGrid from './sections/AssignmentGrid';
import AssignmentModal from './sections/AssignmentModal';
import AdminPanel from './sections/AdminPanel';

const iconComponents = {
  FaPython, FaChartLine, FaDatabase, FaFlask, FaBookOpen, FaHome, 
  FaTimes, FaClipboard, FaTrash, FaPlus, FaFolder, FaProjectDiagram, 
  FaRegChartBar, FaCode,
};

export default function PythonLabsPage() {
  const [assignments, setAssignments] = useState([]);
  const [selectedAssignment, setSelectedAssignment] = useState(null);
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [showAdminPanel, setShowAdminPanel] = useState(false);
  const [isEditMode, setIsEditMode] = useState(false);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [formData, setFormData] = useState({
    title: '',
    icon: 'FaRegChartBar',
    problems: [{ question: '', code: '', output: '' }]
  });
  const [pin, setPin] = useState('');
  const [pinVerified, setPinVerified] = useState(false);
  const HARDCODED_PIN = import.meta.env.VITE_ADMIN_PIN;

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
    setIsEditMode(false);
    setPin('');
    setFormData({
      title: '',
      icon: 'FaRegChartBar',
      problems: [{ question: '', code: '', output: '' }]
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (isEditMode) {
        const response = await fetch(`${import.meta.env.VITE_FRONTEND_URL}/api/python-assignments/${formData._id}/edit`, {
          method: 'PATCH',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            title: formData.title,
            icon: formData.icon,
            problems: formData.problems
          })
        });

        const { data } = await response.json();
        
        setAssignments(prev => prev.map(a => 
          a._id === data._id ? {
            ...data,
            icon: iconComponents[data.icon] || FaRegChartBar
          } : a
        ));
      } else {
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
      }
      
      window.location.href = '/labs';
    } catch (error) {
      console.error('Error saving assignment:', error);
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

  const handleEditAssignment = async (assignment) => {
    const iconName = Object.keys(iconComponents).find(
      key => iconComponents[key] === assignment.icon
    ) || 'FaRegChartBar';

    setFormData({
      ...assignment,
      icon: iconName
    });
    setIsEditMode(true);
    setPinVerified(true);
    setShowAdminPanel(true);
  };

  const handleViewAssignment = (assignment) => {
    setSelectedAssignment(assignment);
    setIsPopupOpen(true);
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
    <div className="min-h-screen bg-gray-900 text-gray-100 font-sans overflow-x-hidden relative">
      <PythonBackground />
      <div className="fixed inset-0 z-0 pointer-events-none">
        <div className="absolute left-0 top-1/3 w-full h-1 bg-gradient-to-r from-transparent via-orange-500 to-transparent opacity-20 blur-lg" />
        <div className="absolute left-0 top-2/3 w-full h-1 bg-gradient-to-r from-transparent via-orange-500 to-transparent opacity-20 blur-lg" />
      </div>
      <Navbar />
      <div className="container mx-auto py-20 px-8 relative z-10">
        <Hero />
        <AssignmentGrid 
          assignments={assignments}
          onViewAssignment={handleViewAssignment}
          pinVerified={pinVerified}
          onEditAssignment={handleEditAssignment}
        />
        <motion.button
          onClick={() => setShowAdminPanel(true)}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="fixed bottom-8 right-8 p-4 bg-orange-600 hover:bg-orange-700 rounded-full shadow-xl z-[1000] shadow-orange-500/30"
        >
          <FaLock className="text-2xl text-white" />
        </motion.button>
        <AssignmentModal
          assignment={selectedAssignment}
          isOpen={isPopupOpen}
          onClose={() => setIsPopupOpen(false)}
          pinVerified={pinVerified}
          onEdit={handleEditAssignment}
          onDelete={handleDelete}
        />
        <AdminPanel
          isOpen={showAdminPanel}
          onClose={handleCloseAdminPanel}
          pinVerified={pinVerified}
          onPinSubmit={handlePinSubmit}
          pin={pin}
          setPin={setPin}
          isEditMode={isEditMode}
          formData={formData}
          setFormData={setFormData}
          onSubmit={handleSubmit}
          assignments={assignments}
          onDelete={handleDelete}
          onEditAssignment={handleEditAssignment}
        />
        <Footer />
      </div>
    </div>
  );
}