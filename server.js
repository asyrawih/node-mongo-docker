const express = require("express");
const app = express();
const mongoose = require("mongoose");
const bodyParser = require('body-parser')
require("dotenv/config");

let UserRoute = require("./routes/User");

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended : true}))


app.get('/' , (req , res) => {
    res.send('halaman root').statusCode(200)
})

app.use("/user", UserRoute);

// Setting Koneksi
mongoose.connect(process.env.DB_URL, { useNewUrlParser: true , useUnifiedTopology : true }, (error) => {
  console.log("Terkoneksi Ke Database");
  if(error) throw error 
});

app.listen(process.env.PORT, () =>
  console.log(`Server berjalan di port : ${process.env.PORT}`)
);
