dia = int(input("Digite o dia"))
mes = int(input("Digite o mes"))
ano = int(input("Digite o ano"))

print("A data de nascimento é: {} {} {}".format(dia, mes, ano))
print("A data de nascimento é: {dd} {mm} {yy}".format(
  dd=dia, mm=mes, yy=ano))


# A mais antiga
print("A data de nascimento é: %d" % dia, mes, ano)

# FStrings
print(f"A data de nascimento é: {dia}/{mes}/{ano}")

