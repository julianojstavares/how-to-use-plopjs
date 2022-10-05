const prompts = [
    {
        type: 'list',
        name: 'type',
        message: 'What type should you like to generate?',
        choices: [
            'arquivoUnico',
            'multiplosArquivos'
        ]
    },
    {
        type: 'input',
        name: 'name',
        message: 'Escreva um nome'
    }
]

const actions = {
    arquivoUnico: [
        {
            type: 'add',
            path: '../src/{{ camelCase name }}.ts',
            templateFile: 'templates/teste.hbs'
        },
    ],
    multiplosArquivos: [
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
}


function multiplaEscolha(plop) {

    plop.setGenerator('Gerar a partir de múltipla escolha', {
        description: 'Oferece opções para gerar arquivos',
        prompts, 
        actions: ({type}) => actions[type] || []
    });

}

module.exports = multiplaEscolha