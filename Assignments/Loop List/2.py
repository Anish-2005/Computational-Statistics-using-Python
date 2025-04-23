#Print multiplication table of a number. Take user input. Use While loop.
# Program to print the multiplication table of a number using a while loop

# Taking input from the user
num = int(input("Enter the number to print its multiplication table: "))

# Initialize a counter variable
i = 1

# Loop to generate and print the multiplication table
while i <= 10:
    print(f"{num} x {i} = {num * i}")
    i += 1  # Increment the counter
