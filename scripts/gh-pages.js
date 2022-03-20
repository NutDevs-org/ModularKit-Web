const ghpages = require("gh-pages");

ghpages.publish("dist", () => console.log("Gh-Pages task success !"));
