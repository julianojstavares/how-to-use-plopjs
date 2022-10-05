const { exemplo01 } = require("../options/exemplo01");
const { exemplo02 } = require("../options/exemplo02");

const prompts = [
    {
        type: 'list',
        name: 'type',
        message: 'What type should you like to generate?',
        choices: [
            Object.keys(exemplo01).toString(),
            Object.keys(exemplo02).toString()
        ]
    },
    {
        type: 'input',
        name: 'name',
        message: 'Escreva um nome'
    }
]

const actions = {};

Object.assign(actions, ...[exemplo01, exemplo02]);

function opcoesExternas(plop) {

    plop.setGenerator('Gerar a partir de opções externas', {
        description: 'Oferece opções para gerar arquivos',
        prompts, 
        actions: ({type}) => actions[type] || []
    });

}

module.exports = opcoesExternas
