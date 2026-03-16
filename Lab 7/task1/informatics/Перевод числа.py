n = int(input())
zeros = 0
positives = 0
negatives = 0

for _ in range(n):
    x = int(input())
    if x == 0:
        zeros += 1
    elif x > 0:
        positives += 1
    else:
        negatives += 1

print(zeros, positives, negatives)