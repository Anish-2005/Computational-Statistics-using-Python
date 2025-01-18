#Write a Python program to count occurrences of a substring in a string.

# Program to count occurrences of a substring in a string

# Take input from the user
input_string = input("Enter a string: ")
substring = input("Enter the substring to search for: ")

# Count occurrences of the substring
occurrences = input_string.count(substring)

# Output the result
print(f"The substring '{substring}' occurs {occurrences} times in the string.")
