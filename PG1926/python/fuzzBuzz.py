baslangic=int(input("Başlangıç değerini girin:"))
bitis= int(input("Bitis değerini girin: ") )
for a in range(baslangic,bitis+1):
    if a%3==0 and a%5==0:
        print("FizzBuzz")
    elif a%3==0 :
        print("Fizz")
    elif a%5==0:     
        print("Buzz")
    else:
        print(a)


