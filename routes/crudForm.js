const express = require('express');
const app = express();
const newsRouter = require('./routers/news')

app.use(express.static('public'));
app.use('api',newsRouter) //localhost: 3000/api/create


app.listen(3000, ()=>{
    console.log('Port running on 3k')
});