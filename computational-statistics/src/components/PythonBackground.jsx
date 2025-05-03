import React from 'react';
import { motion } from 'framer-motion';
import { FaPython } from 'react-icons/fa';

// Sample Python code lines (you can pass this as props if you want it dynamic)
const pythonCodeLines = [
        "import numpy as np",
        "import pandas as pd",
        "from sklearn.model_selection import train_test_split",
        "import tensorflow as tf",
        "import matplotlib.pyplot as plt",
        "import seaborn as sns",
        "def analyze_data(data):",
        "    X = data.drop('target', axis=1)",
        "    y = data['target']",
        "    model = tf.keras.Sequential([",
        "        tf.keras.layers.Dense(64, activation='relu'),",
        "        tf.keras.layers.Dense(1, activation='sigmoid')",
        "    ])",
        "    model.compile(optimizer='adam',",
        "                  loss='binary_crossentropy',",
        "                  metrics=['accuracy'])",
        "    history = model.fit(X, y, epochs=10)",
        "    return history"
    ];
const PythonBackground = () => {
    return (
        <div className="fixed inset-0 z-0 overflow-hidden">
            {/* Circuit board pattern */}
            <div className="absolute inset-0 opacity-5 bg-[length:40px_40px] bg-[linear-gradient(to_right,#3b3b3b_1px,transparent_1px),linear-gradient(to_bottom,#3b3b3b_1px,transparent_1px)]" />
            
            {/* Floating Python code elements */}
            {pythonCodeLines.map((line, index) => (
                <motion.div
                    key={index}
                    className="absolute text-xs font-mono text-gray-700 opacity-20"
                    initial={{
                        x: Math.random() * 100,
                        y: Math.random() * 100,
                        rotate: Math.random() * 10 - 5
                    }}
                    animate={{
                        x: [null, Math.random() * 50 - 25],
                        y: [null, Math.random() * 50 - 25],
                        rotate: [null, Math.random() * 10 - 5]
                    }}
                    transition={{
                        duration: 30 + Math.random() * 30,
                        repeat: Infinity,
                        repeatType: "reverse"
                    }}
                    style={{
                        left: `${10 + Math.random() * 80}%`,
                        top: `${10 + Math.random() * 80}%`
                    }}
                >
                    {line}
                </motion.div>
            ))}

            {/* Subtle Python logo watermark */}
            <div className="absolute inset-0 flex items-center justify-center opacity-5">
                <FaPython className="text-[40vh] text-orange-500" />
            </div>
        </div>
    );
};

export default PythonBackground;
