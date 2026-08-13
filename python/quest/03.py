from random import *

print('Добро пожаловать в угадайку50')
number = randint(1,100)
ex = number
couner = 0

def is_valid(num):
    if num.isdigit() and 1 <= int(num) <= 100 :
        return True
    else:
        return False
    

flag = True
count = 1
while flag:
    if ex == 1:
        break
    result = ex // 2 
    ex = result
    count += 1
    if result == 1 or result == 0:
        flag = False

while True:
    num = input("Введите целое число  ")
    if is_valid(num) == False:
        print('А может быть все-таки введем целое число от 1 до 100?')
        continue
    else:
        num = int(num)
        couner += 1
        if num < number:
            print('Ваше число меньше загаданного, попробуйте еще разок')
            continue
        elif num > number:
            print('Ваше число больше загаданного, попробуйте еще разок')
            continue
        else:
            print('Вы угадали, поздравляем!')
            break
        


print(f"Спасибо, что играли в числовую угадайку. Еще увидимся.Вы могли угадать число за минимум попыток {count}, но потратили {couner} попыток")