const express = require('express');
const cors = require('cors'); 
const { getVehiculo, getVehiculoById } = require('./controllers/vehiculos.controller');
const app = express();
const port = 8001;

app.use(cors());

app.get("/", getVehiculo);

app.get("/:id", getVehiculoById);


app.listen(port, () => {
    console.log(`App corriendo en http://localhost:${port}`);
});