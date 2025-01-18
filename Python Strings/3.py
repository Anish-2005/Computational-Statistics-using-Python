#Write a Python program to count the occurrences of each word in a given sentence.

# Program to count occurrences of each word in a sentence

# Take input from the user
sentence = input("Enter a sentence: ")

# Split the sentence into words
words = sentence.split()

# Create a dictionary to count the occurrences of each word
word_count = {}

for word in words:
    word_count[word] = word_count.get(word, 0) + 1

# Output the word count
print("Word occurrences in the sentence:")
for word, count in word_count.items():
    print(f"{word}: {count}")
