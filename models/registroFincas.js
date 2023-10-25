const { Schema, model } = require('mongoose');

const RegistrarFincaSchema = Schema({
    propietario: {
        type: String,
        required: [true, 'El nombre del Propietario es obligatorio']
    },
    nombre: {
        type: String,
        required: [true, 'El Nombre es obligatorio']
    },
    area: {
        type: String,
        required: [true, 'El Área es obligatoria']
    },
    valor: {
        type: Number,
        required: [true, 'El Valor es obligatorio']
    },
    cultivos: {
        type: String,
        required: [true, 'El cultivo es obligatorio']
    },
    municipio: {
        type: String,
        required: [true, 'El municipio es obligatorio']
    }
});

module.exports = model('RegistrarFinca', RegistrarFincaSchema);