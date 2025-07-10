# 📊 PyStatLab - Computational Statistics Using Python

<div align="center">
  <img src="computational-statistics/public/PyStat.png" alt="PyStatLab Logo" width="200"/>
  
  [![Made with Python](https://img.shields.io/badge/Made%20with-Python-blue.svg)](https://www.python.org/)
  [![React](https://img.shields.io/badge/React-18.0+-61DAFB.svg)](https://reactjs.org/)
  [![Node.js](https://img.shields.io/badge/Node.js-Express-green.svg)](https://nodejs.org/)
  [![License](https://img.shields.io/badge/License-MIT-yellow.svg)](LICENSE)
  [![Status](https://img.shields.io/badge/Status-Active-brightgreen.svg)](https://github.com/your-username/computational-statistics-python)
</div>

Welcome to **PyStatLab** - My comprehensive journey through Computational Statistics using Python from my third semester! This repository showcases my academic work, assignments, and the interactive web platform I built to practice and demonstrate statistical concepts learned during the course.

---

## 🚀 Project Overview

PyStatLab represents my academic journey through Computational Statistics in my third semester. This project combines:

- **� Academic Assignments**: All my coursework and assignments from the Computational Statistics subject
- **�️ Interactive Python Compiler**: A web-based platform I built to practice and demonstrate statistical concepts
- **🎯 Practical Implementation**: Real-world applications of statistical theories learned in class
- **📊 Visualization Tools**: Interactive charts and graphs to better understand statistical data
- **🔧 Modern Web Interface**: A beautiful, responsive platform built with React and Node.js

This repository serves as both a portfolio of my academic work and a functional tool for anyone learning computational statistics.

---

## 🏗️ Architecture

### Frontend (`computational-statistics/`)
- **Framework**: React 19 with Vite
- **Styling**: Tailwind CSS with custom components
- **Editor**: Monaco Editor for code editing
- **Animations**: Framer Motion for smooth transitions
- **Icons**: React Icons for consistent UI

### Backend (`computational-statistics-backend/`)
- **Runtime**: Node.js with Express
- **Database**: MongoDB with Mongoose
- **Security**: Helmet, CORS, and compression middleware
- **Architecture**: RESTful API design

### Assignment Collection (`Assignments/`)
- **Structure**: Topic-based organization following the curriculum
- **Coverage**: Complete coursework from Python basics to advanced statistical concepts
- **Academic Work**: All assignments completed during third semester
- **Practice**: Progressive difficulty levels as per course structure

---

## 📚 Academic Curriculum Coverage

### 🐍 Python Fundamentals (Third Semester Coursework)
- **Python Basics**: Variables, data types, control structures - foundational concepts
- **Python Strings**: String manipulation and formatting techniques
- **Python Functions**: Function definition, scope, and parameters - core programming concepts
- **Python Modules**: Import systems and package management for statistical libraries
- **Loop & List Operations**: Iteration and data structure manipulation for data processing

### 📊 Statistical Computing (Advanced Topics)
- **2D Lists & Matrices**: Multi-dimensional data handling for statistical analysis
- **Descriptive Statistics**: Mean, variance, covariance calculations - key statistical measures
- **Distance Metrics**: Comparative analysis of different distance measures in statistics
- **Data Visualization**: Scatter plots and statistical charts for data interpretation
- **Correlation Analysis**: Relational matrix computations and statistical relationships

---

## �️ Features

### Interactive Compiler
- **Live Code Execution**: Run Python code with real-time output
- **Input Handling**: Support for user input in programs
- **Error Handling**: Comprehensive error reporting and debugging
- **Code Persistence**: Save and restore your code sessions
- **Custom Libraries**: Import and use external Python libraries

### Modern UI/UX
- **Responsive Design**: Works seamlessly on all devices
- **Dark Theme**: Eye-friendly coding environment
- **Syntax Highlighting**: Advanced code highlighting with Monaco Editor
- **Loading States**: Smooth loading animations and feedback
- **Gradient Themes**: Beautiful orange-amber color scheme

### Learning Management
- **Assignment Browser**: Organized access to all practice problems
- **Progress Tracking**: Monitor your learning journey
- **Code Examples**: Reference implementations for each topic
- **Admin Panel**: Content management for educators

---

## 🚀 Quick Start

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn package manager
- MongoDB (for backend features)

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/your-username/computational-statistics-python.git
   cd computational-statistics-python
   ```

2. **Setup Frontend**
   ```bash
   cd computational-statistics
   npm install
   npm run dev
   ```

3. **Setup Backend** (Optional - for full features)
   ```bash
   cd computational-statistics-backend
   npm install
   node server.js
   ```

4. **Access the Application**
   - Frontend: `http://localhost:5173`
   - Backend API: `http://localhost:3000`

---

## 📁 Project Structure

```
📦 Computational-Statistics-using-Python
├── 📂 Assignments/                    # Python practice assignments
│   ├── 📁 Python Basics/             # Fundamental Python concepts
│   ├── 📁 Python Strings/            # String operations and methods
│   ├── 📁 Python Functions/          # Function definitions and usage
│   ├── 📁 Python Modules/            # Module creation and importing
│   ├── 📁 Loop Lists/                # Iteration and list operations
│   ├── 📁 2D Lists/                  # Multi-dimensional arrays
│   ├── 📁 Calculation of Mean.../    # Statistical computations
│   ├── 📁 Comparative study.../      # Distance metrics analysis
│   └── 📁 Scatter Plot/              # Data visualization
├── 📂 computational-statistics/       # React frontend application
│   ├── 📁 public/                    # Static assets
│   ├── 📁 src/
│   │   ├── 📁 components/            # Reusable UI components
│   │   ├── 📁 pages/
│   │   │   ├── 📁 Landing/           # Homepage and intro
│   │   │   ├── 📁 Compiler/          # Python code editor
│   │   │   ├── 📁 Labs/              # Assignment browser
│   │   │   └── 📁 Learn/             # Learning resources
│   │   └── 📁 assets/                # Images and icons
│   ├── 📄 package.json
│   ├── 📄 vite.config.js
│   └── 📄 tailwind.config.js
└── 📂 computational-statistics-backend/  # Node.js backend
    ├── 📁 models/                    # Database schemas
    ├── 📄 server.js                  # Express server
    └── 📄 package.json
```

---

## 🎯 Usage Examples

### Running Statistical Calculations
```python
# Example: Calculate mean and variance
import numpy as np
import matplotlib.pyplot as plt

# Sample data
data = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

# Statistical calculations
mean = np.mean(data)
variance = np.var(data)
std_dev = np.std(data)

print(f"Mean: {mean}")
print(f"Variance: {variance}")
print(f"Standard Deviation: {std_dev}")

# Create visualization
plt.hist(data, bins=5, alpha=0.7)
plt.title('Data Distribution')
plt.show()
```

### Distance Metrics Comparison
```python
# Compare different distance metrics
import numpy as np
from scipy.spatial.distance import euclidean, manhattan, cosine

point1 = [1, 2, 3]
point2 = [4, 5, 6]

euclidean_dist = euclidean(point1, point2)
manhattan_dist = manhattan(point1, point2)
cosine_dist = cosine(point1, point2)

print(f"Euclidean Distance: {euclidean_dist}")
print(f"Manhattan Distance: {manhattan_dist}")
print(f"Cosine Distance: {cosine_dist}")
```

---

## 🤝 Contributing

We welcome contributions! Here's how you can help:

1. **Fork the repository**
2. **Create your feature branch** (`git checkout -b feature/AmazingFeature`)
3. **Commit your changes** (`git commit -m 'Add some AmazingFeature'`)
4. **Push to the branch** (`git push origin feature/AmazingFeature`)
5. **Open a Pull Request**

### Areas for Contribution
- 📝 Additional statistical assignments
- 🎨 UI/UX improvements
- 🔧 New compiler features
- 📚 Documentation enhancements
- 🧪 Testing and bug fixes

---

## � Roadmap

- [ ] **Advanced Statistics Module**: Hypothesis testing, regression analysis
- [ ] **Machine Learning Integration**: Scikit-learn examples and tutorials
- [ ] **Collaborative Features**: Share code and collaborate in real-time
- [ ] **Mobile App**: React Native companion app
- [ ] **Advanced Visualizations**: D3.js integration for complex charts
- [ ] **Performance Optimization**: Code execution performance improvements

---

## 🏆 Academic Achievements

- ✅ **Complete Coursework**: All assignments from third semester Computational Statistics
- ✅ **Interactive Platform**: Built a full-stack web application to demonstrate concepts
- ✅ **Practical Implementation**: Successfully applied theoretical knowledge to real problems
- ✅ **Modern Tech Stack**: Learned and implemented React, Node.js, and MongoDB
- ✅ **Portfolio Project**: Created a comprehensive showcase of academic and technical skills

---

## 🎓 Course Context

This project was developed as part of my **Computational Statistics** subject during my **third semester**. It represents:

- **Academic Excellence**: Comprehensive understanding of statistical concepts
- **Technical Skills**: Full-stack development capabilities
- **Problem Solving**: Practical application of theoretical knowledge
- **Innovation**: Going beyond assignments to create an interactive learning platform
- **Portfolio Building**: Demonstrating both academic and professional development skills

---

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

## 🌟 Acknowledgments

- **Course Instructor**: For providing comprehensive guidance in Computational Statistics
- **Third Semester Curriculum**: For establishing a strong foundation in statistical computing
- **Python Community**: For the amazing ecosystem of statistical libraries
- **React Team**: For the powerful frontend framework that made this platform possible
- **Monaco Editor**: For the excellent code editing experience
- **Judge0 API**: For Python code execution capabilities
- **Classmates**: For collaborative learning and peer support during the semester

---

## 📞 Support

If you found this project helpful, please consider:
- ⭐ Starring the repository
- 🍴 Forking and contributing
- 🐛 Reporting issues
- 💡 Suggesting new features

**Happy Coding and Statistical Analysis!** 🎉📊🐍

*This project represents my academic journey through Computational Statistics in third semester, combining theoretical learning with practical implementation through modern web technologies.*  
- **Hypothesis Testing**: Validating your assumptions.  
- **Regression Analysis**: Modeling relationships within data.  
- **Simulation Techniques**: Leveraging Monte Carlo and bootstrap methods.  

---

## 🎯 Why Python?  
Python offers a robust set of tools to simplify complex statistical computations:  

- **Libraries**: Packages like `NumPy`, `SciPy`, `pandas`, and `statsmodels` provide efficient, user-friendly methods for statistical analysis.  
- **Visualization**: Tools like `Matplotlib` and `Seaborn` make data visualization intuitive and impactful.  
- **Community**: Python's active community ensures a wealth of resources and support.  

---

## 📂 Repository Structure  
- **Notebooks**: Detailed, interactive Jupyter Notebooks with examples and explanations.  
- **Resources**: Handpicked articles, books, and tutorials to deepen your understanding.  
- **Datasets**: Curated datasets to practice and explore statistical techniques.  

---

## 🌟 Who Is This For?  
This repository is designed for:  
- **Students** aiming to solidify their foundation in statistics.  
- **Data Scientists** looking to expand their statistical toolkit.  
- **Researchers** seeking practical solutions to statistical problems.  
- **Anyone** curious about the intersection of data and statistics!  

---

## 💡 Contributing  
We welcome contributions! If you’d like to add examples, enhance explanations, or improve the project, feel free to open a pull request or share your suggestions via issues.  

---

## 📬 Feedback & Support  
Have questions or suggestions? Open an issue, or reach out—we’d love to hear from you!  

---

## 📜 License  
This repository is open-source and available under the MIT License.  

---

Let’s make sense of data, one statistical method at a time! 🌐  
