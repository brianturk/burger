module.exports = (app) => {

    // Create new current reservation - takes in JSON input
    app.post("/api/addBurger", (req, res) => {
        console.log("add");
        res.json(req.body);
    });

}