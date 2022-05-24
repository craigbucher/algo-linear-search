array_to_search_through = []
for number in range(1, 1001):
    array_to_search_through.append(number)

def linear_search(value_to_find, array_to_search_through):
    for i in range(0, len(array_to_search_through)):
        if array_to_search_through[i] == value_to_find:
            return i
    return None

def global_linear_search(value_to_find, array_to_search_through):
    result = []
    for i in range(0, len(array_to_search_through)):
        if array_to_search_through[i] == value_to_find:
            result.append(i)
    return result

# bananas_list = list('bananas')
# #print(linear_search(20, array_to_search_through))
# print(global_linear_search('a', bananas_list))