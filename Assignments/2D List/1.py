#1. Create two 2D List . Perform Matrix addition and subtraction on it. Use a predefined list.

# Program to perform matrix addition and subtraction on two predefined 2D lists

# Define two 2D lists (matrices)
matrix1 = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
]

matrix2 = [
    [9, 8, 7],
    [6, 5, 4],
    [3, 2, 1]
]

# Matrix addition
addition_result = [[matrix1[i][j] + matrix2[i][j] for j in range(len(matrix1[0]))] for i in range(len(matrix1))]

# Matrix subtraction
subtraction_result = [[matrix1[i][j] - matrix2[i][j] for j in range(len(matrix1[0]))] for i in range(len(matrix1))]

# Display the results
print("Matrix 1:")
for row in matrix1:
    print(row)

print("\nMatrix 2:")
for row in matrix2:
    print(row)

print("\nMatrix Addition Result:")
for row in addition_result:
    print(row)

print("\nMatrix Subtraction Result:")
for row in subtraction_result:
    print(row)
