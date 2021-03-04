- get element properties as a dictionary {field.name: field.value} payload

- parse string and given delimiter to an array object

- validate a string match in element (e.g. a password field)

- add class(es) to an element

- validate character length limit (e.g. max 15 characters in input field)

- get position of cursor

- get attributes of input file

- return keycode for element (e.g. pressing keyboard keys on focused element)
-- onkeydown="displayKeyProps(event)" >>> displayKeyProps(e) { return e.code, e.key, e.charCode, e.keyCode ... }

- 