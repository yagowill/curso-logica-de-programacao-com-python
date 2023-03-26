# Condicionais
# if, elif e else
'''
E ae Yago, bora dar uma saida hpje?
Se eu terminar meu trabalho aqui, eu consigo.


trabalho_terminado = False
if trabalho_terminado == True:
  print('Opa! Bora dar uma saída.')
else:
  print('Não posso sair agora.')
'''
'''
 Ei, você consegue me ajudar a mover essas caixas lá para fora hoje a tarde?
 Se eu estiver livre, sim. Mas, se não der pede meu irmão para te ajudar
 
estou_livre = False
if estou_livre == True:
  print('Ok, posso ajudar hoje sim!')
else:
  print('peça o meu irmão para te ajudar')
  '''
'''
  Eu cheguei atrasado na aula, ainda posso entrar?
  Se essa for sua terceira vez chegando atrasado, então pode sim, caso contrário irá tomar uma suspensão
'''
numero_de_atrasos = input('Quantas faltas você tem?')
if int(numero_de_atrasos) >= 3:
  print('Você está suspenso.')
elif int(numero_de_atrasos) == 1:
  print('Pode entrar, porém caso toma mais 2 faltas, irá ser suspenso. ')
elif int(numero_de_atrasos) == 2:
  print('Pode entrar, porém caso toma mais 1 falta, irá ser suspenso. ')
else:
  print('pode entrar')