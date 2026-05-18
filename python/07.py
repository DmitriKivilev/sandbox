"""Given an array of integers as strings and numbers, return the sum of the array values as if all were numbers.

Return your answer as a number."""

def sum_mix(arr):
    fun_sum = 0
    for i in arr:
        fun_sum += int(i)
    return fun_sum
print(sum_mix([1,2,3,"5"]))
