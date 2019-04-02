const express = require("express");
const exphbs = require("express-handlebars");
const {connection} = require("./config/connection.js");

const app = express();
const PORT = process.env.PORT || 8080;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static('app/public'));  //so you can put a javascript file in you public folder
app.set('views', 'app/views');


app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");


require("./app/routes/apiRoutes")(app);
require("./app/routes/htmlRoutes")(app);

app.listen(PORT, () => {
    console.log("App listening on PORT " + PORT);
});