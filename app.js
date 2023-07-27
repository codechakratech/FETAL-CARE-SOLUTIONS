const express = require("express");
const app = express();
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();
const Pas = require("./Models/Pas");
app.use(cors());
app.use(express.json());

app.get("/", function (req, res) {
  res.send("FCS");
});

app.post("/api/pas", async (req, res) => {
  try {

    const data = await Pas.create(req.body);
    res.json(data);
  } catch (e) {
    res.status(400).send(e.message);
  }
});

app.get("/api/pas", async (req, res) => {
  try {
    const data = await Pas.find();
    return res.json(data);
  } catch (e) {
    return res.status(400).send(e.message);
  }
});

app.get("/api/pas/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const data = await Pas.findById(id);
    res.json(data);
  } catch (e) {
    res.status(400).send(e.message);
  }
});

app.delete("/api/pas/:id", async (req, res) => {
  try {
    const id = req.params.id;
   const data = await Pas.findByIdAndDelete(id);
   res.json(data);
  } catch (e) {
    res.status(400).send(e.message);
  }
});

app.put("/api/pas/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const data = await Pas.findByIdAndUpdate(id, req.body, { new: true });
    res.json(data);
  } catch (e) {
    res.status(400).send(e.message);
  }
});

app.listen(process.env.PORT);

async function main() {
    try {
        const res = await mongoose.connect(process.env.DB);
        const data = await res.default;
        console.log(data.STATES.connected);
    }
    catch (e) {
        console.log(e.message);
    }
}
main();
