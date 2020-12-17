function archivesScoping(scope) {
	var x = document.getElementsByClassName(scope);
	
	for (i = 0, l = x.length; i < l; i++) {
		if (x[i].style.display != "block") {
			x[i].style.display = "block";
		} else {
			x[i].style.display = "none";
		}
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
	if (z.style.display != "inline") {
		z.style.display = "inline";
	} else {
		z.style.display = "none";
	}
}
function rssHide() {
	var f = document.getElementById("rssHide");
	if (f.style.display != "inline") {
		f.style.display = "inline";
	} else {
		f.style.display = "none";
	}
	var r = "rss-btn";
	var r = document.getElementById(r);
	if (r.style.fontWeight === "bold") {
		r.style.fontWeight = "normal";
	} else {
		r.style.fontWeight = "bold";
	}
}
function rssCopy() {
	navigator.clipboard.writeText("https://www.notnotjake.com/feed");
}