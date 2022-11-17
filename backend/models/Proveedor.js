const mongoose = require('mongoose');

// hacemos el esquema del modelo de la base de datos

const proveedoresShema = mongoose.Schema({

    empresa: {
        type: String,
        required: true
    },
    representante: {
        type: String,
        required: true
    },
    telefono: {
        type: String,
        required: true
    },
    direccion: {
        type: String,
        required: true
    },
    producto: {
        type: String,
        required: true
    }
}, { versionKey: false });

module.exports = mongoose.model('Proveedor', proveedoresShema);

