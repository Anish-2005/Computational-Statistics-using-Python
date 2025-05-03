import React from 'react';
import { motion } from 'framer-motion';
import { FaPython, FaChartLine, FaDatabase, FaCode, FaRocket, FaBook, FaBrain, FaBars } from 'react-icons/fa';

const features = [
    {
        icon: <FaChartLine className="text-orange-400" />,
        title: "Predictive Analytics",
        description: "Advanced machine learning models with scikit-learn and TensorFlow"
    },
    {
        icon: <FaDatabase className="text-orange-300" />,
        title: "Big Data Processing",
        description: "Handle large datasets with Dask and PySpark integration"
    },
    {
        icon: <FaBrain className="text-orange-200" />,
        title: "Neural Networks",
        description: "Deep learning architectures with PyTorch and Keras"
    },
    {
        icon: <FaCode className="text-orange-100" />,
        title: "Code Optimization",
        description: "Real-time code analysis and performance profiling"
    }
];

const Features = () => {
    return (
        <section className="relative z-10 py-20 px-8 bg-gray-900/50">
            <div className="max-w-7xl mx-auto">
                <motion.div
                    className="text-center mb-16"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                >
                    <h2 className="text-3xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-orange-400 to-amber-400">
                        Cutting-Edge Features
                    </h2>
                    <p className="text-gray-400 max-w-2xl mx-auto">
                        Designed for high-performance statistical computing and machine learning
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {features.map((feature, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            whileHover={{ y: -5 }}
                            className="bg-gray-800 rounded-xl p-6 border border-gray-700 hover:border-orange-500 transition-all shadow-lg hover:shadow-xl hover:shadow-orange-500/10"
                        >
                            <div className="text-3xl mb-4">{feature.icon}</div>
                            <h3 className="text-xl font-semibold mb-2 text-gray-100">{feature.title}</h3>
                            <p className="text-gray-400">{feature.description}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Features;
