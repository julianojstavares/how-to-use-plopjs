const arquivoUnico = require("./generators/arquivoUnico");
const multiplaEscolha = require("./generators/multiplaEscolha");
const multiplosArquivos = require("./generators/multiplosArquivos");
const opcoesExternas = require("./generators/opcoesExternas");
const modulo = require("./generators/modulo");
const adicionarLinhas = require("./generators/adicionarLinhas");


module.exports = plop => {

    plop.setWelcomeMessage("Olá! Seja bem-vindo ao Plop! O que deseja fazer?");

    arquivoUnico(plop);
    multiplosArquivos(plop);
    multiplaEscolha(plop);
    opcoesExternas(plop);
    modulo(plop);
    adicionarLinhas(plop);

}