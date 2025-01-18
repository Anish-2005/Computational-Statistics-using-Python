#1. Calculate Euclidean distance, Statistical distance of two given points ( P(x1,y1) , Q(x2,y2))

import math

# Function to calculate Euclidean distance
def euclidean_distance(x1, y1, x2, y2):
    return math.sqrt((x2 - x1) ** 2 + (y2 - y1) ** 2)

# Function to calculate Statistical (Manhattan) distance
def statistical_distance(x1, y1, x2, y2):
    return abs(x2 - x1) + abs(y2 - y1)

# Taking input from user for points P and Q
x1, y1 = map(float, input("Enter coordinates of point P (x1, y1): ").split())
x2, y2 = map(float, input("Enter coordinates of point Q (x2, y2): ").split())

# Calculate and print distances
euclidean_dist = euclidean_distance(x1, y1, x2, y2)
statistical_dist = statistical_distance(x1, y1, x2, y2)

print(f"Euclidean Distance between P({x1}, {y1}) and Q({x2}, {y2}): {euclidean_dist}")
print(f"Statistical (Manhattan) Distance between P({x1}, {y1}) and Q({x2}, {y2}): {statistical_dist}")
