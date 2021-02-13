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
		button.innerHTML = "&#9650;";
	} else {
		elem.style.display = "none";
		button.innerHTML = "&#9660;";
	}
}

// countdown with start and end events
var countDown = function(time, eventStart, eventEnd, timeDisplayElem) {
    eventStart();
    document.getElementById(timeDisplayElem).innerHTML = time;
    let cd = setInterval(function() {
        time -= 1;
		document.getElementById(timeDisplayElem).innerHTML = time;
        if (time <= 0) {
            eventEnd();
            clearInterval(cd);
        }
	}, 1000);
}
