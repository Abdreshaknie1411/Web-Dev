n = int(input())
scores = list(map(int, input().split()))

max_score = max(scores)

# Remove all occurrences of the max score
while max_score in scores:
    scores.remove(max_score)

runner_up = max(scores)
print(runner_up)