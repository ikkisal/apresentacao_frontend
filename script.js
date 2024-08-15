// class Pessoa
// {
//     constructor(nome, idade)
//     {
//         this.nome = nome;
//         this.idade = idade;
//     }

//     getPessoa()
//     {
//         console.log("Olá, meu nome é: " + this.nome + " e eu tenho " + this.idade + " anos");
//     }
// }

// //Funcionario herda da classe Pessoa, todo funcionario é uma pessoa
// class Funcionario extends Pessoa
// {
//     constructor(nome, idade, salario)
//     {
//         super(nome, idade); //chama o constructor da classe Pessoa
//         this.salario = salario;
//     }

//     getFuncionario()
//     {
//         console.log("Meu nome é " + this.nome + " e eu tenho " + this.idade + " anos e eu ganho R$ " + this.salario);
//     }
// }

// let pessoa1 = new Pessoa("Pedro", 21);
// let pessoa2 = new Pessoa("Isabel", 27);
// let pessoa3 = new Pessoa("João", 18);
// let pessoas = [pessoa1, pessoa2, pessoa3];
// let funcionario = new Funcionario("Luiza", 30, 30000);
// //pessoas[1].getPessoa();
// funcionario.getFuncionario();













// class Casa
// {
//     //atributos casa
//     constructor(proprietario, rua, bairro, cidade, numero)
//     {
//         this.proprietario = proprietario;
//         this.rua = rua;
//         this.bairro = bairro;
//         this.cidade = cidade;
//         this.numero = numero;
//     }
//     getCasa(){
//         console.log("O proprietario é: " + this.proprietario)
//     }

//     venda(novoProprietario)
//     {
//         this.proprietario = novoProprietario;
//     }
// }

// let casa1 = new Casa("Ikey", "Etiopia", "Praia da Costa", "Vila Velha", 465);
// casa1.getCasa();

// casa1.venda("Pedro");

// casa1.getCasa();