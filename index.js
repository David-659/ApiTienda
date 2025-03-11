const exp = require('express')
require('dotenv').config()
const enrutador = require('./routes/router')

const app = exp()

app.set('view engine','ejs')

//app.get();

app.use('/v1',enrutador)

app.use(exp.urlencoded({ extended: false}));
app.use(exp.json());

app.listen(process.env.PORT, ()=>{
    console.log(`Servidor escuchando en el puerto ${process.env.PORT}`)
});
