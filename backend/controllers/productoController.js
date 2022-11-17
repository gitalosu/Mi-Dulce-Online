const Producto = require('../models/Producto');

exports.buscarProductos = async (req, res) => {

    try {
        const productos = await Producto.find();
        res.json(productos)

    } catch (error) {
        console.log(error);
        res.status(500).send('hubo error con el servidor');
    }
}

exports.agregarProductos = async (req, res) => {

    try {
        let producto;
        producto = new Producto(req.body);
        await producto.save();
        res.send(producto);
    } catch (error) {
        console.log(error);
        res.status(500).send('hubo error con el servidor');
    }
}

exports.buscarProducto = async (req, res) => {

    try {
        let producto = await Producto.findById(req.params.id);
        if (!producto) {
            res.status(404).json({ msg: "no se puede encontrar el producto" });
        }
        res.send(producto);
    } catch (error) {
        console.log(error);
        res.status(500).send('hubo error con el servidor');
    }
}

exports.eliminarProducto = async (req, res) => {

    try {
        let producto = await Producto.findById(req.params.id);

        if (!producto) {
            res.status(404).json({ msg: "no existe el producto" });
            return
        }
        await Producto.findOneAndRemove({ _id: req.params.id });
        res.json({ msg: "el producto fue eliminado" });
    } catch (error) {
        console.log(error);
        res.status(500).send('hubo error con el servidor');
    }
}

exports.modificarProducto = async (req, res) => {
    try {
        const { nombre, categoria, presentacion, cantidad, precioV } = req.body;
        let producto = await Producto.findById(req.params.id);
        if (!producto) {
            res.status(404).json({ msg: 'el producto no existe' })
        }
        producto.nombre = nombre;
        producto.categoria = categoria;
        producto.presentacion = presentacion;
        producto.cantidad = cantidad;
        producto.precioV = precioV;

        producto = await Producto.findOneAndUpdate({ _id: req.params.id }, producto, { new: true })
        res.json(producto);
    } catch (error) {
        console.log(error)
        res.status(500).send("hay un error al recibir los datos");
    }
}
