import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaPython } from 'react-icons/fa';

const Navbar = () => {
  return (
    <nav className="relative z-50 py-6 px-8 border-b border-gray-800 bg-gray-900/95 backdrop-blur">
      <div className="max-w-7xl mx-auto flex justify-between items-center">

        {/* Logo Section */}
        <Link to="/" className="flex items-center space-x-3 group">
          <motion.div
            className="p-2 bg-gradient-to-br from-orange-600 to-amber-600 rounded-lg"
            whileHover={{ rotate: 12 }}
            transition={{ type: 'spring', stiffness: 300 }}
          >
            <FaPython className="text-2xl text-orange-300" />
          </motion.div>
          <span className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-orange-400 to-amber-400">
            PyStatLab
          </span>
        </Link>

        {/* Desktop Nav Links */}
        <div className="hidden md:flex space-x-8">
          <Link to="/learn" className="text-gray-400 hover:text-orange-400 transition-colors font-medium">
            Learn
          </Link>
          <Link to="/compiler" className="text-gray-400 hover:text-orange-400 transition-colors font-medium">
            Compiler
          </Link>
        </div>

        {/* Call to Action */}
        <Link
          to="/"
          className="px-5 py-2.5 bg-orange-600 hover:bg-orange-700 rounded-md font-medium text-white flex items-center space-x-2 transition-colors shadow-lg shadow-orange-500/20"
        >
          <span>Home</span>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
