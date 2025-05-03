import { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaHome, FaPython, FaBars } from 'react-icons/fa';

const Navigation = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <nav className="relative z-50 py-6 px-8 border-b border-gray-800 bg-gray-900/95 backdrop-blur">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        {/* Logo and brand name */}
        <Link to="/" className="flex items-center space-x-3 group">
          <div className="p-2 bg-gradient-to-br from-amber-600 to-orange-600 rounded-lg transform group-hover:rotate-12 transition-all">
            <FaPython className="text-2xl text-amber-300" />
          </div>
          <span className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-amber-400 to-orange-400">
            PyStatLab
          </span>
        </Link>

        {/* Desktop View: Home Terminal Button */}
        <div className="hidden md:flex items-center space-x-4">
          <Link
            to="/"
            className="px-5 py-2.5 bg-amber-600 hover:bg-amber-700 rounded-md font-medium text-white flex items-center space-x-2 transition-colors shadow-lg shadow-amber-500/20"
          >
            <FaHome className="text-sm" />
            <span>Home Terminal</span>
          </Link>
        </div>

        {/* Mobile View: Hamburger Icon */}
        <div className="md:hidden flex items-center">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="text-white"
          >
            <FaBars className="text-2xl" />
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden flex flex-col items-center space-y-4 py-4 bg-gray-900/95 backdrop-blur">
          <Link
            to="/"
            className="px-5 py-2.5 bg-amber-600 hover:bg-amber-700 rounded-md font-medium text-white flex items-center space-x-2 transition-colors shadow-lg shadow-amber-500/20"
          >
            <FaHome className="text-sm" />
            <span>Home Terminal</span>
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navigation;