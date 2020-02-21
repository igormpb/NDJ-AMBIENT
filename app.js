require('dotenv').config();
const express = require('express');
const app = express();
const handlebars = require('express-handlebars');
const nodemailer = require('nodemailer');
const bodyParser = require('body-parser')

//bodyparser
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
//nodemailer
const transporter = nodemailer.createTransport({
    service:"gmail",
    auth:{
        user:process.env.email,
        pass:process.env.pass,
    }
})


//template
app.engine('handlebars',handlebars({defaultLayout: 'main'}))
app.set('view engine','handlebars')
//
app.use(express.static('public'))

app.get('/',(req,res)=>{
    res.render('index')
})

app.post('/',(req,res)=>{
    const mailOptions = {
        from: process.env.email,
        to:req.body.email,
        subject:'Venha Participar worldAmbit',
        text:`entre nesse link para participar do nosso grupo do
        discord: https://discord.gg/7UFHVPA 
        em breve teremos muito mais....`
        
    };
    transporter.sendMail(mailOptions, function(error, info){
        if (error) {
          console.log(error);
        } else {
            res.redirect('/')
        }
      });
    
})

//Config Server
const PORT = process.env.PORT || 3003
app.listen(PORT,()=>{
    console.log('entrou')
})