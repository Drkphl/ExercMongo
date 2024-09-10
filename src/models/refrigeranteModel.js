const db = require('../db.js');

const Schema = db.Schema;

const refriSchema = new Schema({
    porcentSuco: {
        type: Schema.Types.Number,
        required: true,
    },
    kcal200ml: {
        type: Number,
        required: true,
    },
    sabor: {
        type: Schema.Types.String,
        required: true,
    },
    TamanhoMl: {
        type: Number,
        required: true,
    },
});

const Refrigerante = db.model('Refrigerante', refriSchema);

module.exports = Refrigerante;
