const express = require("express");
const app = express();

app.get("/", (req, res) => {
    res.send("hello kirill");
});
app.listen(3001, () => {
    console.log("listen to 3001")
});