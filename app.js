console.log("yeet");
const PORT = 5500;
const axios = require("axios");
const cheerio = require("cheerio");
const express = require("express");

const app = express();

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
