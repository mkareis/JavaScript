var idade = parseInt(prompt("Digite sua idade: "));

var resultado = (idade <= 17) ? "menor de idade <br>" : "maior de idade <br>";

document.writeln("Você é " + resultado);
var permissao = (idade >= 18) ? "Você pode entrar no local" : "Você não pode entrar no local";

document.writeln(permissao);