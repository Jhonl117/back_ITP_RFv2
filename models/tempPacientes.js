const { Schema, model } = require('mongoose');

const tempPacientesSchema = Schema({
    documento: {
        type: String,
        required: [true, 'El Documento es obligatorio']
    },
    nombres: {
        type: String,
        required: [true, 'Los Nombres son obligatorios']
    },
    apellidos: {
        type: String,
        required: [true, 'Los Apellidos son obligatorios']
    },
    fecha: {
        type: Date,
        required: [true, 'La Fecha es obligatoria']
    },
    hora: {
        type: String,
        required: [true, 'La Hora es obligatoria']
    },
    temperatura: {
        type: Number,
        required: [true, 'La Temperatura es obligatoria']
    }
});

module.exports = model('TempPacientes', tempPacientesSchema);