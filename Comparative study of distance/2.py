#2. Calculate Canbera Metric and Czekanowski Metric of two points. 

# Function to calculate Canberra Metric
def canberra_metric(x1, y1, x2, y2):
    return abs(x1 - x2) / (abs(x1) + abs(x2)) + abs(y1 - y2) / (abs(y1) + abs(y2))

# Function to calculate Czekanowski Metric
def czekanowski_metric(x1, y1, x2, y2):
    return 1 - (2 * min(x1, x2) + min(y1, y2)) / (x1 + x2 + y1 + y2)

# Taking input from user for points P and Q
x1, y1 = map(float, input("Enter coordinates of point P (x1, y1): ").split())
x2, y2 = map(float, input("Enter coordinates of point Q (x2, y2): ").split())

# Calculate and print the metrics
canberra_dist = canberra_metric(x1, y1, x2, y2)
czekanowski_dist = czekanowski_metric(x1, y1, x2, y2)

print(f"Canberra Metric between P({x1}, {y1}) and Q({x2}, {y2}): {canberra_dist}")
print(f"Czekanowski Metric between P({x1}, {y1}) and Q({x2}, {y2}): {czekanowski_dist}")
