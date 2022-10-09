const myPrompts = require('../prompts/customPrompt');

const addComment = {
    type: 'append',
    pattern: 'PLOP-INSERT-COMMENT',
    path: '../src/index.ts',
    templateFile: 'templates/appendExemplo/comentario.hbs',
};

const addFunction = {
    type: 'append',
    pattern: 'PLOP-INSERT-FUNCTION',
    path: '../src/index.ts',
    templateFile: 'templates/appendExemplo/funcao.hbs',
};

const addVariable = {
    type: 'append',
    pattern: 'PLOP-INSERT-VAR',
    path: '../src/index.ts',
    templateFile: 'templates/appendExemplo/variavel.hbs',
};

function dynamicActions(data) {

    const opcoes = data.opcoes;

    let actions = [];

    if(opcoes.length > 0) {
    
        opcoes.forEach(option => {

             switch (option) {

                 case 'comment':
                     actions.push(addComment);
                     break;
                 case 'function':
                     actions.push(addFunction);
                     break;
                 case 'variable':
                     actions.push(addVariable);
                     break;
                 default:
                     break;

             }

        });

     }

    actions.concat(printData(data));

    return actions;

}

function printData(data) {

    console.log("Dados recebidos para uso em ações: " + JSON.stringify(data, null, 3));

    const actions = [];

    return actions;
}


function adicionarLinhas(plop) {

    plop.setGenerator('Adicionar Linhas', {

		description: 'another test using an actions function',
		prompts: myPrompts,
		actions: (data) => dynamicActions(data),

	});

}

module.exports = adicionarLinhas