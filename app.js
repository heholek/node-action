var nude = require("./nude");
var fs = require("fs");
var path = require("path");

var directory = __dirname;
//./images/unnamed.jpg
file = process.argv[2];
// console.log("file", directory);
nude.scan(directory + "/" + file, function(res) {
  console.log(file, "Contains nudity", res);
});
