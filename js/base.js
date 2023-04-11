const nome = "Carlos";
let nome2 = "";
let pessoadefault = {
    nome: "marcelo",
    idade: "34",
    trabalho: "programador"
}
let nomes = ["marcelo", "maria", "pedro"];
let pessoasListaEm = [];
let pessoas = [
    {
        nome: "marcelo",
        idade: "34",
        trabalho: "programador"
    },
    {
        nome: "maria",
        idade: "25",
        trabalho: "ux/ui design"
    }
];

function alterarNome() {
    nome2 = "carla";
    console.log("valor alterado");
    console.log(nome2);
}

function recebeEalteraNome(novoNome) {
    nome2 = novoNome;
    console.log("Valor alterado recebendo um nome");
    console.log(nome2);
}
function imprimirPessoa(pessoa) {


    console.log("nome");
    console.log(pessoa.nome);

    console.log("idade");
    console.log(pessoa.idade);

    console.log("trabalho");
    console.log(pessoa.trabalho);
}
function adicionarPessoa(pessoa) {
    pessoas.push(pessoa);
}
function imprimirPessoas() {
    pessoas.forEach((item) => {
        console.log("Nome;");
        console.log(item.nome);

        console.log("idade");
        console.log(item.idade);

        console.log("trabalho");
        console.log(item.trabalho);
    }
    )
}
imprimirPessoas();

adicionarPessoa({
    nome: "pedro s",
    idade: "28",
    trabalho: "porteiro"

});

imprimirPessoas();



//imprimirPessoa(pessoadefault);
//recebeEalteraNome("João Silva P");
//recebeEalteraNome("maria silva");

//alterarNome(); 