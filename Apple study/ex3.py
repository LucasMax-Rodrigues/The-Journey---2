vet = [12, -3, 0, 5, 8, -4, 7]
vetP = []
vetI = []

for i in range(len(vet)):
    if vet[i]%2 == 0 and vet[i]!= 0:
        vetP.append(vet[i])
    elif vet[i]%2 != 0:
        vetI.append(vet[i])

print("Lista de pares:",vetP,"Lista de impares:", vetI)