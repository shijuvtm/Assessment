numbers=list(map(int, input("Enter the number:").split())) 
dictMul={}

for i in range(1, 10):
  count=0
  for num in numbers:
    if num % i == 0:
      count=count+1
  dictMul[i]=count
print(dictMul)
