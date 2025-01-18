#Build a python program to implement Mean, Variance, Co-variance & Relational Matrix by using python loops and list.

# Function to calculate Mean of a list
def mean(lst):
    return sum(lst) / len(lst)

# Function to calculate Variance of a list
def variance(lst):
    avg = mean(lst)
    return sum((x - avg) ** 2 for x in lst) / len(lst)

# Function to calculate Covariance between two lists
def covariance(lst1, lst2):
    mean1 = mean(lst1)
    mean2 = mean(lst2)
    return sum((lst1[i] - mean1) * (lst2[i] - mean2) for i in range(len(lst1))) / len(lst1)

# Function to calculate the Relational Matrix (Covariance Matrix)
def relational_matrix(lst1, lst2):
    mean1 = mean(lst1)
    mean2 = mean(lst2)
    
    matrix = [[covariance(lst1, lst1), covariance(lst1, lst2)],
              [covariance(lst2, lst1), covariance(lst2, lst2)]]
    
    return matrix

# Taking input from the user for two lists
lst1 = [float(x) for x in input("Enter elements of list 1 separated by spaces: ").split()]
lst2 = [float(x) for x in input("Enter elements of list 2 separated by spaces: ").split()]

# Ensure the lists are of the same length
if len(lst1) != len(lst2):
    print("The lists must have the same length!")
else:
    # Calculate Mean, Variance, and Covariance
    print("\nMean of list 1:", mean(lst1))
    print("Variance of list 1:", variance(lst1))
    print("Mean of list 2:", mean(lst2))
    print("Variance of list 2:", variance(lst2))
    
    print("\nCovariance between list 1 and list 2:", covariance(lst1, lst2))
    
    # Calculate and print the Relational Matrix
    print("\nRelational Matrix (Covariance Matrix):")
    matrix = relational_matrix(lst1, lst2)
    for row in matrix:
        print(row)
