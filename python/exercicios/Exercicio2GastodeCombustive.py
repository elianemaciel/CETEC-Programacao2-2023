tempo = int(input("insira o tempo gasto: "))
vel = int(input("insira a velocidade: "))

km = tempo * vel
gas = round(km/12, 3)

print(f"você gastou{gas} litros de gasolina")
