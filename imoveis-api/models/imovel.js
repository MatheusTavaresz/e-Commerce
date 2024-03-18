const { Schema, model } = require('mongoose')


const imovelSchema = new Schema({
    imagem: String,
    nomeDoCondominio: String,
    cidade: String,
    bairro: String,
    numeroDeQuartos: Number,
    tipoDeImovel: String, 
    numeroDeVagasDeGaragem: Number, 
    numeroDeBanheiros: Number, 
    andar: Number,
    possuiElevador: Boolean, 
    possuiVaranda: Boolean,
    possuiChurrasqueira: Boolean, 
    possuiAreaDeServico: Boolean, 
    possuiArmariosEmbutidos: Boolean, 
    possuiPiscina: Boolean
});

const Imovel = model('Imovel', imovelSchema)

module.exports = Imovel;