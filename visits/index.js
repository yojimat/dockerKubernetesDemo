const app = require("express")()
	,redis = require("redis")
	,client = redis.createClient({
		host: "redis-server",
		port: 6379
	});

client.set("visits", 0);

app.get("/", (req, res) => {

	client.get("visits", (err, visits) => {

		if(parseInt(visits) === 3) process.exit(1); 

		res.send("Numero de visitas é " + visits);
		client.set("visits", parseInt(visits) + 1);
	})
});

app.listen(8081, () => {

	console.log("Escutando na porta 4001");
})