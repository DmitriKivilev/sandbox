# Собираем все суммы
all_sums = []
for i in range(1, 33):
    for n in range(i, 33):
        all_sums.append(i**3 + n**3)

# Сортируем
all_sums.sort()

# Ищем повторения через for
result = []
prev = 0
count = 0

for s in all_sums:
    if s == prev:
        count += 1
    else:
        if count == 2:
            result.append(prev)
        prev = s
        count = 1

if count >= 2:
    result.append(prev)

print(result[:5])