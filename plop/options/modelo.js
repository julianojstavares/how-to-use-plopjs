const actions = {
    arquivoUnico: [
        {
            type: 'add',
            path: '../src/{{ camelCase name }}.ts',
            templateFile: 'templates/teste.hbs'
        },
    ]
}

const moreActions = {
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

console.log("Action is a " + typeof(actions));

console.log(actions);

Object.assign(actions, moreActions);

console.log("More actions");

console.log(actions);

// node ./plop/options/modelo.js