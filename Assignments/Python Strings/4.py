#Write a Python program to sort a string lexicographically.

# Program to sort a string lexicographically

# Take input from the user
input_string = input("Enter a string: ")

# Sort the string lexicographically
sorted_string = ''.join(sorted(input_string))

# Output the sorted string
print(f"The lexicographically sorted string is: {sorted_string}")
