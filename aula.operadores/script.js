// Operadores Aritméticos(matemáticos)
// let salario = 100;

// + , - , * , / , **

//  console.log(salario + salario);
//  console.log(salario - salario);
//  console.log(salario * salario);
//  console.log(salario / salario);
//  console.log(salario ** 3);

// ++ --

//  let idade = 22;
//  console.log(idade++);
//  console.log(idade);
//  console.log(++idade);

 // Operadores Atribuição
//  let valorTecladoGamer = 100;
// valorTecladoGamer = valorTecladoGamer + valorTecladoGamer;
// valorTecladoGamer = valorTecladoGamer - valorTecladoGamer;
// valorTecladoGamer += valorTecladoGamer;
// valorTecladoGamer -= valorTecladoGamer;
//  console.log(valorTecladoGamer);

// Operadores de Igualdade
// Igualdade estrita
// console.log(1===1);
// console.log('1'===1);

// Igualdade Solta
// console.log(1==1);
// console.log('1'==1);

// Operador Ternário
// Tem um cliente, 100 premium, comum
// let pontos = 100;
// let tipo = pontos > 100 ?  'premium' : 'comum';
// console.log(tipo);

// Operador Lógico e (&&)
// Retorna true se os dois operandos forem true

// console.log(true && true);

// let maiorDeIdade = false;
// let possuiCarteiraDeTrabalho = true;
// let podeAplicar = maiorDeIdade || possuiCarteiraDeTrabalho;
// console.log('pode Aplicar: ', podeAplicar);

// Operador Lógico ou (||)
// Retornar true se um dos operandos forem true

// Operador NOT (!)
// let candidatoRecusado = !podeAplicar;

// console.log('candidato recusado', candidatoRecusado);

//falsy
//undefined
//null
//0
// false
// ''
// NaN - not a number

// Truthy

// if else

// se a hora estiver entre 06:00 até 12:00 ; Bom dia!
// Se estiver entre 12: até 18:00 : Boa tarde!
// Caso contrário : Boa noite!
// let hora = 16;

// if (hora > 6 && hora <= 12) {
//     console.log("Bom dia");
// }
// else if (hora > 12 && hora < 18) {
//     console.log("Boa tarde");
// }
// else {
//     console.log("Boa noite")
// }

let permissao; // comum, gerente, diretor
permissao = 'comum';
  switch (permissao) {
    case 'comum' :
    console.log('usuário comum');
    break;
    
    case 'gerente' :
    console.log('usuário gerente');
    break;

    case 'diretor' :
    console.log('usuário diretor');
    break;
  }