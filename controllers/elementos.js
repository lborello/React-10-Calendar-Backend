const { response } = require('express');
const Elemento = require('../models/Elemento');

const getElementos = async( req, res = response ) => {
    const elementos = await Elemento.find();
    console.log (elementos);
    res.json({
        ok: true,
        listar: 'lista de elementos 20210427 04:27' ,
        elementos 
    });
}

const crearElemento = async ( req, res = response ) => {

    // res.json({
    //     ok: true,
    //     elemento: "crearElemento"
    // });

    const elemento = new Elemento( req.body );
    // const elemento = new Elemento({elemento: "dddd" , codigo: "ddd" });
   
    try {
        // elemento.user = req.uid;
        const elementoGuardado = await elemento.save();
        res.json({
            ok: true,
            elemento: elementoGuardado
        })
    } catch (error) {
        console.log(error)
        res.status(500).json({
            ok: false,
            msg: 'Hable con el administrador'
        });
    }
}

const actualizarElemento = async( req, res = response ) => {

    res.json({
        ok: true,
        elemento: "actualizarElemento"
    });
    
    // const elementoId = req.params.id;
    // const uid = req.uid;

    // try {

    //     const elemento = await Elemento.findById( elementoId );

    //     if ( !elemento ) {
    //         return res.status(404).json({
    //             ok: false,
    //             msg: 'Elemento no existe por ese id'
    //         });
    //     }

    //     if ( elemento.user.toString() !== uid ) {
    //         return res.status(401).json({
    //             ok: false,
    //             msg: 'No tiene privilegio de editar este elemento'
    //         });
    //     }

    //     const nuevoElemento = {
    //         ...req.body,
    //         user: uid
    //     }

    //     const elementoActualizado = await Elemento.findByIdAndUpdate( elementoId, nuevoElemento, { new: true } );

    //     res.json({
    //         ok: true,
    //         elemento: elementoActualizado
    //     });

        
    // } catch (error) {
    //     console.log(error);
    //     res.status(500).json({
    //         ok: false,
    //         msg: 'Hable con el administrador'
    //     });
    // }

}

const eliminarElemento = async( req, res = response ) => {

    // res.json({
    //     ok: true,
    //     elemento: "eliminarElemento",
    //     id :   req.params.id
    // });
   
    const elementoId = req.params.id;
    const uid = req.uid;

    try {
console.log(elementoId);
        const elemento = await Elemento.findById( elementoId );

        if ( !elemento ) { 
            return res.status(404).json({
                ok: false,
                msg: 'Elemento no existe por ese id'
            });
        }

    //     if ( elemento.user.toString() !== uid ) {
    //         return res.status(401).json({
    //             ok: false,
    //             msg: 'No tiene privilegio de eliminar este elemento'
    //         });
    //     }


        await Elemento.findByIdAndDelete( elementoId );

        res.json({ ok: true });

        
    } catch (error) {
        console.log(error);
        res.status(500).json({
            ok: false,
            msg: 'Hable con el administrador'
        });
    }

}


module.exports = {
    getElementos,
    crearElemento,
    actualizarElemento,
    eliminarElemento
}