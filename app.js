const express = require("express")
const mongoose = require('mongoose')
const cors = require("cors");
const dcaRoute = require('./routes/dcaRoute')
const pasRoute = require('./routes/pasRoute')
const pre_ecampsiaRoute = require('./routes/pre-eclampsiaRoute')
const userRoute = require('./routes/userRoute')
require('dotenv').config();

const app = express()

app.use(cors())
app.use(express.json())

app.get("/", function (req, res) {
  res.send("FCS");
});

app.use('/api/pas',pasRoute)
app.use('/api/dca',dcaRoute)
app.use('/api/pre',pre_ecampsiaRoute)
app.use('/api/user',userRoute)


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
