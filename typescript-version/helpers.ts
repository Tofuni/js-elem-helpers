// shorthand selector by class or id
const elemSelector = function(elemString): HTMLCollectionOf<HTMLElement> {
	return {
		".": document.getElementsByClassName(elemString.slice(1)),
		"#": document.getElementById(elemString.slice(1)),
	}[elemString[0]];
}

// pseudo-href (e.g. apply hyperlink to a <td> element)
const navi = function(path: string): void {
	location.href = path;
}

// asynchronously get url and do response function
const getUrlAsync = function(url: string, responsetype: any, func: (obj: any) => any, errorHandler?: () => any): void {
	let req: XMLHttpRequest = new XMLHttpRequest();
	req.responseType = responsetype;
	req.open("GET", url, true);
	req.onload = function() {
		if (req.readyState === req.DONE) { func(req.response); }
	}
	req.onerror = function() {
		errorHandler();
	};
	req.send();
}

// hide an element (e.g. closing a banner)
const hideElem = function(elem: HTMLElement): void {
	elem.style.display = 'none';
}

// vertical show/hide toggle via button
const displayToggleButton = function(toggleElem: HTMLElement, toggleButton: HTMLElement): void {
	let state: string = toggleElem.style.display;
	if (state === "none") {
		toggleElem.style.display = "inline-block";
		toggleButton.innerHTML = "&#9650;";
	} else {
		toggleElem.style.display = "none";
		toggleButton.innerHTML = "&#9660;";
	}
}

// countdown with start and end events
const countDown = function(time: number, eventStart: () => void, eventEnd: () => void, timeDisplayElem: HTMLElement): void {
    eventStart();
    timeDisplayElem.innerHTML = time.toString();
    let cd: number = setInterval(function() {
        time -= 1;
		timeDisplayElem.innerHTML = time.toString();
        if (time <= 0) {
            eventEnd();
            clearInterval(cd);
        }
	}, 1000);
}

// get random item from array
const getRandomItem = function(array: Array<any>): Array<any> {
    return array[Math.floor(Math.random()*(array.length))];
}

// get values in elements
const getValuesInElems = function(elems: HTMLCollectionOf<HTMLInputElement>): Array<string> {
	let vals: Array<string> = [];
	for (let a=0; a<elems.length; a+=1) {
		vals.push(elems[a].value);
	}
	return vals;
}

// append HTML to element
const appendHTMLToElem = function(HTMLString: string, elem: HTMLElement): void {
	elem.insertAdjacentHTML('beforeend', HTMLString);
}

// remove last elem in elements
const removeLastElemInElems = function(elems: HTMLCollectionOf<HTMLElement>): void {
	if (elems.length == 0) {
		return;
	}
	elems[elems.length-1].remove();
}

// get difference between now and a date in days
const getDateDiff = function(date: number): number {
	const d: number = Date.now();
	return Math.abs(Math.floor((date - d)/(1000*60*60*24)));
}

// checkbox toggle event
const checkboxToggleEvent = function(elem: HTMLInputElement, checkEvent: (params: any) => void, uncheckedEvent: (params: any) => void, params: Record<string, any>): void {
	if (elem.checked) { checkEvent(params) }
	else { uncheckedEvent(params) }
}

// change bg and text-color of element
const changeElemColor = function(elem: HTMLElement, textColor: string, bgColor: string): void {
	elem.style.color = textColor;
	elem.style.backgroundColor = bgColor;
}

// check or uncheck all selected elements
const checkUncheckElems = function(elems: HTMLCollectionOf<HTMLInputElement>, bool: boolean): void {
	for (let a=0; a<elems.length; a+=1) { elems[a].checked = bool; }
}

// return all checked elements
const getCheckedElems = function(elems: HTMLCollectionOf<HTMLInputElement>): Array<HTMLElement> {
	let r: Array<any> = [];
	for (let a=0; a<elems.length; a+=1) { if (elems[a].checked) { r.push(elems[a]); }}
	return r;
}

// output alert window to verify action (e.g. alertVerify(event, message))
const confirmEvent = function(event: (params: any) => void, message: string, params: Record<string, any>) {
    if (window.confirm(message)) { event(params) };
}

// reset values back to default values on an HTMLCollection
const resetToDefault = function(elems: HTMLCollectionOf<HTMLInputElement>, defaults: Array<any>) {
    for (let a: number = 0; a<elems.length; a+=1) {
        elems[a].value = defaults[a];
    }
}

// save an element name and value to localStorage
const saveToStorage = function(elem: HTMLInputElement): void {
    window.localStorage.setItem(elem.name, elem.value);
}

// populate a select element with options
const addOptions = function(selectElem: HTMLInputElement, options: Record<string, string>): void {
    let HTMLstring: string = "";
    for (const option in options) {
        HTMLstring += "<option name='"+option+"' value='"+options[option]+"'>"+options[option]+"</option>";
    }
    selectElem.innerHTML = HTMLstring;
}

// update text-size based on element value
const updateFontSize = function(size: string, targetElem: HTMLElement): void {
    targetElem.style.fontSize = size;
}

// return scroll difference of current element
const getScrollDiff = function(elem: HTMLElement): number {
    return elem.scrollHeight - elem.scrollTop;
}

// toggle display for multiple elems
const setElemsDisplay = function(elems: HTMLCollectionOf<HTMLElement>, display: string): void {
    for (let a: number = 0; a<elems.length; a+=1) {
        elems[a].style.display = display;
    };
}

// not null elem value validator
const validateElemNotNull = function(elem: HTMLInputElement): boolean {
    if (elem.value.trim() != "") {
        return true;
    }
    return false;
}

// number within range validator
const validateNumWithinRange = function(num: number, min: number, max: number): boolean {
    return (num >= min && num <= max);
}

// get minimum and maximum value(s) in array of nums
const getMinMax = function(nums: Array<number>, m: string): number | Array<number> {
    let minmax: Array<number> = [nums[0], nums[0]];
    nums.forEach(function(num: number) {
        if (num < minmax[0]) {
            minmax[0] = num;
        } else if (num > minmax[1]) {
            minmax[1] = num;
        }
    });
    if (m == 'min' || m == 'max') {
        return {
            'min': minmax[0],
            'max': minmax[1]
        }[m];
    };
    return minmax;
}

// get elements' field_names and values as dictionary payload
const getElemsNameVals = function(elems: HTMLCollectionOf<HTMLInputElement>): Record<string, string> {
    let r: Record<string, string> = {};
    for (let a: number = 0; a < elems.length; a+=1) {
        r[elems[a].name] = elems[a].value;
    }
    return r;
}

// parse string and given delimiter to an array object
const parseStrToArray = function(text: string, delim: string): Array<string> {
    const list = text.trim().split(delim);
    let r: Array<string> = [];
    for (let a: number = 0; a < list.length; a+=1) {
        r.push(list[a].trim());
    }
    return r;
}

// validate field value with string
var validateElemStrMatch = function(elem, str) {
    return (elem.value === str);
}

// add/remove classes for an element
var addRemoveClassesToElem = function(elem, classes, addRem) {
    if (addRem.toLowerCase() === "add") {
		classes.forEach(function(c) { elem.classList.add(c); });
	} else if (addRem.toLowerCase() === "remove") {
		classes.forEach(function(c) { elem.classList.remove(c); });
	} else { return }
}

// validate character length limit of elem value
var validateStrLength = function(elem, max) {
    return (elem.value.length <= max);
}

// get position of cursor as [x-coord, y-coord]
var getCursorPosition = function(e) {
    return [e.clientX, e.clientY];
}

// return key properties on elem keypress event
var getKeyProps = function(e) {
	return {
		"code": e.code,
		"key": e.key,
		"charCode": e.charCode,
   }
}

// do function on key
var doFunctionOnKey = function(e, inputKey, func, params={}) {
	if (e.key === inputKey) {
        return func(params);
    }
}

// generate a random array of numbers from a set range
var genRandomNumArray = function(numItems, min, max) {
	var r = [];
	for (let a=0; a < numItems; a+=1) {
		r.push(Math.floor(Math.random()*(max-min+1)+min));
	}
    return r;
};
