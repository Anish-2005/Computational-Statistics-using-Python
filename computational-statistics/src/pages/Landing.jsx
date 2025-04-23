import React from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaPython, FaChartLine, FaDatabase, FaCode, FaRocket, FaBook, FaBrain,FaBars } from 'react-icons/fa';

const DarkStatsLanding = () => {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

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

  return (
    <div className="min-h-screen bg-gray-900 text-gray-100 font-sans overflow-x-hidden">
      {/* Cyberpunk-style grid animation */}
      <div className="fixed inset-0 z-0 opacity-10">
        <div className="absolute inset-0 animate-pulse bg-[length:100px_100px] bg-[linear-gradient(to_right,#2a2a2a_1px,transparent_1px),linear-gradient(to_bottom,#2a2a2a_1px,transparent_1px)]" />
      </div>

      {/* Glowing accent lines */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <div className="absolute left-0 top-1/3 w-full h-1 bg-gradient-to-r from-transparent via-orange-500 to-transparent opacity-20 blur-lg" />
        <div className="absolute left-0 top-2/3 w-full h-1 bg-gradient-to-r from-transparent via-orange-500 to-transparent opacity-20 blur-lg" />
      </div>

      {/* Navigation */}
      <nav className="relative z-50 py-6 px-8 border-b border-gray-800 bg-gray-900/95 backdrop-blur">
  <div className="max-w-7xl mx-auto flex justify-between items-center">
    <Link to="/" className="flex items-center space-x-3 group">
      <div className="p-2 bg-gradient-to-br from-orange-600 to-amber-600 rounded-lg transform group-hover:rotate-12 transition-all">
        <FaPython className="text-2xl text-orange-300" />
      </div>
      <span className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-orange-400 to-amber-400">
        PyStatLab
      </span>
    </Link>

    {/* Mobile Menu Toggle */}
    <div className="md:hidden flex items-center">
      <button 
        onClick={() => setMobileMenuOpen(!mobileMenuOpen)} 
        className="text-gray-400 hover:text-orange-400 transition-colors"
      >
        <FaBars className="text-xl" />
      </button>
    </div>

    {/* Desktop Links */}
    <div className="hidden md:flex space-x-8">
      <Link to="/labs" className="text-gray-400 hover:text-orange-400 transition-colors">
        Labs
      </Link>
      <Link to="/compiler" className="text-gray-400 hover:text-orange-400 transition-colors">
        Compiler
      </Link>
      <Link to="/learn" className="text-gray-400 hover:text-orange-400 transition-colors">
        Learn
      </Link>
    </div>

    
  </div>

  {/* Mobile Menu (Hidden on desktop) */}
  <div className={`md:hidden ${mobileMenuOpen ? 'block' : 'hidden'} mt-4 space-y-4`}>
    <Link to="/labs" className="block text-gray-400 hover:text-orange-400 transition-colors">
      Labs
    </Link>
    <Link to="/compiler" className="block text-gray-400 hover:text-orange-400 transition-colors">
      Compiler
    </Link>
    <Link to="/learn" className="block text-gray-400 hover:text-orange-400 transition-colors">
      Learn
    </Link>
  </div>
</nav>


      {/* Hero Section */}
      <main className="relative z-10 pt-24 pb-32 px-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row items-center">
            <div className="lg:w-1/2 mb-16 lg:mb-0 lg:pr-12">
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
              >
                <div className="inline-block px-4 py-1 mb-6 text-xs bg-orange-500/20 text-orange-300 rounded-full border border-orange-500/30">
                  PYTHON 3.11 • TENSORFLOW 2.0 • CUDA ACCELERATED
                </div>
                <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight bg-clip-text text-transparent bg-gradient-to-r from-orange-400 to-amber-400">
                  Next-Gen Statistical<br />
                  Computing Platform
                </h1>
                <p className="text-lg text-gray-400 mb-8 max-w-lg">
                  Harness the power of Python for advanced statistical analysis, predictive modeling, 
                  and data-driven insights in a futuristic computational environment.
                </p>
                <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
                  <Link
                    to="/compiler"
                    className="px-7 py-3.5 bg-orange-600 hover:bg-orange-700 rounded-md font-medium text-white flex items-center justify-center space-x-2 transition-colors shadow-lg shadow-orange-500/30"
                  >
                    <FaRocket />
                    <span>Start Analyzing</span>
                  </Link>
                  <Link
                    to="/learn"
                    className="px-7 py-3.5 border border-gray-700 hover:border-orange-500 rounded-md font-medium text-gray-300 hover:text-orange-400 flex items-center justify-center space-x-2 transition-colors"
                  >
                    <FaBook />
                    <span>Explore Tutorials</span>
                  </Link>
                </div>
              </motion.div>
            </div>
            <div className="w-full lg:w-1/2">
  <div className="bg-gray-800 rounded-xl shadow-2xl overflow-hidden border border-gray-700">
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
  </div>
</div>

          </div>
        </div>
      </main>

      {/* Features Section */}
      <section className="relative z-10 py-20 px-8 bg-gray-900/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-orange-400 to-amber-400">
              Cutting-Edge Features
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Designed for high-performance statistical computing and machine learning
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                whileHover={{ y: -5 }}
                className="bg-gray-800 rounded-xl p-6 border border-gray-700 hover:border-orange-500 transition-all shadow-lg hover:shadow-xl"
              >
                <div className="text-3xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold mb-2 text-gray-100">{feature.title}</h3>
                <p className="text-gray-400">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Holographic Display Section */}
      <section className="relative z-10 py-20 px-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row items-center">
            <div className="lg:w-1/2 mb-12 lg:mb-0 lg:pr-12">
              <h2 className="text-3xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-orange-400 to-amber-400">
                Interactive 3D Visualization
              </h2>
              <p className="text-gray-400 mb-6">
                Explore multidimensional datasets with our WebGL-powered visualization engine
              </p>
              <div className="space-y-6">
                {[
                  ["3D Plotting", "Mayavi and Plotly integration"],
                  ["Real-time Rendering", "60 FPS GPU acceleration"],
                  ["Statistical Overlays", "Confidence intervals and distributions"],
                  ["Export Formats", "PNG, SVG, and WebM video"]
                ].map(([title, desc], i) => (
                  <div key={i} className="flex items-start">
                    <div className="flex-shrink-0 mt-1.5 mr-4 text-orange-400">
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-100">{title}</h4>
                      <p className="text-gray-400 text-sm">{desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="lg:w-1/2">
              <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl p-1 shadow-2xl">
                <div className="bg-gray-900 rounded-xl p-6 border border-gray-700">
                  <div className="animate-pulse-fast bg-gradient-to-r from-orange-500/20 to-transparent w-full h-64 rounded-lg flex items-center justify-center">
                    <div className="text-orange-400 text-center">
                      <div className="text-4xl mb-2">📊</div>
                      <div className="text-sm font-mono">Rendering 3D Scene...</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Code Example Section */}
      <section className="relative z-10 py-20 px-8 bg-gray-900/50">
  <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8">
    
    {/* Bayesian Analysis Code Block */}
    <div className="bg-gray-800 rounded-xl shadow-xl border border-gray-700">
      <div className="bg-gray-900 px-5 py-3 border-b border-gray-700 flex items-center">
        <div className="flex space-x-2 mr-4">
          <div className="w-3 h-3 rounded-full bg-red-500"></div>
          <div className="w-3 h-3 rounded-full bg-amber-500"></div>
          <div className="w-3 h-3 rounded-full bg-green-500"></div>
        </div>
        <div className="text-sm text-gray-400 font-mono">bayesian_analysis.py</div>
      </div>
      <pre className="p-6 overflow-x-auto text-sm">
        <code className="text-gray-300 font-mono">
          {`# Bayesian Inference with PyMC3
import pymc3 as pm
import arviz as az

with pm.Model() as hierarchical_model:
    # Hyperpriors
    μ_α = pm.Normal('μ_alpha', mu=0, sigma=1)
    σ_α = pm.HalfNormal('σ_alpha', sigma=1)
    
    # Population distribution
    α = pm.Normal('alpha', mu=μ_α, sigma=σ_α, 
                 shape=n_groups)
    
    # Likelihood
    y = pm.Normal('y', mu=α[group_idx], sigma=σ,
                 observed=observations)
    
    # MCMC sampling
    trace = pm.sample(2000, tune=1000, target_accept=0.95)

# Visualize results
az.plot_trace(trace)
az.summary(trace)`}

        </code>
      </pre>
    </div>

    {/* Data Analysis Code Block */}
    <div className="bg-gray-800 rounded-xl shadow-xl border border-gray-700">
      <div className="bg-gray-900 px-5 py-3 border-b border-gray-700 flex items-center">
        <div className="flex space-x-2 mr-4">
          <div className="w-3 h-3 rounded-full bg-red-500"></div>
          <div className="w-3 h-3 rounded-full bg-amber-500"></div>
          <div className="w-3 h-3 rounded-full bg-green-500"></div>
        </div>
        <div className="text-sm text-gray-400 font-mono">data_analysis.ipynb</div>
      </div>
      <div className="p-4">
        {/* First Input Block */}
        <div className="mb-4 px-4 py-3 bg-gray-900 rounded border-l-4 border-orange-500">
          <div className="text-orange-400 font-mono text-sm mb-1">In [1]:</div>
          <div className="text-gray-300 font-mono text-sm">
            <pre>{`df = pd.read_parquet('bigdata.parquet')\ndf.describe()`}</pre>
          </div>
        </div>
        
        {/* First Output Block */}
        <div className="mb-4 px-4 py-3 bg-gray-900 rounded border-l-4 border-gray-600">
          <div className="text-gray-400 font-mono text-sm mb-1">Out [1]:</div>
          <div className="text-gray-300 font-mono text-sm">
            <pre>{`       age    income     score
count 1.2e6   1.2e6    1.2e6
mean  34.5    62345    82.4
std   12.1    23456    15.2`}</pre>
          </div>
        </div>

        {/* Second Input Block */}
        <div className="px-4 py-3 bg-gray-900 rounded border-l-4 border-gray-600">
          <div className="text-gray-400 font-mono text-sm mb-1">In [2]:</div>
          <div className="text-gray-300 font-mono text-sm">
            <pre>{`sns.heatmap(df.corr(), annot=True)`}</pre>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>


      {/* Footer */}
      <footer className="relative z-10 py-12 px-8 border-t border-gray-800 bg-gray-900">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-3 mb-6 md:mb-0">
              <FaPython className="text-2xl text-orange-400" />
              <span className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-orange-400 to-amber-400">
                PyStatLab
              </span>
            </div>
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-8 text-center sm:text-left">
              <Link to="/docs" className="text-gray-400 hover:text-orange-400 transition-colors">
                Documentation
              </Link>
              <Link to="/examples" className="text-gray-400 hover:text-orange-400 transition-colors">
                Examples
              </Link>
              <Link to="/research" className="text-gray-400 hover:text-orange-400 transition-colors">
                Research
              </Link>
              <Link to="/enterprise" className="text-gray-400 hover:text-orange-400 transition-colors">
                Enterprise
              </Link>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-gray-800 text-center text-sm text-gray-500">
            © {new Date().getFullYear()} PyStatLab — Next Generation Statistical Computing Platform
          </div>
        </div>
      </footer>
    </div>
  );
};

export default DarkStatsLanding;