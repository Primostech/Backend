const express = require('express')
const mongoose = require('mongoose')
const routes=require('./routes')
const app = express()


mongoose.connect('mongodb+srv://Mctech-db:Snakemkx9808@cluster0.xsl6q.mongodb.net/myFirstDatabase?retryWrites=true&w=majority',{
    useNewUrlParser: true,
    useUnifiedTopology: true
  

})

app.use(express.json())
app.use(routes)
app.listen(3000)
console.log('servidor rodando em : http://localhost:3000')