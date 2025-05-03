import { 
    FaUniversity, FaBrain, FaClipboard, FaChartLine, FaCode, 
    FaBookOpen, FaProjectDiagram, FaLock, FaBook, FaDatabase,
    FaRegChartBar, FaFlask 
  } from 'react-icons/fa';
  
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
  
  export default resources;