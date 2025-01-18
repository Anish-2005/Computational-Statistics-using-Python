#2.Write a program to create a calculator. Take the necessary inputs from the user and perform the operations.
# Simple Calculator Program

# Display available operations
print("Select operation:")
print("1. Addition (+)")
print("2. Subtraction (-)")
print("3. Multiplication (*)")
print("4. Division (/)")
print("5. Modulus (%)")
print("6. Exponentiation (^)")

# Taking input from the user
operation = input("Enter the number corresponding to the operation (1/2/3/4/5/6): ")
num1 = float(input("Enter the first number: "))
num2 = float(input("Enter the second number: "))

# Perform the chosen operation
if operation == '1':
    result = num1 + num2
    print(f"The result of addition is: {result}")
elif operation == '2':
    result = num1 - num2
    print(f"The result of subtraction is: {result}")
elif operation == '3':
    result = num1 * num2
    print(f"The result of multiplication is: {result}")
elif operation == '4':
    if num2 != 0:
        result = num1 / num2
        print(f"The result of division is: {result}")
    else:
        print("Error: Division by zero is not allowed.")
elif operation == '5':
    result = num1 % num2
    print(f"The result of modulus is: {result}")
elif operation == '6':
    result = num1 ** num2
    print(f"The result of exponentiation is: {result}")
else:
    print("Invalid operation. Please try again.")
