numbers=list(map(int, input("enter the numbers").split()))

dictionaryMul={}

for i in range(1,10):
  count=0
  for num in numbers:
    if num % i==0:
      count=count+1
  dictionaryMul[i]=count;
print(dictionaryMul)
      
      
  
  
