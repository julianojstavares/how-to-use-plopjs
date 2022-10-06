const arquivoUnico = require("./generators/arquivoUnico");
const multiplaEscolha = require("./generators/multiplaEscolha");
const multiplosArquivos = require("./generators/multiplosArquivos");
const opcoesExternas = require("./generators/opcoesExternas");
const modulo = require("./generators/modulo");
const adicionarLinhas = require("./generators/adicionarLinhas");


module.exports = plop => {

    arquivoUnico(plop);
    multiplosArquivos(plop);
    multiplaEscolha(plop);
    opcoesExternas(plop);
    modulo(plop);
    adicionarLinhas(plop);

}