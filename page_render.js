/*
"title": "hideElem(elem)", 
"description": "hide an element (e.g. closing a banner)", 
"code": ``
*/

let demos = [
	{
		"title": "hideElem(elem)", 
		"description": "hide an element (e.g. closing a banner)", 
		"code": `
            <div id="banner">this is a sample banner that can be closed
                <button id="closeBannerButton" onclick="hideElem('banner')">close</button>
			</div>`
    },
	{
		"title": "navi(path)", 
		"description": "pseudo-href (apply hyperlink to an element)", 
		"code": `
            <br><span id='hrefSpan' onclick="navi('https://github.com')">[this is a span element that links to https://github.com]</span><br><br>`
    },
	{
		"title": "displayToggleButton(toggleElem, toggleButton)", 
		"description": "vertical show/hide toggle via button", 
		"code": `
			<div id="displayToggleButtonWrapper">
                <p>click the button to see more details</p>
                <div id="toggleDiv">
                    <p>hello worlds</p>
                </div>
                <button id="toggleDisplayButton" onclick="displayToggleButton('toggleDiv', 'toggleDisplayButton')">&#9660;</button>
            </div>`
    },
	{
		"title": "countDown(time, eventStart, eventEnd, timeDisplayElem)",
		"description": "countdown with start/end events and time display",
		"code": `
            <p>clicking the button will display a message after 5 seconds</p>
            <span id="cdTimeRem"></span>
            <p id="cdPrint"></p>
            <button id="cdButton" onclick="countDown(5, cdIniClear, cdPrintMsg, 'cdTimeRem')">start</button>`
    }
];

let websiteString = "";
demos.forEach(function(demo) {
    websiteString += 
        `<div class="helper_demo">
		  <p class="demo_title">`+demo.title+`</p>
		  <p class="demo_description">`+demo.description+`</p>
		  <div class="demo">`+demo.code+`</div>
	   </div>`;
});
document.getElementById("js_helpers").innerHTML = websiteString;

// initialize demos

// setup hideElem()
document.getElementById('toggleDiv').style.display="none";

// setup countDown()
var cdIniClear = function() {
    document.getElementById("cdButton").style.display = "none";
}
var cdPrintMsg = function() {
    document.getElementById("cdPrint").innerHTML = "hello worlds";
    document.getElementById("cdButton").style.display = "none";
    document.getElementById("cdTimeRem").style.display = "none";
}