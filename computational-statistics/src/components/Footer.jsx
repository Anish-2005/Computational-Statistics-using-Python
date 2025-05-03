import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaPython } from 'react-icons/fa';

const Footer = () => {
    return (
        <footer className="relative z-10 py-12 px-8 border-t border-gray-800 bg-gray-900">
            <div className="max-w-7xl mx-auto">
                <div className="flex flex-col md:flex-row justify-between items-center">
                    <motion.div 
                        className="flex items-center space-x-3 mb-6 md:mb-0"
                        whileHover={{ scale: 1.05 }}
                    >
                        <FaPython className="text-2xl text-orange-400" />
                        <span className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-orange-400 to-amber-400">
                            PyStatLab
                        </span>
                    </motion.div>
                    <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-8 text-center sm:text-left">
                        <Link 
                            to="/docs" 
                            className="text-gray-400 hover:text-orange-400 transition-colors"
                        >
                            Documentation
                        </Link>
                        <Link 
                            to="/examples" 
                            className="text-gray-400 hover:text-orange-400 transition-colors"
                        >
                            Examples
                        </Link>
                        <Link 
                            to="/research" 
                            className="text-gray-400 hover:text-orange-400 transition-colors"
                        >
                            Research
                        </Link>
                        <Link 
                            to="/enterprise" 
                            className="text-gray-400 hover:text-orange-400 transition-colors"
                        >
                            Enterprise
                        </Link>
                    </div>
                </div>
                <motion.div 
                    className="mt-8 pt-8 border-t border-gray-800 text-center text-sm text-gray-500"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                >
                    © {new Date().getFullYear()} PyStatLab — Next Generation Statistical Computing Platform
                </motion.div>
            </div>
        </footer>
    );
};

export default Footer;
