const path = require("path");

module.exports = (app) => {
    app.get("/", (req, res) => {
        res.sendFile(path.join(__dirname, "./Develop/public/index.html"));
    });

    app.get("/notes", (req, res) => {
        res.sendFile(path.join(__dirname, "./Develop/public/notes.html"));
    });

    app.get("/assets/css/styles.css", (req, res) => {
        res.sendFile(path.join(__dirname, "./Develop/public/assets/css/styles.css"));
    });

    app.get("/assets/js/index.js", (req, res) => {
        res.sendFile(path.join(__dirname, "./Develop/public/assets/js/index.js"));
    });
    app.get("*", (req, res) => {
        res.sendFile(path.join(__dirname, "./Develop/public/index.html"));
    });
};
