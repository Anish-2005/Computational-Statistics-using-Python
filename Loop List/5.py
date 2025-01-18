#Search a particular item from the given list. Search item should be taken from user.

# Program to search for a particular item in a given list

# Taking input list from the user
lst = [int(x) for x in input("Enter elements of the list separated by spaces: ").split()]

# Taking the item to search for from the user
item = int(input("Enter the item to search for: "))

# Searching for the item in the list
if item in lst:
    print(f"The item {item} is found in the list.")
else:
    print(f"The item {item} is not found in the list.")
