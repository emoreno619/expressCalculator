var express = require('express')

app = express();

app.set("view engine", "ejs");
app.use("/styles",express.static(__dirname + "/styles"));

app.get("/math/:operator/:num1/:num2", function (req, res) {
	var operator = req.params.operator;
	var num1 = Number(req.params.num1);
	var num2 = Number(req.params.num2);
	var result = 0;

	if (operator == "add"){
		result = num1 + num2;
	} else if (operator == "sub"){
		result = num1 - num2;
	} else if (operator == "mult"){
		result = num1 * num2;
	} else if (operator == "div"){
		result = num1 / num2;
	} else {
		result = "Operator not supported.";
	}

	res.render("mathEJSfile", {resultEJSkey:result})
})

app.listen(3000, function (){
	console.log("Server starting on port 3000");
})