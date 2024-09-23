var nome = window.prompt("Digite o seu nome: ")
var idade = Number(window.prompt("Digite sua idade: "));
document.write(`Seu nome é <b>${nome}<b> e tem <b>${idade}<b>.<br>`);
document.write(`Seu nome tem <b>${nome.length} caracteres</b>.<br>`);
document.write(`Seu nome em letras maiusculas é <b>${nome.toLocaleUpperCase()}</b>.<br>`);
document.write(`Sua idade em dias são <b>${idade*365}</b>.<br>`);
