
const app = require("express")();

app.get("/", (req, res) => {
    res.send({ data: "mountains" });
});

const mountains = [];

mountains.push({
    id: 0,
    name: "Mount Everest",
    height: 8849,
    countries: ["China", "Nepal"]
});

mountains.push({
    id: 1,
    name: "K2",
    height: 8611,
    countries: ["China", "Pakistan"]
});

mountains.push({
    id: 2,
    name: "Cho Oyu",
    height: 8188,
    countries: ["China", "Nepal"]
});

app.get("/mountains", (req, res) => {
    res.send(mountains);
});

app.get("/mountains/:id", (req, res) => {
    res.send(mountains.find(
        (mountain) => mountain.id == req.params.id
    ));
});

app.listen(8080);
