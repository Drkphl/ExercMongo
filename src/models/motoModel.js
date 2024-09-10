const db = require('../db.js');

const Schema = db.Schema;

const motoSchema = new Schema({
    Marca: {
        type: Schema.Types.String,
        required: true,
    },
    Cor: {
        type: Schema.Types.String,
        required: true,
    },
    Modelo: {
        type: String,
        required: true,
    },
    Cilindrada: {
        type: Number,
        required: true,
    },
    Peso: {
        type: Number,
        required: true,
    },
});

const Moto = db.model('Moto', motoSchema);

module.exports = Moto;
