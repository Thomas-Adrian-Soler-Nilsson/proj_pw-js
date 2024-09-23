let proximoId = 1

function adicionarLinha(){
    //Entrada de valores do formulário
    const nome = document.getElementById("nome").value;
    const idade = document.getElementById("idade").value;
    const admissao = document.getElementById("admissao").value;
    const demissao = document.getElementById("demissao").value;

    //Se for preenchido vazio
    if(nome === '' || idade === '' || admissao === '')
        alert("Preencha os valores do formulário!")
    else {
        //Cria uma linha na tabela se não existir
const tabela = document.getElementById("tabelaDados") .getElementsByTagName('tbody') [0];
//Inserindo uma nova linha
const novalinha = tabela.insertRow();

//Inserindo os valores da linha
const celId = novalinha.insertCell(0);
const celNome = novalinha.insertCell(1);
const celIdade = novalinha.insertCell(2);
const celAdmissao = novalinha.insertCell(3);
const celDemissao = novalinha.insertCell(4);

//Inserindo os valores dentro das celulas
celId.innerHTML = proximoId;
celNome.innerHTML = nome;
celIdade.innerHTML = idade;
celAdmissao.innerHTML = admissao;
celDemissao.innerHTML = demissao;

proximoId++

//Limpar formulário 
document.getElementById("linhaForm").reset();
    }
}




