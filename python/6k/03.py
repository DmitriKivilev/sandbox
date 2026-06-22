# На вход подаётся число n, затем n строк вида <номер><буква>. Нужно вывести YES, если номер от 0 до 9, а буква от А до П. Иначе NO.
# # Ввод:
# # 5
# # 9А
# # 11Б
# # 0К
# # 5П
# # 2У

# # Вывод:
# # YES
# # NO
# # YES
# # YES
# # NO

num_str = "0123456789"
leter_str = "АБВГДЕЖЗИКЛМНОП"
for i in range(int(input())):
    words = input()
    if words[0] in num_str and words[-1] in leter_str and len(words) < 3:
            print("YES")
    else:
        print("NO")


# or 

# for i in range(int(input())):
#     words = input()
#     if len(words) == 2 and words[0] <= '9' and  "А" <= words[1] <= "П":
#             print("YES")
#     else:
#         print("NO")

