// manipulação

const pessoas = [
    { name: "Fabiana Araújo", age: 33 },
    { name: "Gabriel Gomes", age: 25 },
    { name: "Fernando Henrique", age: 17 },
    { name: "Ana Luiza", age: 2 }, 
    { name: "Geralda do Nascimento", age: 93 },
    { name: "Miguel Souza", age: 70 },
    { name: "Antonio Miguel", age: 69 }
];
function exibirNomes(){
    const todos = pessoas.map(item =>{
        console.log(item.name + pessoas.age)})
}


// teste 3 -- retorne os dados de uma pessoa com um array

function dadosPessoa(name){
    const pessoa  = pessoas.find(item => item.name === name);
	if (opcao === 'nome'){
		return pessoa.name;
	}
    return [pessoa.nome , pessoa.age];
    }
console.log(dadosPessoa("Gabriel Gomes"))


// teste 4 -- criar uma função que retorne um vetor com todos nomes das pessoas
function vetorDeNomes(){
    const nomes = pessoas.map(item => item.name.split(" ")[0]);
    return nomes;
    }
	
console.log(vetorNomes())


// teste 5 -- criar uma função para inserir um id único para cada pessoa no vetor

function adicionarId(){
    let cont = 1
    const add = pessoas.map(item => {
        pessoas.id = contador
    contador ++});
}
console.log(item)


opção melhor seria:
function adicionarId(){
	pessoas.forEach((item, index) => {
	item.id = index + 1})
}


// teste 6 -- criar função para retornar os dados das pessoas que tem idade insuficente para sua primeira habilitação
function habilitados(){
const habilitação = pessoas.filter(maior => maior.age >= 18);
return habilitação;
console.log(habilitados())}


// teste 7 - criar uma função para retornar a media das idades das pessoas

function calcularMedia(){
    var som = 0;
    for (i = 0; i< pessoas.length; i++){
    som += pessoas[i].age;}
        
const media = som / pessoas.length

}
console.log(calcularMedia())


opção melhor para usar

function calcularMedia(){
	return pessoa.reduce((acc, item) => acc + item.age, 0) / pessoas.length
}


    
