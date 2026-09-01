# объявление функции
def draw_triangle():
    balance = 7
    for i in range(1,16,2):
        a = " " * balance + "*" * i 
        balance -= 1
        print(a)

# основная программа
draw_triangle()  # вызов функции


# елочка