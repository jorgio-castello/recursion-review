// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

var stringifyJSON = function(obj) {
  // your code goes here


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
  if (typeof obj === 'string') {
    return `"${obj}"`;
  }

  // Check if obj is an array
  if (Array.isArray(obj)) {
    // Map obj into a stringArray
    var stringArray = obj.map(element => stringifyJSON(element));
    return '[' + stringArray.join(',') + ']';
  }


  // Check if typeof is object
  if (typeof obj === 'object' && obj !== null) {
    // declare array = [];
    var objStringArray = [];
    // Loop through obj
    for (var key in obj) {
      // if type of the obj is a function or is undefined
        // continue
      if (typeof obj[key] === 'function' || obj[key] === undefined) {
        continue;
      }
      // Create stringified versions of the key value pairs using stringifyJSON
      // Declare keyString
      var keyString = stringifyJSON(key);
      // Declare valueString
      var valueString = stringifyJSON(obj[key]);
      objStringArray.push(keyString + ':' + valueString);
    }

  // array.push(stringifyJSON(key) + ':' + stringifyJSON(obj[key]))
    return '{' + objStringArray.join(',') + '}';
  }

  // "{ 'key' : 'value'}"


  // Make obj into string version
  return '' + obj;

};
