const express = require("express");
const mongoose = require("mongoose");
const Router = require("./routes")
const cors = require('cors')

const app = express();

app.use(cors())

app.use(express.json());
mongoose.connect('mongodb://localhost:27017/muskan_db',
  {
    useNewUrlParser: true,
    useUnifiedTopology: true
  }
);
app.use(Router);

app.listen(3000, () => {
  console.log("Server is running at port 3000");
});