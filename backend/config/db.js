const mongoose = require('mongoose');
require('dotenv').config();

const conectarBD = () => {

    // connection con mongodb
    mongoose
        .connect(process.env.MONGO_URL)
        .then(() => console.log("esta conectada con mongodb"))
        .catch((err) => console.error(err));
}

module.exports = conectarBD;