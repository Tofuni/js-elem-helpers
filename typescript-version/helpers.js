// shorthand selector by class or id
var elemSelector = function (elemString) {
    return {
        ".": document.getElementsByClassName(elemString.slice(1)),
        "#": document.getElementById(elemString.slice(1))
    }[elemString[0]];
};
// pseudo-href (e.g. apply hyperlink to a <td> element)
var navi = function (path) {
    location.href = path;
};
// asynchronously get url and do response function
var getUrlAsync = function (url, responsetype, func, errorHandler) {
    var req = new XMLHttpRequest();
    req.responseType = responsetype;
    req.open("GET", url, true);
    req.onload = function () {
        if (req.readyState === req.DONE) {
            func(req.response);
        }
    };
    req.onerror = function () {
        errorHandler();
    };
    req.send();
};
// hide an element (e.g. closing a banner)
var hideElem = function (elem) {
    elem.style.display = 'none';
};
// vertical show/hide toggle via button
var displayToggleButton = function (toggleElem, toggleButton) {
    var state = toggleElem.style.display;
    if (state === "none") {
        toggleElem.style.display = "inline-block";
        toggleButton.innerHTML = "&#9650;";
    }
    else {
        toggleElem.style.display = "none";
        toggleButton.innerHTML = "&#9660;";
    }
};
// countdown with start and end events
var countDown = function (time, eventStart, eventEnd, timeDisplayElem) {
    eventStart();
    timeDisplayElem.innerHTML = time.toString();
    var cd = setInterval(function () {
        time -= 1;
        timeDisplayElem.innerHTML = time.toString();
        if (time <= 0) {
            eventEnd();
            clearInterval(cd);
        }
    }, 1000);
};
// get random item from array
var getRandomItem = function (array) {
    return array[Math.floor(Math.random() * (array.length))];
};
// get values in elements
var getValuesInElems = function (elems) {
    var vals = [];
    for (var a = 0; a < elems.length; a += 1) {
        vals.push(elems[a].value);
    }
    return vals;
};
// append HTML to element
var appendHTMLToElem = function (HTMLString, elem) {
    elem.insertAdjacentHTML('beforeend', HTMLString);
};
// remove last elem in elements
var removeLastElemInElems = function (elems) {
    if (elems.length == 0) {
        return;
    }
    elems[elems.length - 1].remove();
};
// get difference between now and a date in days
var getDateDiff = function (date) {
    var d = Date.now();
    return Math.abs(Math.floor((date - d) / (1000 * 60 * 60 * 24)));
};
// checkbox toggle event
var checkboxToggleEvent = function (elem, checkEvent, uncheckedEvent, params) {
    if (elem.checked) {
        checkEvent(params);
    }
    else {
        uncheckedEvent(params);
    }
};
// change bg and text-color of element
var changeElemColor = function (elem, textColor, bgColor) {
    elem.style.color = textColor;
    elem.style.backgroundColor = bgColor;
};
// check or uncheck all selected elements
var checkUncheckElems = function (elems, bool) {
    for (var a = 0; a < elems.length; a += 1) {
        elems[a].checked = bool;
    }
};
// return all checked elements
var getCheckedElems = function (elems) {
    var r = [];
    for (var a = 0; a < elems.length; a += 1) {
        if (elems[a].checked) {
            r.push(elems[a]);
        }
    }
    return r;
};
// output alert window to verify action (e.g. alertVerify(event, message))
var confirmEvent = function (event, message, params) {
    if (window.confirm(message)) {
        event(params);
    }
    ;
};
// reset values back to default values on an HTMLCollection
var resetToDefault = function (elems, defaults) {
    for (var a = 0; a < elems.length; a += 1) {
        elems[a].value = defaults[a];
    }
};
// save an element name and value to localStorage
var saveToStorage = function (elem) {
    window.localStorage.setItem(elem.name, elem.value);
};
// populate a select element with options
var addOptions = function (selectElem, options) {
    var HTMLstring = "";
    for (var option in options) {
        HTMLstring += "<option name='" + option + "' value='" + options[option] + "'>" + options[option] + "</option>";
    }
    selectElem.innerHTML = HTMLstring;
};
// update text-size based on element value
var updateFontSize = function (size, targetElem) {
    targetElem.style.fontSize = size;
};
// return scroll difference of current element
var getScrollDiff = function (elem) {
    return elem.scrollHeight - elem.scrollTop;
};
// toggle display for multiple elems
var setElemsDisplay = function (elems, display) {
    for (var a = 0; a < elems.length; a += 1) {
        elems[a].style.display = display;
    }
    ;
};
// not null elem value validator
var validateElemNotNull = function (elem) {
    if (elem.value.trim() != "") {
        return true;
    }
    return false;
};
// number within range validator
var validateNumWithinRange = function (num, min, max) {
    return (num >= min && num <= max);
};
// get minimum and maximum value(s) in array of nums
var getMinMax = function (nums, m) {
    var minmax = [nums[0], nums[0]];
    nums.forEach(function (num) {
        if (num < minmax[0]) {
            minmax[0] = num;
        }
        else if (num > minmax[1]) {
            minmax[1] = num;
        }
    });
    if (m == 'min' || m == 'max') {
        return {
            'min': minmax[0],
            'max': minmax[1]
        }[m];
    }
    ;
    return minmax;
};
// get elements' field_names and values as dictionary payload
var getElemsNameVals = function (elems) {
    var r = {};
    for (var a = 0; a < elems.length; a += 1) {
        r[elems[a].name] = elems[a].value;
    }
    return r;
};
// parse string and given delimiter to an array object
var parseStrToArray = function (text, delim) {
    var list = text.trim().split(delim);
    var r = [];
    for (var a = 0; a < list.length; a += 1) {
        r.push(list[a].trim());
    }
    return r;
};
// validate field value with string
var validateElemStrMatch = function (elem, str) {
    return (elem.value === str);
};
// add/remove classes for an element
var addRemoveClassesToElem = function (elem, classes, addRem) {
    if (addRem.toLowerCase() === "add") {
        classes.forEach(function (c) { elem.classList.add(c); });
    }
    else if (addRem.toLowerCase() === "remove") {
        classes.forEach(function (c) { elem.classList.remove(c); });
    }
    else {
        return;
    }
};
// validate character length limit of elem value
var validateStrLength = function (elem, max) {
    return (elem.value.length <= max);
};
// get position of cursor as [x-coord, y-coord]
var getCursorPosition = function (e) {
    return [e.clientX, e.clientY];
};
// return key properties on elem keypress event
var getKeyProps = function (e) {
    return {
        "code": e.code,
        "key": e.key,
        "charCode": e.charCode
    };
};
// do function on key
var doFunctionOnKey = function (e, inputKey, func, params) {
    if (params === void 0) { params = {}; }
    if (e.key === inputKey) {
        return func(params);
    }
};
// generate a random array of numbers from a set range
var genRandomNumArray = function (numItems, min, max) {
    var r = [];
    for (var a = 0; a < numItems; a += 1) {
        r.push(Math.floor(Math.random() * (max - min + 1) + min));
    }
    return r;
};
