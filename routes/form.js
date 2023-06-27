const express = require('express');
const fs = require('fs');
const app = express();
const mysql = require('mysql');

app.use(express.urlencoded({ extended: true}));
app.use(express.json());
// MYSQL DATABASE SETUP
var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "password",
    database: "mysql",
    port:3306
  });
//   Routes
con.connect(function(err) {
  if (err) throw err;
  console.log("Connected to MySQL database!");
});

app.post('/submit', (req, res) => {
  const formData = req.body;

  let sql = `INSERT INTO formHopeHack.contact (name, gender, email, tel, comment) VALUES (?, ?, ?, ?, ?)`;
  let values = [formData.fullname, formData.gender, formData.email, formData.tel, formData.comment];

  con.query(sql, values, function (err, result) {
    if (err) throw err;
    console.log("1 record inserted");
    res.send('Form Data Stored Successfully!');
  });
});

// Unreliable
// app.post('/submit', (req, res)=>{
//     const formData = req.body;
//     // console.log(formData);
//     const tel = `${formData.areaCode + formData.phone}`;
//     con.connect(function(err) {
//         if (err) throw err;
//         console.log("Connected!");
//         let sql = `INSERT INTO formHopeHack.contact (name, gender, email, tel, comment) VALUES ("${formData.fullname}", "${formData.gender}", "${formData.email}" , ${tel}, "${formData.comment}")`;    //
//         console.log(`this is sql ${sql}`);
//         con.query(sql, function (err, result) {
//           if (err) throw err;
//           console.log("1 record inserted");
//         });
//         res.send('Form Data Stored Successfully!');
//       }); 

//JSON INPUT 

    //fs.readFile('./contacts.json', (err, data) =>{
    //     if(err){
    //         console.error(err);
    //         res.status(500).send('Internal Server Error');
    //         return;
    //     }
    //     let contacts =[];
    //     if(data.length !== 0){
    //         contacts = JSON.parse(data);
    //     }
    //     console.log(contacts);
    //     contacts.push(formData);
    //     fs.writeFile('contacts.json', JSON.stringify(contacts, null,2),(err)=>{
    //         if(err){
    //             console.error(err);
    //             res.status(500).send('Internal Server Error');
    //             return;
    //         }
    //         res.send('Form Data Stored Successfully!');
    //     });
    // });
// });
app.listen(3000, () =>{
    console.log('Server up and running on port 3000');
});