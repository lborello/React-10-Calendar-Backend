const { Schema, model } = require('mongoose');

const ElementoSchema = Schema({

    elemento: {
        type: String,
        required: true
    },
    codigo: {
        type: String,        
    }
    
    // user: {
    //     type: Schema.Types.ObjectId,
    //     ref: 'Usuario',
    //     required: true
    // }

});

ElementoSchema.method('toJSON', function() {
    const { __v, _id, ...object } = this.toObject();
    object.id = _id;
    return object;
});



module.exports = model('Elemento', ElementoSchema );