const prompts = [
    {
        type: 'input',
        name: 'comment',
        message: 'Escreva um comentário'
    }
]

const addComment = {
    type: 'append',
    pattern: 'PLOP-INSERT-COMMENT',
    path: '../src/index.ts',
    templateFile: 'templates/appendExemplo/comentario.hbs',
};

export default function (plop) {
    plop.setGenerator("basic-nested", {
      prompts,  
      actions: [
        addComment,
      ],
    });
  }