const prompts = [
    {
        type: 'input',
        name: 'name',
        message: 'Escreva um nome para servir de prefixo'
    }
]

const actions = [
    {
        type: 'add',
        path: '../src/{{pascalCase name}}01.ts',
        templateFile: 'templates/teste.hbs'
    },
    {
        type: 'add',
        path: '../src/{{pascalCase name}}02.ts',
        templateFile: 'templates/teste.hbs'
    },
    {
        type: 'add',
        path: '../src/{{pascalCase name}}03.ts',
        templateFile: 'templates/teste.hbs'
    },
]


function multiplosArquivos(plop) {

    plop.setGenerator('Gerar mĂșltiplos arquivos', {
        description: 'Gera mĂșltiplos arquivos',
        prompts, 
        actions,
    });

}

module.exports = multiplosArquivos