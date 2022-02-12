const ghpages = require('gh-pages');

ghpages.publish("build", () => console.log("Gh-Pages task success !"));
