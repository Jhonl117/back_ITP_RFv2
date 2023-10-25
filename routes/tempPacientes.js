const { Router } = require('express') //Desestructuración. Extraer un atributo de un objeto.

const route = Router()

//Importar métodos del controlador
const { tempturaPacientesGet, tempturaPacientesPost, tempturaPacientesPut, tempturaPacientesDelete } = require('../controllers/tempPacientes')

route.get('/', tempturaPacientesGet)

route.post('/', tempturaPacientesPost)

route.put('/', tempturaPacientesPut)

route.delete('/', tempturaPacientesDelete)

module.exports = route