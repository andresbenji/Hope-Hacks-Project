const express = require('express');
const fs = require('fs');
const app = express();

app.use(express.urlencoded({ extended: true}));
app.use(express.json());

app.post('/submit', (req, res)=>{
    const formData = req.body;
    fs.readFile('contact.json')
})