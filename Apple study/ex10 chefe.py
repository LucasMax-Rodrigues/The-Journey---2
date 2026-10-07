ids_corrompidos = [404, 12, 77, 0, 12, 99, 404, 25, 8, 0, 77, 50]
ids_ativos = []
atual = 0

for i in range(len(ids_corrompidos)):
    atual = ids_corrompidos[i]
    if atual>0:
        ids_ativos.append(ids_corrompidos[i])

print(ids_ativos)

ids_unicos=[]

for num in ids_ativos:
    if num not in ids_unicos:
        ids_unicos.append(num)

print(ids_unicos)

ultimos_acessos= ids_unicos[-1:-4:-1]
print(ultimos_acessos)#duvida por que ele precisa terminar no -4? e porque ele nao pega o ultimo numero da especificacao?

maior=0
segundo=0
for i in range(len(ids_unicos)):
    if ids_unicos[i]>maior:
        segundo = maior
        maior = ids_unicos[i]
    elif ids_unicos[i]>segundo and ids_unicos[i] != maior:
        segundo = ids_unicos[i]

print(maior,segundo)

maior_str = str(maior)
senha = maior_str[::-1]
print(senha)
        

