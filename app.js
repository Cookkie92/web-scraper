console.log("hjello");
const PORT = 8000;
const axios = require("axios");
const cheerio = require("cheerio");
const express = require("express");

const app = express();

const hello = 2;

const url = "https://www.noroff.no/";

axios(url)
  .then((response) => {
    const html = response.data;
    //   console.log(html);
    const $ = cheerio.load(html);

    const articles = [];

    $(".col-md-3", html).each(function () {
      const title = $(this).text();
      const href = $(this).find("a").attr("href");
      articles.push({
        title,
        href,
      });
    });
    console.log(articles);
  })
  .catch((err) => console.log(err));

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
