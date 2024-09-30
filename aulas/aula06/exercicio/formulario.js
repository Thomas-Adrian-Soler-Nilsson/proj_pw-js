let proximoId = 1

function adicionarLinha(){
    //Entrada de valores do formulário
    const id = document.getElementById("id").value;
    const produto = document.getElementById("produto").value;
    const marca = document.getElementById("marca").value;
    const segmento = document.getElementById("segmento").value;
    const valor = document.getElementById("valor").value;
    const datavenda = document.getElementById("datavenda").value;

    //Se for preenchido vazio
    if(id === '' || produto === '' || valor === ''|| segmento === '' || datavenda === ''|| marca === '')
        window.alert("Preencha os valores do formulário!")
    else {
        //Cria uma linha na tabela se não existir
const tabela = document.getElementById("tabelaDados") .getElementsByTagName('tbody') [0];
//Inserindo uma nova linha
const novalinha = tabela.insertRow();

//Inserindo os valores da linha
const celid = novalinha.insertCell(0);
const celproduto = novalinha.insertCell(1);
const celmarca = novalinha.insertCell(2);
const celsegmento = novalinha.insertCell(3);
const celvalor = novalinha.insertCell(4);
const celdatavenda = novalinha.insertCell(5);


//Inserindo os valores dentro das celulas
celid.innerHTML = id;
celproduto.innerHTML = produto;
celmarca.innerHTML = marca;
celsegmento.innerHTML = segmento;
celvalor.innerHTML = valor;
celdatavenda.innerHTML = datavenda;


proximoId++

//Limpar formulário 
document.getElementById("linhaForm").reset();
    }
}