var nota_1 = parseFloat(prompt("Insira a primeira nota: "));
var nota_2 = parseFloat(prompt("Insira a segunda nota: "));
var nota_3 = parseFloat(prompt("Insira a terceira nota: "));

var media = (nota_1 + nota_2 + nota_3) /3;

document.write(media.toFixed(2) + " - " ); // .toFixed(n de casas) define quantas casas decimais desejamos imprimir 

if (media >= 0 && media <= 5 ){
    document.writeln("Reprovado")
}else if(media > 5 && media <= 7){
    document.writeln("Aprovado com Reforço")

}else if(media > 7 && media <= 10){
    document.writeln("Aprovado ")
}else{
    document.writeln("Escolha um número entre 0 e 10 ")
}



