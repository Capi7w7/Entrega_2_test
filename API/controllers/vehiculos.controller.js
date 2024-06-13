const { vehiculos } = require("../vehiculos");
const { request, response } = require("express");

const getVehiculo = (req, res) => {
    const vehiculosArray = Array.from(vehiculos.values());
    return res.json({
        ok: true,
        status: 200,
        vehiculos: vehiculosArray
    });
};

const getVehiculoById = (req = request, res = response) => {
    let id = parseInt(req.params.id);
    let vehiculoBuscar = vehiculos.get(id);
    
    if (vehiculoBuscar) {
        return res.json({
            ok: true,
            status: 200,
            vehiculo: vehiculoBuscar
        });
    } else {
        return res.json({
            ok: false,
            status: 404,
            msg: "Vehículo no encontrado"
        });
    }
};

module.exports = {
    getVehiculo,
    getVehiculoById
};