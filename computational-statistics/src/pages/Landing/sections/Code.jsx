import React from 'react';
import { motion } from 'framer-motion';

const Code = () => {
  return (
    <section className="relative z-10 py-20 px-8 bg-gray-900/50">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8">

        {/* Bayesian Analysis Code Block */}
        <motion.div
          className="bg-gray-800 rounded-xl shadow-xl border border-gray-700"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          whileHover={{ y: -5 }}
        >
          <div className="bg-gray-900 px-5 py-3 border-b border-gray-700 flex items-center">
            <div className="flex space-x-2 mr-4">
              <div className="w-3 h-3 rounded-full bg-red-500" />
              <div className="w-3 h-3 rounded-full bg-amber-500" />
              <div className="w-3 h-3 rounded-full bg-green-500" />
            </div>
            <div className="text-sm text-gray-400 font-mono">bayesian_analysis.py</div>
          </div>
          <pre className="p-6 overflow-x-auto text-sm">
            <code className="text-gray-300 font-mono whitespace-pre">
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
        </motion.div>

        {/* Data Analysis Notebook-style Code Block */}
        <motion.div
          className="bg-gray-800 rounded-xl shadow-xl border border-gray-700"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          whileHover={{ y: -5 }}
        >
          <div className="bg-gray-900 px-5 py-3 border-b border-gray-700 flex items-center">
            <div className="flex space-x-2 mr-4">
              <div className="w-3 h-3 rounded-full bg-red-500" />
              <div className="w-3 h-3 rounded-full bg-amber-500" />
              <div className="w-3 h-3 rounded-full bg-green-500" />
            </div>
            <div className="text-sm text-gray-400 font-mono">data_analysis.ipynb</div>
          </div>
          <div className="p-4">

            {/* Input 1 */}
            <div className="mb-4 px-4 py-3 bg-gray-900 rounded border-l-4 border-orange-500">
              <div className="text-orange-400 font-mono text-sm mb-1">In [1]:</div>
              <div className="text-gray-300 font-mono text-sm whitespace-pre">
                <pre>{`df = pd.read_parquet('bigdata.parquet')\ndf.describe()`}</pre>
              </div>
            </div>

            {/* Output 1 */}
            <div className="mb-4 px-4 py-3 bg-gray-900 rounded border-l-4 border-gray-600">
              <div className="text-gray-400 font-mono text-sm mb-1">Out [1]:</div>
              <div className="text-gray-300 font-mono text-sm whitespace-pre">
                <pre>{`       age    income     score
count 1.2e6   1.2e6    1.2e6
mean  34.5    62345    82.4
std   12.1    23456    15.2`}</pre>
              </div>
            </div>

            {/* Input 2 */}
            <div className="px-4 py-3 bg-gray-900 rounded border-l-4 border-gray-600">
              <div className="text-gray-400 font-mono text-sm mb-1">In [2]:</div>
              <div className="text-gray-300 font-mono text-sm whitespace-pre">
                <pre>{`sns.heatmap(df.corr(), annot=True)`}</pre>
              </div>
            </div>

          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Code;
