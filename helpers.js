// hide an element (e.g. closing a banner)
var hideElem = function(elem) {
	document.getElementById(elem).style.display = 'none';
};

// pseudo-href (e.g. apply hyperlink to a <td> element)
var navi = function(path) {
	location.href = path;
}

// vertical show/hide toggle via button
var displayToggleButton = function(toggleElem, toggleButton) {
	button = document.getElementById(toggleButton);
	elem = document.getElementById(toggleElem);
	state = elem.style.display;
	if (state === "none") {
		elem.style.display = "inline-block";
		button.innerHTML = "▲";
	} else {
		elem.style.display = "none";
		button.innerHTML = "▼";
	}
}

// display toggle for generic html element
var displayToggleElem = function(toggleElem) {
	elem = document.getElementById(toggleElem);
	state = elem.style.display;
	if (state === "none") {
		elem.style.display = "inline-block";
	} else {
		elem.style.display = "none";
	}
};

// initialize demos
document.getElementById('toggleDiv').style.display="none";