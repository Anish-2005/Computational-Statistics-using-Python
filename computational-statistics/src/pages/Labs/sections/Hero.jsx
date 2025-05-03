import React from 'react';
import { motion } from 'framer-motion';
import { FaDatabase } from 'react-icons/fa';

const Hero = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="mb-16 text-center"
    >
      <div className="inline-block px-4 py-1 mb-6 text-xs bg-orange-500/20 text-orange-300 rounded-full border border-orange-500/30">
        PYTHON 3.11 • TENSORFLOW 2.0 • CUDA ACCELERATED
      </div>

      <h1 className="text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-orange-400 to-amber-400">
        <FaDatabase className="inline-block mr-4" />
        Computational Statistics Laboratory
      </h1>

      <p className="text-gray-400 text-lg max-w-2xl mx-auto">
        Advanced statistical computing environment with GPU acceleration and distributed processing
      </p>
    </motion.div>
  );
};

export default Hero;
