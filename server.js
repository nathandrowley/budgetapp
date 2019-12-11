var express = require("express");

var app = express();

app.use(express.static("public"));

app.set("views", "views");
app.set("view engine", "ejs");

// app.get("/", function(req, res) {
//    console.log("Received a request for /");

//    res.write("This is the root.");
//    res.end();
// });

app.get("/home.html", function(req, res) {
   // Controller
   console.log("Received a request for the home page");
   // var name = getCurrentLoggedInUserAccount();
   // var emailAddress = "john@email.com";

   // var params = {username: name, email: emailAddress};

   // res.render("home", params);
});

app.get("/test.html", function(req, res) {
   // Controller
   console.log("Received a request for the test page");
   // var name = getCurrentLoggedInUserAccount();
   // var emailAddress = "john@email.com";

   // var params = {username: name, email: emailAddress};

   // res.render("home", params);
});

const port = process.env.PORT || 5000;
// listen for port
app.listen(port, () => {
  console.log(`Listening on http://localhost:${port}/`);
});
// Model

// function getCurrentLoggedInUserAccount() {
//    // access the database
//    // make sure they have permission to be on the site

//    return "John";
// }
