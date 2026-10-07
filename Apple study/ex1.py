# input1 = input("Type your answer:")

# consoantes = 0
# vogais = 0

# for i in range(len(input1)):
#     if input1[i].lower() in 'aeiou':
#         vogais+=1
#     elif input1[i].lower() in 'bcdfghjklmnpqrstvwxyz':
#         consoantes+=1

# print("O numero de consoantes e:",consoantes,"O nummero de vogais e:",vogais)


input1 = input("Type your answer: ")
consoantes = 0
vogais = 0

# O 'for' já extrai cada caractere direto para a variável 'letra'
for letra in input1.lower():
    if letra in 'aeiou':
        vogais += 1
    elif letra in 'bcdfghjklmnpqrstvwxyz':
        consoantes += 1

print(f"O numero de consoantes e: {consoantes} - O numero de vogais e: {vogais}")