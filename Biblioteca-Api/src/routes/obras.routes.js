const express = require('express')
const router = express.Router()
require('../models/Obra');
const mongoose = require('mongoose');
const Obra = mongoose.model("obras");
const Database = require('../services/Database')


router.post("/obras", async (req,res) =>{
    try{
    const form = req.body
    const novaObra = await new Obra(form).save()
    res.json(novaObra)
    }catch(error){

        res.json({error: true, message: error})

    }


})

router.get("/obras/", async (req, res)=>{
    try{
    const Obras = await Obra.find({}).then((obras)=>{
        res.json(obras)
    })
    }catch(err){

        res.json({error: true, message: err})

    }
})
router.get("/obras/:id", async (req,res)=>{
    try{
    const id = req.params.id
    const obra = await Obra.findById(id)
    res.json(obra)
    }catch(err){

        res.json({error: true, message: err})

    }


})

router.put("/obras/:id", async (req,res) =>{
   try{ 
    const id = req.params.id
    const nova_obra = req.body

    const obra = await Obra.findByIdAndUpdate(id, nova_obra)
    res.json({message: "Obra mudada com sucesso"})
    
    }catch(err){

    res.json({error: true, message: err})

   }


})

router.delete("/obras/:id", async(req,res)=>{
try{
    const id = req.params.id

    const obra = await Obra.findByIdAndDelete(id)

    res.json({message: "Obra deletada"})
}catch(err){

    res.json({error: true, message: err})

}

})








module.exports = router