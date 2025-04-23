#Swap the 1st and last element of a given list.
# Program to swap the first and last element of a given list

# Taking input list from the user
lst = [int(x) for x in input("Enter elements of the list separated by spaces: ").split()]

# Check if the list has more than one element
if len(lst) > 1:
    # Swapping the first and last elements
    lst[0], lst[-1] = lst[-1], lst[0]
    print("List after swapping first and last elements:", lst)
else:
    print("The list must contain more than one element to perform a swap.")
