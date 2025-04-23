#1. Calculate slope(m) and y-intercept(c) of a straight line from the below given points(x,y).   Now scatter plot (x,y) where y will be calculated from y=m*x+c formula. Here x values will be fixed.

# x	y
# 1	5
# 2	7
# 3	2
# 4	3

import numpy as np
import matplotlib.pyplot as plt

# Given points (x, y)
x = np.array([1, 2, 3, 4])
y = np.array([5, 7, 2, 3])

# Number of data points
n = len(x)

# Calculating the sums required for the formulas
sum_x = np.sum(x)
sum_y = np.sum(y)
sum_xy = np.sum(x * y)
sum_x_squared = np.sum(x ** 2)

# Calculating slope (m) and y-intercept (c)
m = (n * sum_xy - sum_x * sum_y) / (n * sum_x_squared - sum_x ** 2)
c = (sum_y - m * sum_x) / n

# Displaying slope and y-intercept
print(f"Slope (m): {m}")
print(f"Y-intercept (c): {c}")

# Calculate the y-values from the line equation y = mx + c
y_line = m * x + c

# Plotting the scatter plot and the line
plt.scatter(x, y, color='blue', label='Given points')  # Scatter plot of given points
plt.plot(x, y_line, color='red', label=f'Line: y = {m:.2f}x + {c:.2f}')  # Line based on equation y = mx + c
plt.xlabel('x')
plt.ylabel('y')
plt.title('Scatter plot and Line fit')
plt.legend()
plt.grid(True)
plt.show()
