import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { FaHome, FaPython, FaBook, FaRocket, FaChartLine, FaBrain,
     FaCodeBranch, FaUniversity,FaDatabase,FaProjectDiagram,FaFlask,FaFolder,
     FaRegChartBar,FaClipboard,FaCode,FaBookOpen,FaLock, FaDna,FaBars, // For neural interfaces
     FaShieldAlt } from 'react-icons/fa';

export default function LearnPage() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const topics = [
        {
          title: "Python Basics for Statistics",
          icon: <FaPython />,
          items: [
            "NumPy Arrays & Vectorization",
            "Pandas Data Manipulation",
            "Statistical Functions in SciPy",
            "Data Visualization with Matplotlib/Seaborn",
            "Object-Oriented Programming Patterns",
            "Efficient Memory Management",
            "Parallel Processing with Multiprocessing",
            "Decorators for Statistical Profiling",
            "Generators for Large Datasets",
            "Type Hinting for Scientific Code"
          ]
        },
        {
          title: "Statistical Foundations",
          icon: <FaChartLine />,
          items: [
            "Probability Distributions",
            "Hypothesis Testing Framework",
            "Multivariate Regression Analysis",
            "Bayesian Inference Methods",
            "Non-Parametric Statistics",
            "Time Series Analysis",
            "Experimental Design Principles",
            "Statistical Power Analysis",
            "Causal Inference Techniques",
            "Survival Analysis Fundamentals"
          ]
        },
        {
          title: "Computational Methods",
          icon: <FaCodeBranch />,
          items: [
            "Monte Carlo Simulations",
            "Markov Chain Monte Carlo (MCMC)",
            "Bootstrapping Techniques",
            "Numerical Optimization Methods",
            "Stochastic Gradient Descent",
            "Genetic Algorithms",
            "Particle Filtering",
            "Finite Difference Methods",
            "Expectation Maximization",
            "Sparse Matrix Operations"
          ]
        },
        {
          title: "Advanced Python Concepts",
          icon: <FaRocket />,
          items: [
            "Metaprogramming with Metaclasses",
            "Context Managers for Resource Handling",
            "Asynchronous Programming (async/await)",
            "Cython for Performance Critical Code",
            "JIT Compilation with Numba",
            "Custom Exception Hierarchies",
            "Advanced Decorator Patterns",
            "Descriptor Protocols",
            "Abstract Base Classes",
            "Dynamic Code Generation"
          ]
        },
        {
          title: "Data Wrangling",
          icon: <FaDatabase />,
          items: [
            "Missing Data Imputation",
            "Outlier Detection Strategies",
            "Feature Scaling Techniques",
            "Categorical Encoding Methods",
            "Time Series Resampling",
            "Text Data Preprocessing",
            "Geospatial Data Handling",
            "Image Data Augmentation",
            "API Data Ingestion",
            "Streaming Data Processing"
          ]
        },
        {
          title: "Statistical Modeling",
          icon: <FaProjectDiagram />,
          items: [
            "Generalized Linear Models",
            "Mixed Effects Models",
            "Gaussian Processes",
            "Hidden Markov Models",
            "State Space Models",
            "Principal Component Analysis",
            "Factor Analysis",
            "Structural Equation Modeling",
            "Item Response Theory",
            "Network Analysis"
          ]
        },
        {
          title: "Machine Learning Foundations",
          icon: <FaBrain />,
          items: [
            "Bias-Variance Tradeoff",
            "Regularization Techniques",
            "Ensemble Methods",
            "Dimensionality Reduction",
            "Clustering Algorithms",
            "Anomaly Detection",
            "Recommender Systems",
            "Natural Language Processing Basics",
            "Feature Selection Strategies",
            "Model Interpretation Methods"
          ]
        },
        {
          title: "Bayesian Statistics",
          icon: <FaFlask />,
          items: [
            "Hierarchical Modeling",
            "Bayesian Networks",
            "Probabilistic Programming",
            "Model Comparison (WAIC, LOO)",
            "Prior Sensitivity Analysis",
            "Nonparametric Bayes",
            "Variational Inference",
            "Bayesian Deep Learning",
            "Multi-Level Modeling",
            "Bayesian Optimization"
          ]
        },
        {
          title: "Big Data Tools",
          icon: <FaFolder />,
          items: [
            "PySpark Fundamentals",
            "Dask for Parallel Computing",
            "Ray Distributed Framework",
            "Hadoop Ecosystem Overview",
            "Stream Processing with Kafka",
            "Columnar Storage Formats",
            "Distributed Machine Learning",
            "Cluster Resource Management",
            "GPU Acceleration with CuPy",
            "In-Memory Computing"
          ]
        },
        {
          title: "Optimization Techniques",
          icon: <FaRegChartBar />,
          items: [
            "Convex Optimization",
            "Gradient Descent Variants",
            "Constraint Programming",
            "Simulated Annealing",
            "Particle Swarm Optimization",
            "Ant Colony Algorithms",
            "Quadratic Programming",
            "Interior Point Methods",
            "Multi-Objective Optimization",
            "Hyperparameter Tuning"
          ]
        },
        {
            title: "Bioinformatics Computing",
            icon: <FaDna />, // Valid FontAwesome icon
            items: [
              "Genomic Data Processing",
              "Protein Folding Simulations",
              "CRISPR Target Analysis",
              "Phylogenetic Tree Construction",
              "RNA-Seq Pipeline Development",
              "Metagenomics Classification",
              "Structural Bioinformatics",
              "Single-Cell Analysis",
              "Drug Discovery Algorithms",
              "Population Genetics Models"
            ]
          },
          {
            title: "Cryptographic Statistics",
            icon: <FaLock />,
            items: [
              "Zero-Knowledge Proof Systems",
              "Homomorphic Encryption",
              "Secure Multi-Party Computation",
              "Blockchain Consensus Analysis",
              "Post-Quantum Cryptography",
              "Differential Privacy Guarantees",
              "Random Oracle Modeling",
              "Side-Channel Attack Prevention",
              "Key Generation Statistics",
              "Cryptographic Entropy Sources"
            ]
          }
      ];
      
      const resources = [
        {
          title: "Essential Mathematics",
          icon: <FaUniversity />,
          content: [
            "Linear Algebra for ML",
            "Calculus for Optimization",
            "Probability Theory",
            "Statistical Learning Theory",
            "Information Theory Basics",
            "Numerical Analysis",
            "Graph Theory Fundamentals",
            "Differential Equations",
            "Topological Data Analysis",
            "Measure Theory Primer"
          ]
        },
        {
          title: "Machine Learning",
          icon: <FaBrain />,
          content: [
            "Supervised Learning",
            "Unsupervised Clustering",
            "Neural Networks Basics",
            "Model Evaluation Metrics",
            "Transfer Learning",
            "Reinforcement Learning",
            "Graph Neural Networks",
            "AutoML Techniques",
            "Federated Learning",
            "Quantum Machine Learning"
          ]
        },
        {
          title: "Cheat Sheets",
          icon: <FaClipboard />,
          content: [
            "Python Data Science",
            "Pandas Quick Reference",
            "NumPy Matrix Operations",
            "Matplotlib Styling Guide",
            "Regular Expressions",
            "SQL for Data Scientists",
            "Linux Command Line",
            "Git Workflow",
            "Docker Essentials",
            "AWS S3 CLI"
          ]
        },
        {
          title: "Data Visualization",
          icon: <FaChartLine />,
          content: [
            "Interactive Plotly Dashboards",
            "Geospatial Mapping",
            "3D Visualization",
            "Network Graph Visualization",
            "Time Series Plotting",
            "Statistical Annotation",
            "Color Theory for Viz",
            "Animation Techniques",
            "Dashboard Design",
            "Visual Storytelling"
          ]
        },
        {
          title: "Deep Learning",
          icon: <FaCode />,
          content: [
            "Neural Network Architectures",
            "CNN for Computer Vision",
            "RNN/LSTM for Sequences",
            "Transformers for NLP",
            "GAN Implementation",
            "Transfer Learning with HuggingFace",
            "Model Quantization",
            "ONNX Runtime",
            "TensorBoard Usage",
            "PyTorch Lightning"
          ]
        },
        {
          title: "Statistical Packages",
          icon: <FaBookOpen />,
          content: [
            "StatsModels Deep Dive",
            "PyMC3 for Bayesian Analysis",
            "Scikit-learn Internals",
            "XGBoost/LightGBM",
            "Prophet for Forecasting",
            "Survival Analysis with lifelines",
            "Pyro Probabilistic Programming",
            "SHAP for Explainability",
            "Imbalanced-learn for Skewed Data",
            "Optuna for Hyperparameter Tuning"
          ]
        },
        {
          title: "Deployment",
          icon: <FaProjectDiagram />,
          content: [
            "REST API Development",
            "FastAPI Microservices",
            "ML Model Packaging",
            "Docker Containerization",
            "Kubernetes Orchestration",
            "AWS SageMaker Pipelines",
            "Monitoring with Prometheus",
            "CI/CD for ML",
            "Model Versioning",
            "A/B Testing Frameworks"
          ]
        },
        {
          title: "Ethics & Best Practices",
          icon: <FaLock />,
          content: [
            "Data Privacy (GDPR)",
            "Model Fairness Audits",
            "Reproducible Research",
            "Code Quality Standards",
            "Documentation Practices",
            "Unit Testing Strategies",
            "Performance Benchmarking",
            "Security Considerations",
            "Open Source Licensing",
            "Research Paper Writing"
          ]
        },
        {
          title: "Interview Prep",
          icon: <FaBook />,
          content: [
            "Algorithm Challenges",
            "Statistics Brain Teasers",
            "Case Study Frameworks",
            "System Design Patterns",
            "ML Design Questions",
            "Behavioral Interviews",
            "Salary Negotiation",
            "Portfolio Building",
            "Take-home Challenges",
            "Whiteboard Strategies"
          ]
        },
        {
          title: "Cloud Computing",
          icon: <FaDatabase />,
          content: [
            "AWS EC2 & S3",
            "Google Cloud AI Platform",
            "Azure Machine Learning",
            "Databricks Platform",
            "Serverless Architecture",
            "Managed Kubernetes",
            "MLOps Pipelines",
            "Cost Optimization",
            "Security Configurations",
            "Disaster Recovery"
          ]
        },
        {
          title: "Research Papers",
          icon: <FaRegChartBar />,
          content: [
            "Foundational ML Papers",
            "Semantic Scholar Navigation",
            "ArXiv Daily Updates",
            "Reproducibility Checklists",
            "Paper Implementation Guides",
            "Literature Review Techniques",
            "Academic Writing Tools",
            "Peer Review Process",
            "Conference Submission",
            "Research Funding Sources"
          ]
        },
        {
            title: "Experimental Design",
            icon: <FaFlask />,
            content: [
              "Factorial Designs",
              "Response Surface Methodology",
              "Optimal Experimental Design",
              "Adaptive Trial Designs",
              "Robust Parameter Design",
              "Mixture Experiments",
              "Sequential Analysis",
              "Randomized Block Designs",
              "Cross-Validation Strategies",
              "Multi-Arm Bandit Approaches"
            ]
          }
        
      ];

  return (
    <div className="min-h-screen bg-gray-900 text-gray-100 font-sans overflow-x-hidden">
      {/* Grid Background */}
      <div className="fixed inset-0 z-0 opacity-10">
        <div className="absolute inset-0 animate-pulse bg-[length:100px_100px] bg-[linear-gradient(to_right,#2a2a2a_1px,transparent_1px),linear-gradient(to_bottom,#2a2a2a_1px,transparent_1px)]" />
      </div>

      {/* Navigation */}
      <nav className="relative z-50 py-6 px-8 border-b border-gray-800 bg-gray-900/95 backdrop-blur">
  <div className="max-w-7xl mx-auto flex justify-between items-center">
    {/* Logo and brand name */}
    <Link to="/" className="flex items-center space-x-3 group">
      <div className="p-2 bg-gradient-to-br from-amber-600 to-orange-600 rounded-lg transform group-hover:rotate-12 transition-all">
        <FaPython className="text-2xl text-amber-300" />
      </div>
      <span className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-amber-400 to-orange-400">
        PyStatLab
      </span>
    </Link>

    {/* Desktop View: Home Terminal Button */}
    <div className="hidden md:flex items-center space-x-4">
      <Link
        to="/"
        className="px-5 py-2.5 bg-amber-600 hover:bg-amber-700 rounded-md font-medium text-white flex items-center space-x-2 transition-colors shadow-lg shadow-amber-500/20"
      >
        <FaHome className="text-sm" />
        <span>Home Terminal</span>
      </Link>
    </div>

    {/* Mobile View: Hamburger Icon */}
    <div className="md:hidden flex items-center">
      <button
        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        className="text-white"
      >
        <FaBars className="text-2xl" />
      </button>
    </div>
  </div>

  {/* Mobile Menu */}
  {mobileMenuOpen && (
    <div className="md:hidden flex flex-col items-center space-y-4 py-4 bg-gray-900/95 backdrop-blur">
      <Link
        to="/"
        className="px-5 py-2.5 bg-amber-600 hover:bg-amber-700 rounded-md font-medium text-white flex items-center space-x-2 transition-colors shadow-lg shadow-amber-500/20"
      >
        <FaHome className="text-sm" />
        <span>Home Terminal</span>
      </Link>
    </div>
  )}
</nav>


      {/* Main Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-8 py-12">
        {/* Hero Section */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-16 text-center"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-amber-400 to-orange-400">
            <FaBook className="inline-block mr-4 mb-2" />
            Computational Statistics Academy
          </h1>
          <p className="text-gray-400 text-lg max-w-3xl mx-auto">
            Master the fusion of statistical theory and Python programming through our 
            comprehensive learning pathways and interactive resources.
          </p>
        </motion.div>

        {/* Learning Pathways */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold mb-8 text-amber-400 border-l-4 border-amber-500 pl-4">
            Core Learning Pathways
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {topics.map((topic, index) => (
              <motion.div 
                key={index}
                whileHover={{ y: -5 }}
                className="bg-gray-800 rounded-xl p-6 border border-gray-700 hover:border-amber-500 transition-all shadow-lg"
              >
                <div className="text-3xl mb-4 text-amber-400">{topic.icon}</div>
                <h3 className="text-xl font-semibold mb-4 text-gray-100">{topic.title}</h3>
                <ul className="space-y-3">
                  {topic.items.map((item, i) => (
                    <li key={i} className="flex items-center text-gray-400">
                      <span className="w-2 h-2 bg-amber-500 rounded-full mr-3" />
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Interactive Code Example */}
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

        {/* Advanced Resources */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold mb-8 text-amber-400 border-l-4 border-amber-500 pl-4">
            Advanced Resources
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {resources.map((resource, index) => (
              <motion.div 
                key={index}
                whileHover={{ scale: 1.02 }}
                className="bg-gray-800 rounded-xl p-6 border border-gray-700 hover:border-amber-500 transition-all"
              >
                <div className="flex items-center mb-4">
                  <span className="text-2xl text-amber-400 mr-3">{resource.icon}</span>
                  <h3 className="text-xl font-semibold text-gray-100">{resource.title}</h3>
                </div>
                <ul className="space-y-3">
                  {resource.content.map((item, i) => (
                    <li key={i} className="text-gray-400 flex items-center">
                      <span className="w-2 h-2 bg-amber-500 rounded-full mr-3" />
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Quick Start Guide */}
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

        {/* Footer */}
        <footer className="mt-20 pt-12 border-t border-gray-800">
          <div className="text-center">
            <div className="flex items-center justify-center space-x-3 mb-6">
              <FaPython className="text-2xl text-amber-400" />
              <span className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-amber-400 to-orange-400">
                PyStatLab
              </span>
            </div>
            <div className="text-sm text-gray-500">
              © {new Date().getFullYear()} Computational Statistics Academy
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}