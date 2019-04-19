const express = require("express");
const mongoose = require("mongoose");

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

mongoose.connect("mongodb://localhost/jackson", { useNewUrlParser: true })
  .then(()=> console.log("connected to mongo"))
  .catch((err) => console.log(err));

app.listen(8000, ()=> {
  console.log("server live at http://localhost:8000");
})