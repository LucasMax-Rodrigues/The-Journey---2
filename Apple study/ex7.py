list1 =[1, 1, 1, 2, 2, 3, 1, 1]

listF = []
atual = 0

listF.append(list1[0])
for i in range(1, len(list1)):
    atual = list1[i]
    if list1[i-1] != list1[i]:
        listF.append(list1[i])

print(listF)

