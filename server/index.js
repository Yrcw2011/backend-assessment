const express = require("express");
const cors = require("cors");
const app = express();

app.use(cors());

app.use(express.json());

const { getCompliment } = require('./controller')

app.get("/api/compliment", getCompliment);




app.listen(4004, () => console.log("Server running on 4004"));
