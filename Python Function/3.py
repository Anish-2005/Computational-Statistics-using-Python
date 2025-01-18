#Write a Python function to multiply two lists. Initialize lists by taking user input.

# Function to multiply two lists
def multiply_lists(lst1, lst2):
    return [lst1[i] * lst2[i] for i in range(len(lst1))]

# Taking user input for the two lists
lst1 = [int(x) for x in input("Enter the first list of numbers separated by spaces: ").split()]
lst2 = [int(x) for x in input("Enter the second list of numbers separated by spaces: ").split()]

# Ensure the lists are of the same length
if len(lst1) == len(lst2):
    # Call the function and print the result
    print("Result of multiplying the two lists:")
    print(multiply_lists(lst1, lst2))
else:
    print("The lists must have the same length.")
