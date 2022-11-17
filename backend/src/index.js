const express = require('express');
const conectarBD = require('../config/db');
const cors = require('cors');


const app = express();
const port = process.env.PORT || 7000;

//enlazamos con la base de datos

conectarBD();
app.use(cors());

app.use(express.json());
app.use('/api/productos', require('../routes/producto'));
app.use('/api/proveedores', require('../routes/proveedor'));

app.get('/', (req, res) => {
    res.send('Bienvenido ya esta conectado el servidor');
});

app.listen(port, () => console.log('el servidor esta conectado en el puerto', port));
