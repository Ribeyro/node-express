const{Schema, model}= require('mongoose');

//define lo que quiero guardar dentro de la base de datos
const NoteSchema = new Schema({
    title: {
        type:String,
        required: true
    },
    desscription:{
        type:String,
        required: true
    }
},{
    timestamps:true
})


//modelo creado a partir de l esquema NoteSchema y exportamos para poder utilizarlo en otras partes del codigo

module.exports = model('Note', NoteSchema);