#3.Write a program to check whether a number is even or odd. Take the number from the user.
# Program to check if a number is even or odd

# Taking input from the user
number = int(input("Enter a number: "))

# Check if the number is even or odd
if number % 2 == 0:
    print(f"The number {number} is even.")
else:
    print(f"The number {number} is odd.")
