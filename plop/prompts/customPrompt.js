function promptOptions(inquirer, answers = {}) {

	const prompts = inquirer.prompt([
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
	]);

	prompts.then((newAnswers) => {
		Object.assign(newAnswers, answers);
	});

	return prompts;

}

async function promptComentario(inquirer, answers = {}) {

	const prompts = inquirer.prompt([
		{
			type: 'input',
			name: 'comment-txt',
			message: 'Digite um comentário: '
		}
	]);

	const newAnswers = await prompts;

	Object.assign(newAnswers, answers);

	return newAnswers;

}

function promptFuncao(inquirer, answers = {}) {

	const prompts = inquirer.prompt([
		{
			type: 'input',
			name: 'function-name',
			message: 'Digite o nome da função: '
		}
	]);

	prompts.then((newAnswers) => {
		Object.assign(newAnswers, answers);
	});

	return prompts;

}

function promptVariavel(inquirer, answers = {}) {

	const prompts = inquirer.prompt([
		{
			type: 'input',
			name: 'variable-name',
			message: 'Digite o nome da variável: '
		}
	]);

	prompts.then((newAnswers) => {
		Object.assign(newAnswers, answers);
	});

	return prompts;

}

const execOptions = {

	'comment': async (inquirer, prompts) => await promptComentario(inquirer, prompts),
	'function': async (inquirer, prompts) => await promptFuncao(inquirer, prompts),
	'variable': async (inquirer, prompts) => await promptVariavel(inquirer, prompts),
}

module.exports = async function customPrompts (inquirer) {
	
	const prompts = await promptOptions(inquirer);

	const options = prompts.opcoes;

	if(options.length > 0) {

		for (const option of options) {

			await execOptions[option](inquirer, prompts);
			
		}

	 }

	return prompts;

};