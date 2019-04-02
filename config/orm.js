const { connection } = require("./config/connection.js");

connection.connect(function (err) {
    if (err) {
        console.error("error connecting: " + err.stack);
        return;
    }

    console.log("connected as id " + connection.threadId);
});

function selectAll() {
    connection.query("SELECT id, burger_name, devoured FROM burgers;", (err, data) => {
        if (err) {
            return res.status(500).end();
        }

        console.log(data);
        // const devouredBurgers = 
        // res.render("index", { burgers: data });
    });
}