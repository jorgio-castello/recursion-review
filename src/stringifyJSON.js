// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

var stringifyJSON = function(obj) {
  // your code goes here

  // Make obj into string version
  return '' + obj;

  // if typeof obj is a boolean
  if (typeof obj === 'boolean') {
    if (obj) {
      return 'true';
    } else {
      return 'false';
    }
  }


  // Check typeof obj for strings
  // If true return original string with " "

  // Check if obj is an array
  // Map obj into a stringArray
  // return '[' + stringArray.join(,) + ']'

  // Check if typeof is object
  // declare array = [];
  // "{ 'key' : 'value'}"
  // Loop through obj
    // Create stringified versions of the key value pairs using stringifyJSON
    // Declare keyString
    // Declare valueString
  // array.push(stringifyJSON(key) + ':' + stringifyJSON(obj[key]))
  // return '{' + array,join(,) + '}'


};
