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