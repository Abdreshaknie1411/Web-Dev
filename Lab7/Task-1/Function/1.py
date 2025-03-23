def min(a,b,c,d):
    if(a<b and a<c and a<d):
        return a
    elif(b<c and b<d):
        return b
    elif(c<d):
        return c
    else:
        return d

a=int(input())
b=int(input())
c=int(input())
d=int(input())

result=min(a,b,c,d)
print(result)