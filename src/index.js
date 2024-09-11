const express = require('express');
const app = express();
const port = 5000;

const aeroporto_router = require('./routers/aeroportoRoute.js');
const caneta_router = require('./routers/aeroportoRoute.js');
const moto_router = require('./routers/motoRoute.js');
const refrigerante_router = require('./routers/refrigeranteRoute.js');

app.use(express.json());

app.use('/aeroporto', aeroporto_router);
app.use('/caneta', caneta_router);
app.use('/moto', moto_router);
app.use('/refrigerante', refrigerante_router);

app.listen(port, () => console.log('Servidor escutando na porta ' + port));
