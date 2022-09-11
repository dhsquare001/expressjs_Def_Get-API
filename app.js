const express = require("express");
const app = express();

app.get("/MERN/definitions/api/v1/expressjs", (req, res) => {
  res.send(
    "Express is a node js web application framework that provides broad features for building web and mobile applications. It is used to build a single page, multipage, and hybrid web application. It's a layer built on the top of the Node js that helps manage servers and routes."
  );
});

app.listen(4300, () => {
  console.log("This is a Get API for EXPRESS.JS definition.");
});
