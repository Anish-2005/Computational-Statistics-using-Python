#Write a Python function to sum all the numbers in a list.  Initialize list by taking user input.
# Function to sum all numbers in a list
def sum_of_list(lst):
    return sum(lst)

# Taking user input for the list
lst = [int(x) for x in input("Enter numbers separated by spaces: ").split()]

# Call the function and print the sum
print("Sum of the numbers in the list:", sum_of_list(lst))
