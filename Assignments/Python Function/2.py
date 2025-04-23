#Write a Python function to create and print a list where the values are the squares of numbers between 1 and 30 (both included).

# Function to create a list of squares of numbers between 1 and 30
def squares_of_numbers():
    return [x**2 for x in range(1, 31)]

# Call the function and print the result
print("List of squares of numbers from 1 to 30:")
print(squares_of_numbers())
