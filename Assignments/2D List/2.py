#2. Create two 2D List by taking user input. Perform Matrix multiplication on it.

# Program to perform matrix multiplication on two user-input 2D lists

# Function to take input for a matrix
def input_matrix(rows, cols):
    matrix = []
    for i in range(rows):
        row = [int(x) for x in input(f"Enter {cols} elements for row {i+1}: ").split()]
        matrix.append(row)
    return matrix

# Taking input for matrix dimensions
rows1 = int(input("Enter number of rows for Matrix 1: "))
cols1 = int(input("Enter number of columns for Matrix 1: "))
matrix1 = input_matrix(rows1, cols1)

rows2 = int(input("Enter number of rows for Matrix 2: "))
cols2 = int(input("Enter number of columns for Matrix 2: "))
matrix2 = input_matrix(rows2, cols2)

# Matrix multiplication condition
if cols1 != rows2:
    print("Matrix multiplication is not possible. Number of columns of Matrix 1 must be equal to number of rows of Matrix 2.")
else:
    # Initialize result matrix with zeroes
    result = [[0 for _ in range(cols2)] for _ in range(rows1)]

    # Perform matrix multiplication
    for i in range(rows1):
        for j in range(cols2):
            for k in range(cols1):
                result[i][j] += matrix1[i][k] * matrix2[k][j]

    # Display the result
    print("\nMatrix 1:")
    for row in matrix1:
        print(row)

    print("\nMatrix 2:")
    for row in matrix2:
        print(row)

    print("\nMatrix Multiplication Result:")
    for row in result:
        print(row)
