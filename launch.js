const express = require("express");
const port = 25565;
const app = express();

var launch = async function launch(
  htmltext,
  graphon,
  graphtext,
  root,
  secroot
) {
  app.set("view engine", "ejs");
  app.listen(port, () => console.log(`Answer at http://localhost:25565/home`));
  await app.get("/home", (request, response) => {
    return response.render("index.ejs", {
      result: htmltext,
      graph: graphon,
      graphtext: graphtext,
      root: root,
      secroot: secroot,
    });
  });
};

module.exports.launch = launch;
