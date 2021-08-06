const express = require('express');
const app = express();
const port = process.env.PORT || 3003;
const bodyParser = require('body-parser');
const Database = require('./services/Database');
const ObraRoute = require('./routes/obras.routes')


//setando bodyParser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

// setando rotas



app.use("/", ObraRoute);



app.listen(port, ()=>{
    console.log(`App listening on ${port}`);
});