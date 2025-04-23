# Find factorial of a number given  by user. Use for loop.
# Program to find the factorial of a number using a for loop
# Taking input from the user
num = int(input("Enter a number to find its factorial: "))

# Initialize the factorial variable
factorial = 1

# Check if the number is non-negative
if num < 0:
    print("Factorial is not defined for negative numbers.")
else:
    # Using for loop to calculate factorial
    for i in range(1, num + 1):
        factorial *= i
    
    # Display the result
    print(f"The factorial of {num} is {factorial}")
