# Дезоксирибонуклеиновая кислота (ДНК) - это химическое вещество, обнаруженное в ядре клеток и несет «инструкции» по развитию и функционированию живых организмов.

# Если вы хотите узнать больше: http://en.wikipedia.org/wiki/DNA

# В строках ДНК символы "A" и "T" являются дополнениями друг к другу, как "C" и "G". Ваша функция получает одну сторону ДНК (строку, за исключением Хаскелла); вам нужно вернуть другую дополнительную сторону. Нить ДНК никогда не бывает пустой или вообще нет ДНК (опять же, за исключением Хаскелла).

# Более похожие упражнения можно найти здесь: http://rosalind.info/problems/list-view/ (источник)

# Пример: (вход --> выход)

# "ATTGC" --> "TAACG"
# "GTAT" --> "CATA"

# def DNA_strand(dna):
#     list_str = list(dna)
#     result = []
#     for i in list_str:
#         if i == "A":
#             result.append("T")
#         elif i == "T":
#             result.append("A")
#         elif i == "C":
#             result.append("G")
#         elif i == "G":
#             result.append("C")
#         else:
#             result.append(i)
#     return "".join(result)  

# print(DNA_strand("ATTTGGGCC"))

# or

def DNA_strand(dna):
    pairs = {"A": "T", "T": "A", "C": "G", "G": "C"}
    return "".join([pairs[ch] for ch in dna])

print(DNA_strand("GGGTTACC"))