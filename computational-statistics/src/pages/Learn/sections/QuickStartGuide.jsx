const QuickStartGuide = () => {
    return (
      <section className="mb-20">
        <h2 className="text-3xl font-bold mb-8 text-amber-400 border-l-4 border-amber-500 pl-4">
          Quick Start Guide
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-gray-800 p-6 rounded-xl border border-amber-500/30">
            <div className="text-amber-400 mb-4 text-lg font-semibold">1. Environment Setup</div>
            <ul className="space-y-2 text-gray-400">
              <li>Python 3.8+ Installation</li>
              <li>Jupyter Notebook/Lab</li>
              <li>Virtual Environments</li>
              <li>Essential Packages</li>
            </ul>
          </div>
          <div className="bg-gray-800 p-6 rounded-xl border border-amber-500/30">
            <div className="text-amber-400 mb-4 text-lg font-semibold">2. Data Workflow</div>
            <ul className="space-y-2 text-gray-400">
              <li>Data Cleaning</li>
              <li>Exploratory Analysis</li>
              <li>Feature Engineering</li>
              <li>Visualization</li>
            </ul>
          </div>
          <div className="bg-gray-800 p-6 rounded-xl border border-amber-500/30">
            <div className="text-amber-400 mb-4 text-lg font-semibold">3. Model Building</div>
            <ul className="space-y-2 text-gray-400">
              <li>Algorithm Selection</li>
              <li>Cross-Validation</li>
              <li>Hyperparameter Tuning</li>
              <li>Model Evaluation</li>
            </ul>
          </div>
        </div>
      </section>
    );
  };
  
  export default QuickStartGuide;