/* Array de objetos */

const objs = [
  {
    nome: "Matheus",
    idade: 30,
    esta_trabalhando: true,
    detalhes_profissao: {
      "profissao": "programador",
      "empresa": "empresa X"
    },
    hobbies: [
      "Programar",
      "Correr",
      "Ler"
    ]
  },
  {
    "nome": "João",
    "idade": 25,
    "esta_trabalhando": false,
    "detalhes_profissao": {
      "profissao": null,
      "empresa": null
    },
    "hobbies": [
      "Academia",
      "Jogar",
    ]
  },
]

console.log(objs);  /* Não é possível transferir os dados como um objeto. Eles devem ser transferidos como texto JSON */

console.log("==========================================");

/* Convertendo os dados em um JSON válido */
/* Enviando os dados para a API via JSON */

const jsonData = JSON.stringify(objs);  /* convertido em um texto com JSON válido */

console.log(jsonData);
console.log(typeof jsonData);

console.log("==========================================");

/* Recebendo os dados no formato JSON e convertendo em um objeto, já que o javascript não lida com JSON */

const objData = JSON.parse(jsonData);

console.log(objData);
console.log(typeof objData);

console.log("==========================================");

objData.map((pessoa) => {
  console.log(pessoa.nome);
});

console.log("==========================================");