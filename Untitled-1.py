def arr(a):
    mx=arr[0]
    for i in range(len(arr)):
        if arr[i]>arr[i+1]:
            mx=arr[i+1]
    return mx
print(arr([1,4,6,3,5,4,3]))
        
        