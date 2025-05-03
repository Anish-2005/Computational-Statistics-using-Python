const InteractiveCode = () => {
    return (
      <section className="mb-20">
        <h2 className="text-3xl font-bold mb-8 text-amber-400 border-l-4 border-amber-500 pl-4">
          Interactive Learning
        </h2>
        <div className="bg-gray-800 rounded-xl shadow-xl border border-amber-500/30">
          <div className="bg-gray-900 px-5 py-3 border-b border-gray-700 flex items-center">
            <div className="flex space-x-2 mr-4">
              <div className="w-3 h-3 rounded-full bg-red-500"></div>
              <div className="w-3 h-3 rounded-full bg-amber-500"></div>
              <div className="w-3 h-3 rounded-full bg-green-500"></div>
            </div>
            <div className="text-sm text-gray-400 font-mono">statistical_analysis.py</div>
          </div>
          <pre className="p-6 overflow-x-auto text-sm">
            <code className="text-amber-300 font-mono">
  {`# Hypothesis Testing Example
  from scipy import stats
  import numpy as np
  
  # Generate sample data
  control = np.random.normal(loc=50, scale=10, size=100)
  treatment = np.random.normal(loc=55, scale=10, size=100)
  
  # Perform t-test
  t_stat, p_value = stats.ttest_ind(control, treatment)
  
  print(f"T-statistic: {t_stat:.2f}")
  print(f"P-value: {p_value:.4f}")
  
  # Interpret results
  alpha = 0.05
  if p_value < alpha:
      print("Reject null hypothesis - significant difference detected!")
  else:
      print("Fail to reject null hypothesis")`}
            </code>
          </pre>
        </div>
      </section>
    );
  };
  
  export default InteractiveCode;