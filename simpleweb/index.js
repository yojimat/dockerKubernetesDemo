const app = require("express")();

app.get("/",(req, res) => {

	res.send("Hi there again");
});

app.listen(8080, () => {

	console.log("Escutando na porta 8080");
});