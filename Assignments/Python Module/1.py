#1. Create a module named calculator and demonstrate the use of module by using the same.

# main.py - Using the calculator module

# Importing the calculator module
import calculator

# Take user input for two numbers
a = float(input("Enter the first number: "))
b = float(input("Enter the second number: "))

# Performing arithmetic operations using the calculator module
print(f"The sum of {a} and {b} is: {calculator.add(a, b)}")
print(f"The difference of {a} and {b} is: {calculator.subtract(a, b)}")
print(f"The product of {a} and {b} is: {calculator.multiply(a, b)}")
print(f"The division of {a} by {b} gives: {calculator.divide(a, b)}")
