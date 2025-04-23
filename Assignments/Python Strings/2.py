#Write a Python program to get a string made of the first 2 and last 2 characters   of a given string. If the string length is less than 2, return the empty string instead.

# Program to get the first 2 and last 2 characters of a string

# Take input from the user
input_string = input("Enter a string: ")

# Check if the string length is less than 2
if len(input_string) < 2:
    result = ""
else:
    result = input_string[:2] + input_string[-2:]

# Output the result
print(f"The resulting string is: {result}")
