const express = require("express");
const cors = require("cors");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken")
const { default: mongoose } = require("mongoose");
const User = require("./models/User");
const bcryptjs = require("bcryptjs");
require("dotenv").config();
const app = express();

const bcryptSalt = bcrypt.genSaltSync(10);
const jwtSecret = "kfkaldgyufkau19"

app.use(express.json());
app.use(
  cors({
    credentials: true,
    origin: "http://localhost:5173",
  })
);

mongoose.connect(process.env.MONGO_URL);

app.get("/test", (req, res) => {
  res.json("test ok");
});

app.post("/register", async (req, res) => {
  const { name, email, password } = req.body;

  try {
    const userDocument = await User.create({
      name,
      email,
      password: bcrypt.hashSync(password, bcryptSalt),
    });

    res.json(userDocument);
  } catch (e) {
    res.status(422).json(e);
  }
});

app.post("/login", async (req, res) => {
  const { email, password } = req.body;
  const userDocument = await User.findOne({ email });
  if (userDocument) {
    const passwordOk = bcrypt.compareSync(password, userDocument.password);
    if (passwordOk) {
      jwt.sign({email: userDocument.email, id: userDocument.id}, jwtSecret, {}, ((err, token) => {
        if(err) throw err
        res.cookie("token", token ).json("Pass oke !");
      }))
     
    } else {
      res.status(422).json("Pass not oke !");
    }
  } else {
    res.json("Not found !");
  }
});

app.listen(4000, () => console.log("server started"));
