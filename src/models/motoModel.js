const db = require('../db.js');

const Schema = db.Schema;

const motoSchema = new Schema({
    Marca: {
        type: String,
        required: true,
    },
    Cor: {
        type: String,
        required: true,
    },
    Modelo: {
        type: String,
        required: true,
    },
    Cilindrada: {
        type: Schema.Types.Mixed,
        required: true,
    },
    Peso: {
        type: Number,
        required: true,
    },
});

const Moto = db.model('Moto', motoSchema);

module.exports = Moto;
