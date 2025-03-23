def make_chocolate(small, big, goal):
    max_big = min(big, goal // 5)  
    remaining = goal - max_big * 5  
    if remaining <= small:  
        return remaining
    return -1