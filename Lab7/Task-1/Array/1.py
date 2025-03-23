n=int(input())
arr=list(map(int,input().split()))

used=set()

for i in range(0,n,2):
    print(arr[i],end=" ")