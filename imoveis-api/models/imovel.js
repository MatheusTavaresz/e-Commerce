const { Schema, model } = require('mongoose')


const imovelSchema = new Schema({
    nomeDoCondominio: String,
    cidade: String,
    bairro: String,
    endereçoCompleto: String,
    numeroDeQuartos: Number,
    dimensoes: Number,
    tipoDeImovel: String, 
    areaTotal: Number, 
    areaUtil: Number, 
    numeroDeVagasDeGaragem: Number, 
    numeroDeBanheiros: Number, 
    andar: Number,
    possuiElevador: Boolean, 
    possuiVaranda: Boolean,
    possuiChurrasqueira: Boolean, 
    possuiAreaDeServico: Boolean, 
    possuiArmariosEmbutidos: Boolean, 
    possuiPiscina: Boolean, 
    distanciasPontosDeInteresse: {
        praia: Number,
        shopping: Number,
        mercado: Number,
        faculdade: Number,
    }
});

const Imovel = model('Imovel', imovelSchema)

module.exports = Imovel;