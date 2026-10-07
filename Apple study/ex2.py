vetor = [2,3,4,5,1,0,10,2,-10]

maior = 0
segundo=0

for i in range(len(vetor)):
    atual = vetor[i]
    if maior<atual:
        segundo=maior
        maior = atual
    elif atual<maior and atual>segundo:
        segundo = atual
print("O maior numero e:", maior, "O segundo maior numero e:", segundo)

