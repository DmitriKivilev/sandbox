# ; программа генерирует заданное количество паролей
# ;  и включает в себя умную настройку на длину пароля,
# ;   а также на то, какие символы требуется в него включить, а какие исключить.

from random import *

digits = "0123456789"
lowercase_letters = "abcdefghijklmnopqrstuvwxyz"
uppercase_letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
punctuation = "!#$%&*+-=?@^_."
chars = ''

def generate_password(len_pass, chars_pass):
    return sample(chars_pass, len_pass)


quantity = int(input("Введите количество паролей для генерации "))
len_pswd = int(input("Введите длину одного пароля "))
allow_digits = (
    True if input("Включать ли цифры 0123456789? д - если да и любой другой символ если нет ").lower() == "д" else False
)
allow_uppercase_letters = (
    True
    if input("Включать ли прописные буквы ABCDEFGHIJKLMNOPQRSTUVWXYZ? д - если да и любой другой символ если нет ").lower() == "д"
    else False
)
allow_letters = (
    True
    if input("Включать ли строчные буквы abcdefghijklmnopqrstuvwxyz? д - если да и любой другой символ если нет ").lower() == "д"
    else False
)
allow_punctuation = (
    True if input("Включать ли символы !#$%&*+-=?@^_? д - если да и любой другой символ если нет ").lower() == "д" else False
)
allow_il1Lo0O = (
    True
    if input("Исключать ли неоднозначные символы il1Lo0O? д - если да и любой другой символ если нет ").lower() == "д"
    else False
)

if allow_digits:
    chars += digits
if allow_uppercase_letters:
    chars += uppercase_letters
if allow_letters:
    chars += lowercase_letters
if allow_punctuation:
    chars += punctuation
if allow_il1Lo0O:
    for sumbol in "il1Lo0O":
        chars = chars.replace(sumbol,"")

if not chars:
    print("Ошибка: не выбрано ни одного типа символов!")
    exit()

for i in range(quantity):
    print(''.join(generate_password(len_pswd,chars)))


