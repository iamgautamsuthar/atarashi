const express = require("express");

const { connectMongoDB } = require("./connection");

const app = express();
const PORT = 3000;

app.get("/", (req, res) => {
	res.send("Hello World!");
});

connectMongoDB("URL");

app.listen(PORT, () => {
	console.log(`Server running on port ${PORT}`);
});
