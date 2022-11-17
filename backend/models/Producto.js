const mongoose = require('mongoose');

// hacemos el esquema del modelo de la base de datos

const productosShema = mongoose.Schema({

    nombre: {
        type: String,
        required: true
    },
    categoria: {
        type: String,
        required: true
    },
    presentacion: {
        type: String,
        required: true
    },
    cantidad: {
        type: Number,
        required: true
    },
    precioV: {
        type: Number,
        required: true
    }
}, { versionKey: false });


module.exports = mongoose.model('Producto', productosShema);



