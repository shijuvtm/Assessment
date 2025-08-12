a=int(input("enter the number:"))
if a%2==0:
  a=a-1
  
print(', '.join(str(i) for i in range(1, 2*a, 2)))
