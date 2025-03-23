def close_far(a, b, c):
    close_b = abs(a - b) <= 1
    close_c = abs(a - c) <= 1
    far_b = abs(a - b) >= 2 and abs(b - c) >= 2
    far_c = abs(a - c) >= 2 and abs(b - c) >= 2

    return (close_b and far_c) or (close_c and far_b)