let proximoId = 1

function adicionarBaskha(){
    var a = document.getElementById("a").value;
    var b = document.getElementById("b").value;
    var c = document.getElementById("c").value;
    var x1;
    var x2;
    var delta = ((b*b) - (4*a*c));
    if(delta<0){
        alert("O valor de delta é imcompativel com a equação de segundo grau!");
    }
    else{
        x1 = (-b + Math.sqrt(delta) / 2 * a);
        x2 = (-b - Math.sqrt(delta) / 2 * a);
    }
    const tabela = document.getElementById("tabelaValores") .getElementsByTagName('tbody') [0];

const blinha = tabela.insertRow();

const n = blinha.insertCell(0);
const a = blinha.insertCell(1);
const b = blinha.insertCell(2);
const c = novalinha.insertCell(3);
const x1, x2 = blinha.insertCell(4);


celn.innerHTML = n;
cela.innerHTML = a;
celb.innerHTML = b;
celc.innerHTML = c;
celx.innerHTML = x1,x2;

proximoId++

document.getElementById("linhaForm").reset();




}

           