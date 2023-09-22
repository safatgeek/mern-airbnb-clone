const express = require("express");
const cors = require("cors");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken")
const { default: mongoose } = require("mongoose");
const User = require("./models/User");
const cookieParser = require("cookie-parser")
const bcryptjs = require("bcryptjs");
require("dotenv").config();
const app = express();

const bcryptSalt = bcrypt.genSaltSync(10);
const jwtSecret = "kfkaldgyufkau19"

app.use(express.json());
app.use(cookieParser())

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
        res.cookie("token", token ).json(userDocument);
      }))
     
    } else {
      res.status(422).json("Pass not oke !");
    }
  } else {
    res.status(404).json("Not found !");
  }
});


app.get('/profile', (req,res) => {
  const {token} = req.cookies
  if (token) {
    jwt.verify(token, jwtSecret, {}, async (err, userData) => {
      if (err) throw err
      const {name, email, _id} = await User.findById(userData.id)
      res.json({name,email, _id})
    })
  } else {
    res.json(null)
  }
})

app.post('/logout', (req, res) => {
  res.cookie("token", "").json(true)

})
app.listen(4000, () => console.log("server started"));
