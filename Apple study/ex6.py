list1 = [1,2,3,9,5,0,12]

maior = 0
segundo = 0

for i in range(len(list1)):
    atual = list1[i]
    if atual>maior:
        segundo = maior
        maior = atual
    elif atual > segundo and atual!=maior:
        segundo=atual

print(maior,segundo)