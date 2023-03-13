# Crie um programa em python que leia nomes até que seja digitado o número "0". Cada nome deve ser adicionado a uma lista.
# Qual o tamanho da lista?

n = "4"
cont=0
nomes = []
while(n!=0):
    n=str(input("digite um nome: "))
    if n == "0":
        break
    nomes.append(n)
    cont=cont+1
print(cont)
