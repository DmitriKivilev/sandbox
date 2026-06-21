# На вход программе подаются 2 строки. Вам необходимо сравнить эти строки посимвольно, не учитывая регистр и игнорируя все небуквенные символы. 
# Программа должна вывести «YES» (без кавычек), если строки окажутся равны в результате такой проверки, или «NO» (без кавычек) в противном случае.

# test 
# n5#e6vER
# +NEV-er
# answer YES

a, b = input(),input()
a_str = a.lower()
b_str = b.lower()
a_final = ""
b_final = ""
znak = "1234567890_-+*= /\><,!@#$%^&()$#🔥😎"
for i in a_str:
    if i not in znak:
        a_final += i
for v in b_str:
    if v not in znak:
        b_final += v
if a_final == b_final:
    print("YES")
else:
    print("NO")
