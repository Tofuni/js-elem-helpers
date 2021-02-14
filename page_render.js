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
            <p>clicking the button will display a message after several seconds</p>
            <span id="cdTimeRem"></span>
            <p id="cdPrint"></p>
            <button id="cdButton" onclick="countDown(5, cdIniClear, cdPrintMsg, 'cdTimeRem')">start</button>`
    },
    {
		"title": "getRandomItem(array)",
		"description": "get random item from array",
		"code": `
			<p>test array: [1,2,3,4,12.34,'apple','banana','cherry']</p>
            <p id='testRandomItem'></p>
			<button onclick="document.getElementById('testRandomItem').innerHTML=getRandomItem(testArray)">get random item from test array</button>
			`
	},
	{
		"title": "getValuesByClass(className)",
		"description": "get values by classname",
		"code": `
			<input class='testInput' type='text'></input>
			<input class='testInput' type='text'></input>
			<input class='testInput' type='text'></input>
			<input class='testInput' type='text'></input>
            <p>values: <span id='testInputVals'></span></p>
			<button id="cdButton" onclick="(document.getElementById('testInputVals').innerHTML = getValuesByClass('testInput'))">get values of class 'testInput'</button>`
    },
	{
		"title": "appendHTMLToElem(htmlString, elementId)",
		"description": "append HTML string to element",
		"code": `
			<div id="addHTMLDiv"><p>sample text</div>
			<button onclick="appendHTMLToElem('<p>more sample text</p>', 'addHTMLDiv')">append HTML</button>
			`
	},
	{
		"title": "removeLastElemInClassName(className)",
		"description": "remove last elem by class name",
		"code": `
			<input class="testInput2"></input><br>
			<input class="testInput2"></input><br>
			<input class="testInput2"></input><br>
			<input class="testInput2"></input><br>
			<input class="testInput2"></input><br>
			<button onclick="removeLastElemByClassName('testInput2')">remove last  element of class "testInput2"</button>
			`
	},
	{
		"title": "getDateDiff(date)",
		"description": "get the difference in days between now and a Date object",
		"code": `
			<p id="testDateDiff"></p>
			<button onclick="document.getElementById('testDateDiff').innerHTML = getDateDiff(d)">get the day difference between now and "2100-02-15T12:00:00"<br>(Feb 15, 2100 at 12pm)</button>
			`
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

// -------------------------------------------------------
// ------------------ initialize demos -------------------
// -------------------------------------------------------

// setup hideElem()
document.getElementById('toggleDiv').style.display="none";

// setup countDown()
let cdIniClear = function() {
    document.getElementById("cdButton").style.display = "none";
}
let cdPrintMsg = function() {
    document.getElementById("cdPrint").innerHTML = "hello worlds";
    document.getElementById("cdButton").style.display = "none";
    document.getElementById("cdTimeRem").style.display = "none";
}

// setup getRandomItem
let testArray = [1,2,3,4,12.34,'apple','banana','cherry'];

// setup getDateDiff
let d = new Date('2100-02-15T12:00:00');