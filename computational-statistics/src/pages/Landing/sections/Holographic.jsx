import React from 'react';
import { motion } from 'framer-motion';

const features = [
  ["3D Plotting", "Mayavi and Plotly integration"],
  ["Real-time Rendering", "60 FPS GPU acceleration"],
  ["Statistical Overlays", "Confidence intervals and distributions"],
  ["Export Formats", "PNG, SVG, and WebM video"]
];

const Holographic = () => {
  return (
    <section className="relative z-10 py-20 px-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row items-center">
          {/* Text Content */}
          <div className="lg:w-1/2 mb-12 lg:mb-0 lg:pr-12">
            <motion.h2
              className="text-3xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-orange-400 to-amber-400"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              Interactive 3D Visualization
            </motion.h2>
            <motion.p
              className="text-gray-400 mb-6"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              Explore multidimensional datasets with our WebGL-powered visualization engine
            </motion.p>

            <div className="space-y-6">
              {features.map(([title, desc], i) => (
                <motion.div
                  key={i}
                  className="flex items-start"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.2 + i * 0.1 }}
                >
                  <div className="flex-shrink-0 mt-1.5 mr-4 text-orange-400">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-100">{title}</h4>
                    <p className="text-gray-400 text-sm">{desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* 3D Preview Placeholder */}
          <div className="lg:w-1/2">
            <motion.div
              className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl p-1 shadow-2xl"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              whileHover={{ scale: 1.02 }}
            >
              <div className="bg-gray-900 rounded-xl p-6 border border-gray-700">
                <div className="animate-pulse-fast bg-gradient-to-r from-orange-500/20 to-transparent w-full h-64 rounded-lg flex items-center justify-center">
                  <div className="text-orange-400 text-center">
                    <div className="text-4xl mb-2">📊</div>
                    <div className="text-sm font-mono">Rendering 3D Scene...</div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Holographic;
