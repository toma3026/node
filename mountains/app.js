
const app = require("express")();

app.get("/", (req, res) => {
    res.send({ data: "test123" });
});

app.listen(8080);
