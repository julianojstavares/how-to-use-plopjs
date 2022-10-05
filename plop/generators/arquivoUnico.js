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
    }
]

function arquivoUnico(plop) {

    plop.setGenerator('Gerar arquivo único', {
        description: 'Gera apenas um arquivo',
        prompts, 
        actions,
    });

}

module.exports = arquivoUnico