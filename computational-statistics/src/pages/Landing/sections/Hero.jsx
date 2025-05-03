import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaRocket, FaBook } from 'react-icons/fa';

const Hero = () => {
    return (
        <main className="relative z-10 pt-24 pb-32 px-8">
            <div className="max-w-7xl mx-auto">
                <div className="flex flex-col lg:flex-row items-center">
                    {/* Text Section */}
                    <div className="lg:w-1/2 mb-16 lg:mb-0 lg:pr-12">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8 }}
                        >
                            <motion.div
                                className="inline-block px-4 py-1 mb-6 text-xs bg-orange-500/20 text-orange-300 rounded-full border border-orange-500/30"
                                whileHover={{ scale: 1.05 }}
                            >
                                PYTHON 3.11 • TENSORFLOW 2.0 • CUDA ACCELERATED
                            </motion.div>
                            <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight bg-clip-text text-transparent bg-gradient-to-r from-orange-400 to-amber-400">
                                Next-Gen Statistical<br />
                                Computing Platform
                            </h1>
                            <p className="text-lg text-gray-400 mb-8 max-w-lg">
                                Harness the power of Python for advanced statistical analysis, predictive modeling,
                                and data-driven insights in a futuristic computational environment.
                            </p>
                            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
                                <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.98 }}>
                                    <Link
                                        to="/compiler"
                                        className="px-7 py-3.5 bg-orange-600 hover:bg-orange-700 rounded-md font-medium text-white flex items-center justify-center space-x-2 transition-colors shadow-lg shadow-orange-500/30"
                                    >
                                        <FaRocket />
                                        <span>Start Analyzing</span>
                                    </Link>
                                </motion.div>
                                <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.98 }}>
                                    <Link
                                        to="/learn"
                                        className="px-7 py-3.5 border border-gray-700 hover:border-orange-500 rounded-md font-medium text-gray-300 hover:text-orange-400 flex items-center justify-center space-x-2 transition-colors"
                                    >
                                        <FaBook />
                                        <span>Explore Tutorials</span>
                                    </Link>
                                </motion.div>
                            </div>
                        </motion.div>
                    </div>

                    {/* Code Preview Section */}
                    <div className="w-full lg:w-1/2">
                        <motion.div
                            className="bg-gray-800 rounded-xl shadow-2xl overflow-hidden border border-gray-700"
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.2, duration: 0.8 }}
                            whileHover={{ y: -5 }}
                        >
                            <div className="bg-gray-900 px-5 py-3 border-b border-gray-700 flex items-center">
                                <div className="flex space-x-2 mr-4">
                                    <div className="w-3 h-3 rounded-full bg-red-500"></div>
                                    <div className="w-3 h-3 rounded-full bg-amber-500"></div>
                                    <div className="w-3 h-3 rounded-full bg-green-500"></div>
                                </div>
                                <div className="text-sm text-gray-400 font-mono">neural_network.py</div>
                            </div>
                            <pre className="p-6 overflow-x-auto text-sm bg-gray-800">
                                <code className="text-gray-300 font-mono">
                                    {`# Deep Learning Model
import tensorflow as tf
from tensorflow.keras.layers import Dense
from tensorflow.keras.models import Sequential

# Create neural network
model = Sequential([
    Dense(128, activation='relu', input_shape=(784,)),
    Dense(64, activation='relu'),
    Dense(10, activation='softmax')
])

# Compile model
model.compile(optimizer='adam',
              loss='sparse_categorical_crossentropy',
              metrics=['accuracy'])

# Train model
history = model.fit(X_train, y_train,
                    epochs=25,
                    validation_data=(X_test, y_test))`}
                                </code>
                            </pre>
                        </motion.div>
                    </div>
                </div>
            </div>
        </main>
    );
};

export default Hero;
