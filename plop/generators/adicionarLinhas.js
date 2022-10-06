const prompts = [
    {
        type: "checkbox",
        name: "opcoes",
        message: "O que você quer adicionar no arquivo?",
        choices: [
            { name: "Comentário", value: "comment" },
            { name: "Função", value: "function" },
            { name: "Variável", value: "variable" },
        ],
    },
];

const addComment = {
    type: 'append',
    pattern: 'PLOP-INSERT-COMMENT',
    path: '../src/index.ts',
    templateFile: 'templates/appendExemplo/comentario.hbs',
};



let actions = [
    // {
    //     type: 'append',
    //     pattern: 'PLOP-INSERT-COMMENT',
    //     path: '../src/index.ts',
    //     templateFile: 'templates/appendExemplo/comentario.hbs',
    // },
    function customAction(answers) {
        // console.log(`func ${JSON.stringify(answers.opcoes)}`);

        const opcoes = answers.opcoes;

        if(opcoes.length > 0) {

           opcoes.forEach(option => {

                switch (option) {

                    case 'comment':
                        console.log('@comment');
                        actions = actions.concat([{
                            type: 'append',
                            pattern: 'PLOP-INSERT-COMMENT',
                            path: '../src/index.ts',
                            templateFile: 'templates/appendExemplo/comentario.hbs',
                        }])
                        break;
                    case 'function':
                        console.log('@function');
                        break;
                    case 'variable':
                        console.log('@variable');
                        break;
                
                    default:
                        break;

                }

           });

        }

    }
]

function adicionarLinhas(plop) {

    plop.setGenerator('Adicionar linhas', {
        description: 'Insere linhas em um arquivo existente',
        prompts, 
        actions: function (data) {
            console.log(data);
            console.log(actions);
            return actions;
          }
    });

}

module.exports = adicionarLinhas