listA = [1,3,5]
listB = [2,4,6,8,10]
listF = []

if len(listA)>len(listB):
    for i in range(len(listB)):
        listF.append(listA[i])
        listF.append(listB[i])
    for j in range(len(listB), len(listA)):
                        listF.append(listA[j])
elif len(listB)> len(listA):
    for i in range(len(listA)):
        listF.append(listA[i])
        listF.append(listB[i])
    for j in range(len(listA), len(listB)):
                    listF.append(listB[j])

else:
    for i in range(len(listA)):
            listF.append(listA[i])
            listF.append(listB[i])
        

print(listF)