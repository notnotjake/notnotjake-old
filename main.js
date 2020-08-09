function archivesScoping(scope) {
	var x = document.getElementById(scope);
	if (x.style.display != "block") {
		x.style.display = "block";
	} else {
		x.style.display = "none";
	}
	var y = "scope-select-" + scope;
	var y = document.getElementById(y);
	if (y.style.fontWeight === "bold") {
		y.style.fontWeight = "normal";
	} else {
		y.style.fontWeight = "bold";
	}
	var z = "scope-triangle-" + scope;
	var z = document.getElementById(z);
	if (z.style.display == "none") {
		z.style.display = "inline";
	} else {
		z.style.display = "none";
	}
}
function rssCopy() {
	navigator.clipboard.writeText("https://www.notnotjake.com/feed");
}