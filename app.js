const express = require('express');
const app = express();
const handlebars = require('express-handlebars');
//
app.engine('handlebars',handlebars({defaultLayout: 'main'}))
app.set('view engine','handlebars')
//
app.use(express.static('public'))

app.get('/',(req,res)=>{
    res.render('index')
})

//Config Server
const PORT = 3003
app.listen(PORT,()=>{
    console.log('entrou')
})