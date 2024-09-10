const Schema = require('mongoose');
const db = require('../db.js');

const Schema = db.Schema;

const canetaSchema = new Schema({
    cor: {
        type: Schema.Types.String,
        required: true,
    },
    ehBic: {
        type: Boolean,
        required: true,
    },
});

module.exports = canetaSchema;
