const { Router } = require('express');
const { check } = require('express-validator');

const { validarCampos } = require('../middlewares/validar-campos');
const { validarJWT } = require('../middlewares/validar-jwt');
const { getElementos, crearElemento, actualizarElemento, eliminarElemento } = require('../controllers/elementos');

const router = Router();

// Todas tienes que pasar por la validación del JWT
//router.use( validarJWT );


// Obtener elementos 
router.get('/', getElementos );

// Crear un nuevo elemento
router.post('/',crearElemento);
//     '/',
//     // [
//     //     check('elemento','El elemento es obligatorio').not().isEmpty(),
        
//     //     validarCampos
//     // ]
//     ,
//     crearElemento 
// );

// // Actualizar Elemento
router.put('/:id', actualizarElemento);
// router.put(
//     '/:id', 
//     [
//         check('elemento','El elemento es obligatorio').not().isEmpty(),
//         validarCampos
//     ],
//     actualizarElemento 
// );

// Borrar elemento
router.delete('/:id', eliminarElemento );

module.exports = router;