const express = require("express"); 
const nodemailer = require("nodemailer"); 
const multiparty = require("multiparty"); 
require("dotenv").config(); 

const app = express(); 

app.route("/").get(function (req, res) {
    res.sendFile(process.cwd() + "index.html")
}); 

const PORT = process.env.PORT || 5000; 
app.listen(PORT, () => {
    console.log('Server starting on port ${PORT}...'); 
}); 

const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com", 
    port: 587,
    auth: {
      user: "7470101@isd535.org",
      pass: "Soccer.1",
    },
  });
  
  transporter.verify(function (error, success) {
      if(error) {
          console.log(error); 
      } else {
          console.log("server is ready to take our messages"); 
      }
  }); 

  