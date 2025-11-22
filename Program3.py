n=int(input("enter the number:")) 
if n % 2 ==0:
  n=n-1
print(",".join(str(i) for i in range(1, 2*n, 2))) 
