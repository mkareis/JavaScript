var entrada = parseInt(prompt("Digite a sua idade"));
var verificaCaracter = "s"

var ternarioString = (typeof entrada)
var ternarioCrianca = (entrada >= 0 && entrada < 15 ) ? "Criança" : " ";
var ternarioJovem = (entrada >= 15 && entrada < 30 ) ? "Jovem" : " ";
var ternarioAdulto = (entrada >= 30 && entrada < 60 ) ? "Adulto" : " ";
var ternarioIdoso = (entrada >= 60) ? "Idoso" : " ";

if (isNaN(entrada) == false){
    document.writeln(ternarioCrianca);
    document.writeln(ternarioJovem);
    document.writeln(ternarioAdulto);
    document.writeln(ternarioIdoso);
}else{
    document.writeln("Digite apenas número. ")
}
