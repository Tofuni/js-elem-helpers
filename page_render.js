let demos = [
	{
		"id": "hideElem",
		"title": "hideElem(elem)", 
		"description": "hide an element (e.g. closing a banner)", 
		"code": `
            <div id="banner">this is a sample banner that can be closed
                <button id="closeBannerButton" onclick="hideElem(elemSelector('#banner'))">close</button>
			</div>`
    },
	{
		"id": "navi",
		"title": "navi(path)", 
		"description": "pseudo-href (apply hyperlink to an element)", 
		"code": `
            <br><span id='hrefSpan' onclick="navi('https://github.com')">[this is a span element that links to https://github.com]</span><br><br>`
    },
	{
		"id": "displayToggleButton",
		"title": "displayToggleButton(toggleElem, toggleButton)", 
		"description": "vertical show/hide toggle via button", 
		"code": `
			<div id="displayToggleButtonWrapper">
                <p>click the button to see more details</p>
                <div id="toggleDiv">
                    <p>hello worlds</p>
                </div>
                <button id="toggleDisplayButton" onclick="displayToggleButton(elemSelector('#toggleDiv'), elemSelector('#toggleDisplayButton'))">&#9660;</button>
            </div>`
    },
	{
		"id": "countDown",
		"title": "countDown(time, eventStart, eventEnd, timeDisplayElem)",
		"description": "countdown with start/end events and time display",
		"code": `
            <p>clicking the button will display a message after several seconds</p>
            <span id="cdTimeRem"></span>
            <p id="cdPrint"></p>
            <button id="cdButton" onclick="countDown(5, cdIniClear, cdPrintMsg, elemSelector('#cdTimeRem'))">start</button>`
    },
    {
		"id": "getRandomItem",
		"title": "getRandomItem(array)",
		"description": "get random item from array",
		"code": `
			<p>test array: [1,2,3,4,12.34,'apple','banana','cherry']</p>
            <p id='testRandomItem'></p>
			<button onclick="elemSelector('#testRandomItem').innerHTML=getRandomItem(testArray)">get random item from test array</button>
			`
	},
	{
		"id": "getValuesInElems",
		"title": "getValuesInElems(elems)",
		"description": "get values in elements",
		"code": `
			<input class='testInput' type='text'></input>
			<input class='testInput' type='text'></input>
			<input class='testInput' type='text'></input>
			<input class='testInput' type='text'></input>
            <p>values: <span id='testInputVals'></span></p>
			<button id="cdButton" onclick="elemSelector('#testInputVals').innerHTML = getValuesInElems(elemSelector('.testInput'))">get values of class 'testInput'</button>`
    },
	{
		"id": "appendHTMLToElem",
		"title": "appendHTMLToElem(htmlString, elem)",
		"description": "append HTML string to element",
		"code": `
			<div id="addHTMLDiv"><p>sample text</div>
			<button onclick="appendHTMLToElem('<p>more sample text</p>', elemSelector('#addHTMLDiv'))">append HTML</button>
			`
	},
	{
		"id": "removeLastElemInElems",
		"title": "removeLastElemInElems(elems)",
		"description": "remove last elem in elements",
		"code": `
			<input class="testInput2"></input><br>
			<input class="testInput2"></input><br>
			<input class="testInput2"></input><br>
			<input class="testInput2"></input><br>
			<input class="testInput2"></input><br>
			<button onclick="removeLastElemInElems(elemSelector('.testInput2'))">remove last  element of class "testInput2"</button>
			`
	},
    {
        "id": "getDateDiff",
		"title": "getDateDiff(date)",
		"description": "get the difference in days between now and a Date object",
		"code": `
			<p id="testDateDiff"></p>
			<button onclick="elemSelector('#testDateDiff').innerHTML = getDateDiff(new Date('2100-02-15T12:00:00'))">get the day difference between now and "2100-02-15T12:00:00"<br>(Feb 15, 2100 at 12pm)</button>
			`
	},
	{
        "id": "checkboxToggleEvent",
		"title": "checkboxToggleEvent(elem, checkEvent, uncheckedEvent, params)",
		"description": "do events on checkbox toggle/untoggle",
		"code": `
			<p id="testCheckboxToggleEvent">checkbox is not checked</p>
			<input type="checkbox" oninput="checkboxToggleEvent(this, checkboxToggleEventChecked, checkboxToggleEventUnchecked, {})"></input>
			<label> call functions when the checkbox is checked or unchecked</label>
			`
	},
	{
        "id": "changeElemColor",
		"title": "changeElemColor(elem, textColor, bgColor)",
		"description": "change the text/background color of an element",
		"code": `
			<div id="testChangeElemColor">
				<h3>hello worlds</h3>
				<p>this is a sample description</p>
			</div>
			<br>
			<input type="checkbox" oninput="checkboxToggleEvent(this, testChangeElemColorChecked, testChangeElemColorUnchecked,  ['rgb(230,230,230)', 'rgb(80,80,80)'])"></input>
			<label> change the element text and background colors</label>
			`
	},
	{
        "id": "checkUncheckElems",
		"title": "checkUncheckElems(elems, boolean)",
		"description": "select or deselect checkable elements",
		"code": `
			<input type='checkbox' class='testSelectAll'></input><label>option 1</label><br>
			<input type='checkbox' class='testSelectAll'></input><label>option 2</label><br>
			<input type='checkbox' class='testSelectAll'></input><label>option 3</label><br>
			<input type='checkbox' class='testSelectAll'></input><label>option 4</label><br><br>
			<button onclick='checkUncheckElems(elemSelector(".testSelectAll"), true)'>select all of the above</button>
			<button onclick='checkUncheckElems(elemSelector(".testSelectAll"), false)'>deselect all of the above</button>`
	},
	{
        "id": "getCheckedElems",
		"title": "getCheckedElems(elems)",
		"description": "get all checked elements",
		"code": `
			<input type='checkbox' name='option_1' value='option_1' class='testGetCheckedElements'></input><label>option 1</label><br>
			<input type='checkbox' name='option_2' value='option_2' class='testGetCheckedElements'></input><label>option 2</label><br>
			<input type='checkbox' name='option_3' value='option_3' class='testGetCheckedElements'></input><label>option 3</label><br>
			<input type='checkbox' name='option_4' value='option_4' class='testGetCheckedElements'></input><label>option 4</label><br><br>
			<p id='testGetCheckedElementsOutput'></p>
			<button onclick='elemSelector("#testGetCheckedElementsOutput").innerHTML = getCheckedElems(elemSelector(".testGetCheckedElements"))'>get checked elements</button>
			<p>to view additional element attributes; you can run <br><span class="code_text">console.log( getCheckedElems( elemSelector( ".testGetCheckedElements" )));</span> in the browser's developer console</p>`
	}
];

let sidebarString = "<ul><li><p>JS Helpers</p></li>";
let websiteString = "";
demos.forEach(function(demo) {
	sidebarString += `<li class="sidebarElem" onclick="introfocus('`+demo.id+`')">`+demo.title+`</li>`;
    websiteString += `<div class="helper_demo">
			<span id="`+demo.id+`"></span>
			<p class="demo_title">`+demo.title+`</p>
			<p class="demo_description">`+demo.description+`</p>
			<div class="demo">`+demo.code+`</div>
		</div>`;
});
sidebarString += "</ul>"
document.getElementById("js_helpers").innerHTML = websiteString;
document.getElementById("sidebar").innerHTML = sidebarString;

function introfocus(elem) {
    document.getElementById(elem).scrollIntoView();
}

// shorthand selector
var elemSelector = function(elemString) {
	return {
		".": document.getElementsByClassName(elemString.slice(1)),
		"#": document.getElementById(elemString.slice(1)),
	}[elemString[0]];
}

// -------------------------------------------------------
// ------------------ initialize demos -------------------
// -------------------------------------------------------

// setup hideElem()
elemSelector('#toggleDiv').style.display="none";

// setup countDown()
let cdIniClear = function() {
    elemSelector("#cdButton").style.display = "none";
}
let cdPrintMsg = function() {
    elemSelector("#cdPrint").innerHTML = "hello worlds";
    elemSelector("#cdButton").style.display = "none";
    elemSelector("#cdTimeRem").style.display = "none";
}

// setup getRandomItem
let testArray = [1,2,3,4,12.34,'apple','banana','cherry'];

// changeElemColor
let testChangeElemColorChecked = function(p) {
	changeElemColor(elemSelector('#testChangeElemColor'), p[0], p[1]);
}
let testChangeElemColorUnchecked = function(p) {
	changeElemColor(elemSelector('#testChangeElemColor'), p[1], p[0]);
}

// setup checkboxToggleEvent
let checkboxToggleEventChecked = function() {
	elemSelector("#testCheckboxToggleEvent").innerText = "checkbox is checked";
}
let checkboxToggleEventUnchecked = function() {
	elemSelector("#testCheckboxToggleEvent").innerText = "checkbox is not checked";
}
