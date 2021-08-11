const express = require('express');
const app = express();
const notFoundHandler = require('./error-handlers/404');
const errorHandler = require('./error-handlers/500');
const person = require('./middleware/validator')
const logger = require('./middleware/logger')

app.use(express.json()); 
app.use(logger);

function start(port) {
    app.listen(port, ()=> console.log(`will run on ${port}`))
}
app.get('/', (req, res)=> {
    res.send('Home route')
});
app.post('/bad', (req,res)=> {
    let num = 1;
    num.forEach(item=> 
    console.log(item));
    res.send('sorry bad req !!!!! ');
})

app.get('/data', (req, res)=> {
    res.json({
       id: 1, 
       name: "Samah", 
    });
});
app.get('/person',person,(req,res)=>{
    res.json({
        message:'person route response',
        name:req.personName
        
    })
});


app.use('*', notFoundHandler);
app.use(errorHandler);


module.exports = {
    app: app,
    start: start
}