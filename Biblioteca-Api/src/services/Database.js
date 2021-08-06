
const mongoose = require('mongoose')

mongoose.connect('Database', {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log("Conectado ao Banco de Dados")
}).catch((erro) => {
    console.log(erro)
})