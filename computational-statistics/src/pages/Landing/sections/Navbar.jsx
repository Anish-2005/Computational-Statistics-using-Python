import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaPython, FaBars } from 'react-icons/fa';

const Navbar = () => {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    return (
        <nav className="relative z-50 py-6 px-8 border-b border-gray-800 bg-gray-900/95 backdrop-blur">
            <div className="max-w-7xl mx-auto flex justify-between items-center">
                <Link to="/" className="flex items-center space-x-3 group">
                    <motion.div
                        className="p-2 bg-gradient-to-br from-orange-600 to-amber-600 rounded-lg"
                        whileHover={{ rotate: 12, scale: 1.1 }}
                        transition={{ type: "spring", stiffness: 300 }}
                    >
                        <FaPython className="text-2xl text-orange-300" />
                    </motion.div>
                    <span className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-orange-400 to-amber-400">
                        PyStatLab
                    </span>
                </Link>

                {/* Mobile Menu Toggle */}
                <div className="md:hidden flex items-center">
                    <button
                        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                        className="text-gray-400 hover:text-orange-400 transition-colors"
                        aria-label="Toggle menu"
                    >
                        <FaBars className="text-xl" />
                    </button>
                </div>

                {/* Desktop Links */}
                <div className="hidden md:flex space-x-8">
                    {['labs', 'compiler', 'learn'].map((route) => (
                        <Link
                            key={route}
                            to={`/${route}`}
                            className="text-gray-400 hover:text-orange-400 transition-colors relative group"
                        >
                            {route.charAt(0).toUpperCase() + route.slice(1)}
                            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-orange-400 group-hover:w-full transition-all duration-300"></span>
                        </Link>
                    ))}
                </div>
            </div>

            {/* Mobile Menu */}
            <motion.div
                className={`md:hidden ${mobileMenuOpen ? 'block' : 'hidden'} mt-4 space-y-4`}
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: mobileMenuOpen ? 1 : 0, height: mobileMenuOpen ? 'auto' : 0 }}
                transition={{ duration: 0.3 }}
            >
                {['labs', 'compiler', 'learn'].map((route) => (
                    <Link
                        key={route}
                        to={`/${route}`}
                        className="block text-gray-400 hover:text-orange-400 transition-colors py-2"
                        onClick={() => setMobileMenuOpen(false)}
                    >
                        {route.charAt(0).toUpperCase() + route.slice(1)}
                    </Link>
                ))}
            </motion.div>
        </nav>
    );
};

export default Navbar;
