const vehiculosArray = [
    { id: 1, marca: 'Toyota', modelo: 'Corolla', year: 2020 },
    { id: 2, marca: 'Honda', modelo: 'Civic', year: 2019 },
    { id: 3, marca: 'Ford', modelo: 'Focus', year: 2018 }
];

const vehiculosMap = new Map(vehiculosArray.map(vehiculo => [vehiculo.id, vehiculo]));

module.exports = { vehiculos: vehiculosMap };