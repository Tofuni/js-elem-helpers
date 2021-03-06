let demos = [
	{
		"id": "elemSelector",
		"title": "elemSelector(identifierString)",
		"description": "select elem(s) using class/id identifier strings (e.g. '#myIdElem', '.myClassElem'); shorthand select for HTMLCollections",
		"code": `
            <div id="testElemSelectorId"><span>idElem1</span> - <span>idElem2</span> - <span>idElem3</span></div><br>
			<span class="testElemSelectorClass">classText1</span> - <span class="testElemSelectorClass">classText2</span>
			<p id="testElemSelectorResult"></p>
			<button onclick='elemSelector("#testElemSelectorResult").innerHTML = "<hr>#testElemSelectorId children elems - " + elemSelector("#testElemSelectorId").children + "<br><br>.testElemSelectorClass elems - " + elemSelector(".testElemSelectorClass")'>display elemSelector HTMLCollections</button>
			<br><p>to view additional element attributes; you can run <br><span class="code_text"> console.log(  elemSelector( '#testElemSelectorId' ).children ); console.log(  elemSelector( '.testElemSelectorClass' ));</span> in the browser's developer console</p>
			`
    },
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
			<div id="addHTMLDiv">sample text</div>
			<button onclick="appendHTMLToElem('<p>more sample text</p>', elemSelector('#addHTMLDiv'))">append HTML</button>`
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
	},
	{
        "id": "confirmEvent",
		"title": "confirmEvent(event, message, params)",
		"description": "output prompt to verify action",
		"code": `
			<p id='testConfirmEvent'>this is example text</p>
			<button onclick='confirmEvent(jsTestConfirmEvent, "add more text to the example element?", ["<span>, with more example text</span>", elemSelector("#testConfirmEvent")])'>add additional example text</button>`
	},
	{
        "id": "resetToDefault",
		"title": "resetToDefault(elems, defaults)",
		"description": "reset elem values back to default values",
		"code": `
			<div id="testResetToDefault">
				<input type="text" value="default_value_1"></input>
				<input type="text" value="default_value_2"></input>
				<input type="time" value="00:00"></input>
				<input type="range" min="0" max="100" value="50"></input>
			</div>
			<button onclick="resetToDefault(elemSelector('#testResetToDefault').children, ['default_value_1', 'default_value_2', '00:00', '50'])">reset values to defaults</button>`
	},
	{
        "id": "saveToStorage",
		"title": "saveToStorage(elem)",
		"description": "save an element name and value to localStorage",
		"code": `
			<div id="testSaveToStorage">
				input_field_1 <input name="input_field_1" type="text"></input>
				input_field_2 <input name="input_field_2" type="text"></input>
				input_field_3 <input name="input_field_3" type="text"></input>
			</div>
			<p id="saveToStorageResult"></p>
			<button onclick="jsTestSaveToStorage(elemSelector('#testSaveToStorage').children); elemSelector('#saveToStorageResult').innerHTML = 'window.localStorage: ' + JSON.stringify(window.localStorage); elemSelector('#saveToStorageResult').classList.add('code_text')">save input values to storage</button>`
	},
	{
        "id": "addOptions",
		"title": "addOptions(selectElem, options)",
		"description": "set options to a select element",
		"code": `
			<select id="testAddOptions"></select>
			<button onclick="addOptions(elemSelector('#testAddOptions'), {'opt1': 'option 1', 'opt2': 'option 2', 'opt3': 'option 3', 'opt4': 'option 4'});">set options to the dropdown element</button>`
	},
    {
        "id": "updateFontSize",
		"title": "updateFontSize(size, targetElem)",
		"description": "update text-size based on element value",
		"code": `
			<select id="testUpdateFontSize" value="10px" oninput="updateFontSize(elemSelector('#testUpdateFontSize').value, elemSelector('#testUpdateFontSizeText'));">
                <option value="10px">10px</option>
                <option value="20px">20px</option>
                <option value="30px">30px</option>
				<option value="2em">2em</option>
				<option value="5em">5em</option>
            </select>
            <p id="testUpdateFontSizeText" style="font-size:10px">hello worlds; this is an example element</p>`
	},
	{
        "id": "getScrollDiff",
		"title": "getScrollDiff(elem)",
		"description": "return scroll difference of current element in px",
		"code": `
			<p>scroll diff: <span id="testGetScrollDiffOutput">___</span>px</p><br>
			<div id="testGetScrollDiff" onscroll="elemSelector('#testGetScrollDiffOutput').innerText = getScrollDiff(this)">
                <p>example text</p><p>example text</p><p>example text</p><p>example text</p><p>example text</p><p>example text</p>
				<p>example text</p><p>example text</p><p>example text</p><p>example text</p><p>example text</p><p>example text</p>
				<p>example text</p><p>example text</p><p>example text</p><p>example text</p><p>example text</p><p>example text</p>
				<p>example text</p><p>example text</p><p>example text</p><p>example text</p><p>example text</p><p>example text</p>
				<p>example text</p><p>example text</p><p>example text</p><p>example text</p><p>example text</p><p>example text</p>
				<p>example text</p><p>example text</p><p>example text</p><p>example text</p><p>example text</p><p>example text</p>
				<p>example text</p><p>example text</p><p>example text</p><p>example text</p><p>example text</p><p>example text</p>
				<p>example text</p><p>example text</p><p>example text</p><p>example text</p><p>example text</p><p>example text</p>
            </div>`
	},
	{
        "id": "setElemsDisplay",
		"title": "setElemsDisplay(elems, display)",
		"description": "toggle display for multiple elems",
		"code": `
			<input type="checkbox" oninput="if (this.checked){setElemsDisplay(elemSelector('#testSetElemsDisplay').children, 'block')}
			else {setElemsDisplay(elemSelector('#testSetElemsDisplay').children, 'none')}"></input>
			<label>this checkbox updates the display property for multiple text elements</label>
			<div id="testSetElemsDisplay">
				<p>text element 1</p>
				<p>text element 2</p>
				<p>text element 3</p>
				<p>text element 4</p>
			</div>`
	},
	{
        "id": "validateElemNotNull",
		"title": "validateElemNotNull(elem)",
		"description": "validate if an element's value is not null (e.g. if a field is filled out)",
		"code": `
			<input type="text" onblur="if (validateElemNotNull(this)) { elemSelector('#testValidateElemNotNull').innerText='' } else { elemSelector('#testValidateElemNotNull').innerText='error: this field must have a value' }"></input>
			<label>this field validates if its value is not null when the element is out of focus</label>
			<p id="testValidateElemNotNull" class="errorText"></p>`
	},
	{
        "id": "validateNumWithinRange",
		"title": "validateNumWithinRange(num, min, max)",
		"description": "validate if an element's value within a numeric range",
		"code": `
			<input type="number" onblur="if (validateNumWithinRange(this.value, 0, 100)) { elemSelector('#testValidateNumWithinRange').innerText='' } else { elemSelector('#testValidateNumWithinRange').innerText='error: this field does not have a numeric value from 0 to 100' }"></input>
			<label>this field validates if its value is within the numeric range of 0 to 100</label>
			<p id="testValidateNumWithinRange" class="errorText"></p>`
	},
	{
		"id": "getMinMax",
		"title": "getMinMax(nums, 'min|max')",
		"description": "get minimum and maximum value(s) in array of nums",
		"code": `
			<button onclick="genRandomNumArray(); elemSelector('#testGetMinMax').innerText = randomNumArray; elemSelector('#testGetMinMaxRes').innerText = '[ ' + getMinMax(randomNumArray) + ' ]'">generate an array of random numbers and return the min and max of its items</button>
			<p id="testGetMinMax"></p>
			<p id="testGetMinMaxRes"></p>`
	},
	{
		"id": "getElemsNameVals",
		"title": "getElemsNameVals(elems)",
		"description": "get elements' field_names and values as dictionary payload",
		"code": `
			<div id="testGetElemsNameVals">
				<input name="input_1" placeholder="input field one"></input>
				<input name="input_2" placeholder="input field two"></input>
				<input name="input_3" placeholder="input field three"></input>
				<input name="input_4" placeholder="input field four"></input>
			</div>
			<br>
			<button onclick="elemSelector('#getElemsNameValsRes').innerText = JSON.stringify(getElemsNameVals(elemSelector('#testGetElemsNameVals').children))">get input field payload as {input name: input value}</button>
			<p id="getElemsNameValsRes"></p>
		`
	},
	{
		"id": "parseStrToArray",
		"title": "parseStrToArray(text, delim)",
		"description": "parse string and given delimiter to an array object",
		"code": `
			<textarea id="parseStrToArrayText" rows="8" cols="100"></textarea>
			<label>delimiter: </label><select id="parseStrToArraySelect">
				<option value=",">comma (,)</option>
				<option value=";">semicolon (;)</option>
				<option value=" ">nbsp (space)</option>
				<option value="-">dash (-)</option>
			</select>
			<br>
			<button onclick="elemSelector('#parseStrToArrayRes').innerText = parseStrToArray(elemSelector('#parseStrToArrayText').value, elemSelector('#parseStrToArraySelect').value)">parse text input to array with selected delimiter</button>
			<p id="parseStrToArrayRes"></p>
			<p>to view the array object itself; you can run <br><span class="code_text"> parseStrToArray( elemSelector('#parseStrToArrayText').value, elemSelector('#parseStrToArraySelect').value )</span> in the browser's developer console</p>`
	}
];

/*
"id": "",
"title": "",
"description": "",
"code": ``
*/

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

// -------------------------------------------------------
// ------------------ initialize demos -------------------
// -------------------------------------------------------

// setup hideElem()
document.getElementById('toggleDiv').style.display="none";

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

// setup confirmEvent
let jsTestConfirmEvent = function(params) {
	appendHTMLToElem(params[0], params[1]);
}

// setup saveToStorage
let jsTestSaveToStorage = function(elems) {
	for (let a=0; a<elems.length; a+=1) {
		saveToStorage(elems[a]);
	}
}

// setup setElemsDisplay
for (let a = 0; a < document.getElementById("testSetElemsDisplay").children.length; a+=1) {
	document.getElementById("testSetElemsDisplay").children[a].style.display = "none";
}

// setup getMinMax
let randomNumArray = [];
var genRandomNumArray = function() {
	randomNumArray = [];
	for (let a=0; a < 10; a+=1) {
		randomNumArray.push(Math.floor(Math.random()*(100-1)));
	}
};