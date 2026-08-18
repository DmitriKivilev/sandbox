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
    user_input = input('Введите шаг сдвига для пароля: ')
    if user_input.isdigit():
        rot_N = int(user_input)
        break
    else:
        print('Ошибка! Введите целое число.')

def decrypt(road,alph,n):
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



       
print(decrypt(way,alphavit,rot_N))
