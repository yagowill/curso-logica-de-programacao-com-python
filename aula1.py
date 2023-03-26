# variáveis

# Números
velocidade_internet = 10
print(velocidade_internet)
nota_filme = 8.5  # float
# Valores boleanos
esta_aberto = True
# Strings
nome_do_curso = 'Lógica de programação'

# Como variáveis seriam usadas em um programa real?
# Problema 1 - valor por hora
# Escreva um programa que retorne o valor hora de um funcionário com base no seu salário mensal e horas trabalhadas por mês.
'''
input salario_mensal
input horas_trabalhadas_por_mes
valor_hora = salario_mensal / horas_trabalhadas_por_mes
print valor_hora
'''
salario_mensal = input('Qual seu salário mensal? ')
horas_trabalhadas_por_mes = input('Quantas horas trabalha por mês? ')
valor_hora = int(salario_mensal) / int(horas_trabalhadas_por_mes)
print(valor_hora)
