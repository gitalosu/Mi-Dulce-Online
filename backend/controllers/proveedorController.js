const Proveedor = require('../models/Proveedor');

exports.buscarProveedores = async (req, res) => {

    try {
        const proveedores = await Proveedor.find();
        res.json(proveedores);

    } catch (error) {
        console.log(error);
        res.status(500).send('hubo un error con el servidor');
    }
}

exports.agregarProveedores = async (req, res) => {

    try {
        let proveedor;
        proveedor = new Proveedor(req.body);
        await proveedor.save();
        res.send(proveedor);
    } catch (error) {
        console.log(error);
        res.status(500).send('hubo un error con el servidor');
    }
}

exports.buscarProveedor = async (req, res) => {

    try {
        let proveedor = await Proveedor.findById(req.params.id);
        if (!proveedor) {
            res.status(404).json('no se puede encontrar el proveedor')
        }
        res.send(proveedor)
    } catch (error) {
        console.log(error);
        res.status(500).send('hubo un error con el servidor');
    }
}

exports.eliminarProveedor = async (req, res) => {

    try {
        let proveedor = await Proveedor.findById(req.params.id);

        if (!proveedor) {
            res.status(404).json({ msg: "no existe el proveedor" });
            return
        }
        await Proveedor.findOneAndRemove({ _id: req.params.id });
        res.json({ msg: "el proveedor fue eliminado" });
    } catch (error) {
        console.log(error);
        res.status(500).send('hubo error con el servidor');
    }
}

exports.modificarProveedor = async (req, res) => {
    try {
        const { empresa, representante, telefono, direccion, producto } = req.body;
        let proveedor = await Proveedor.findById(req.params.id);
        if (!proveedor) {
            res.status(404).json({ msg: 'el proveedor no existe' })
        }
        proveedor.empresa = empresa;
        proveedor.representante = representante;
        proveedor.telefono = telefono;
        proveedor.direccion = direccion;
        proveedor.producto = producto;

        proveedor = await Proveedor.findOneAndUpdate({ _id: req.params.id }, proveedor, { new: true })
        res.json(proveedor);

    } catch (error) {
        console.log(error)
        res.status(500).send("hay un error al recibir los datos");
    }
    
}
