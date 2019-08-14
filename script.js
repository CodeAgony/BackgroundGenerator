var css = document.getElementById("cssOutput");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");
var cssOutput = css.value;
var button = document.getElementById("copyButton");
var direction = document.getElementById("direction");

function setGradient() {
	body.style.background =
	"linear-gradient(to " + direction.value + " ,"
	+ color1.value
	+ ", "
	+ color2.value
	+ ")";

	css.value = body.style.background + ";";
}

function copy() {
	css.select();
	document.execCommand("copy");
}

button.addEventListener("click", copy);
color1.addEventListener("input", setGradient);
color2.addEventListener("input", setGradient);
direction.addEventListener("input", setGradient);