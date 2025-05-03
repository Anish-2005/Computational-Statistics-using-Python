import { 
    FaPython, FaChartLine, FaCodeBranch, FaRocket, FaDatabase, 
    FaProjectDiagram, FaBrain, FaFlask, FaFolder, FaRegChartBar,
    FaDna, FaLock 
  } from 'react-icons/fa';
  
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
      icon: <FaDna />,
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
  
  export default topics;