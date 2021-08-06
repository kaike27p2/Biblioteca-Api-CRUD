const mongoose = require('mongoose');

const Schema = mongoose.Schema

const Obra = new Schema({
    titulo: {
        type: String,
     
    },
    editora:{
        type: String,
     
    },
    foto: {
        type:  String,
        
    },
    autores: {
        type: [String],
        
    }
})

mongoose.model("obras", Obra)