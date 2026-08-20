# направление: шифрование или дешифрование;
# язык алфавита: русский или английский;
# шаг сдвига (со сдвигом вправо).

eng_alp = 'abcdefghijklmnopqrstuvwxyz'
rus_alp = "абвгдежзийклмнопрстуфхцчшщъыьэюя"
alphavit = ""
while True:
    way = input(" Выберите опцию: д - дешифрование и ш - шифрование ".lower())
    if way == 'д' or way == "ш":
        break
    else:
        print('Введите корректный ответ')

while True:
    language = input("Выберите язык р - русский и а - английский ".lower())
    if language == 'р':
        alphavit = rus_alp
        break
    elif language == "а":
       alphavit = eng_alp
       break
    else:
        print('Введите язык из перечня')
while True:
    choise = input('р - если хотите использовать рендж н - если хотите использовать шаг ').lower()
    if choise == 'р':
        user_input = input('Введите рендж от 0 до ? ')
        if user_input.isdigit():
            rot_N = int(user_input)
            break
        else:
            print('Ошибка! Введите целое число.')
    if choise == 'н':
        user_input = input('Введите шаг ? ')
        if user_input.isdigit():
            rot_N = int(user_input)
            break
        else:
            print('Ошибка! Введите целое число. ')

def decrypt(road,alph,n):
    if choise == "н":
        wrds = ""
        txt = input("Введите слово/фразу: ")
        
        if road == "д":
            n = -n
            
        for char in txt:
            if char.lower() in alph:
                index = alph.index(char.lower())
                new_ind = (index + n) % len(alph)
                new_char = alph[new_ind]
                if char.isupper():
                    new_char = new_char.upper()
                wrds += new_char
            else:
                wrds += char

        return wrds 
    
    elif choise == "р":
        txt = input("Введите слово/фразу: ")

        for num in range(n, -1, -1):
            wrds = ""
            for char in txt:
                if char.lower() in alph:
                    index = alph.index(char.lower())
                    if road == "д":
                        new_ind = (index - num) % len(alph)  # ← ОШИБКА! num не существует здесь
                    else:
                        new_ind = (index + num) % len(alph)
                    new_char = alph[new_ind]
                    if char.isupper():
                        new_char = new_char.upper()
                    wrds += new_char
                else:
                    wrds += char
            print (wrds)

if choise == "р":
    decrypt(way,alphavit,rot_N)
else:
    print(decrypt(way,alphavit,rot_N))
