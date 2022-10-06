const prompts = [

    {
        type: 'input',
        name: 'module',
        message: 'Nome do módulo: '
    },
    {
        type: 'input',
        name: 'model',
        message: 'Nome do model: '
    },
    {
        type: 'input',
        name: 'view',
        message: 'Nome da view: '
    },
    {
        type: 'input',
        name: 'controller',
        message: 'Nome do controller: '
    },

]

const actions = [
    {
        type: 'addMany',
        destination: '../src/{{pascalCase module}}/',
        templateFiles: 'templates/moduloExemplo/*.hbs',
        base: 'templates/moduloExemplo',
    },
]

function modulo(plop) {

    plop.setGenerator('Criar módulo', {
        description: 'Cria uma pasta com arquivos',
        prompts, 
        actions,
    });

}

module.exports = modulo