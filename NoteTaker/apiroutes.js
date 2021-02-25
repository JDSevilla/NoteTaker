const fs = require('fs');

module.exports = (app) => {
    app.get("/api/notes", (req, res) => {
        let data = JSON.parse(fs.readFileSync("./Develop/db/db.json"));
        let newData = data.map((datum, i) => {
            datum.id = 1;
            return datum;
        });
        res.send(newData);
    });

    app.post("/api/notes", (req, res) => {
        let data = JSON.parse(fs.readFileSync("./Develop/db/db.json"));
        data.push(req.body);
        fs.writeFileSync("./Develop/db/db.json", JSON.stringify(data), (err) =>
            err ? console.log(err) : console.log("success")
        );
        let newData = data.map((datum, i) => {
            datum.id = i;
            return datum;
        });
        res.send(newData);
    });

    app.delete("/api/notes/:id", (req, res) => {
        console.log(JSON.stringify(req.params.id));
        let data = JSON.parse(fs.readFileSync("./Develop/db/db.json"));
        data.splice(req.params.id, 1);
        fs.writeFileSync("./Develop/db/db.json", JSON.stringify(data), (err) =>
            err ? console.log(err) : console.log("success")
        );
        let newData = data.map((datum, i) => {
            datum.id = i;
            return datum;
        });
        res.send(newData);
    });
};
