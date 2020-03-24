// this is what you would do if you were one to do things the easy way:
// var parseJSON = JSON.parse;


// but you're not, so you'll write it from scratch:
var parseJSON = function(json) {
  // your code goes here

  //Loop through each character of the json parameter
  for (let i = 0; i < json.length; i++) {
    //Numbers
    if ( json.charCodeAt(i) >= 48 && json.charCodeAt(i) <= 57) {
      return parseInt(json);
    }

    //Strings
    if (json[i] === '"') {
      let endIndex = json.indexOf('"', i + 1);
      return json.slice(i + 1, endIndex);
    }

    //Booleans: true
    if ( json === 'true') {
      return true;
    }

    if ( json === 'false') {
      return false;
    }

    //Null
    if (json === 'null') {
      return null;
    }

    //Arrays
    if (json[i] === '[') {
      json = json.slice(i + 1);
      let result = handleArrays(json);
      return result;
    }
  }
};

let handleArrays = function(json) {
  //declare an arr that will eventually be the final return value of this function
  let arr = [];
  //declare a variable tempString
  let tempString = '';

  //if the first character is a opening bracket for an array, invoke parseJSON
  if (json[0] === '[') {
    arr.push(parseJSON(json));
    return arr;
  }

  //Loop through the json parameter
  for (let i = 0; i < json.length; i++) {
    //if the current character is a comma, parseJSON on the built-up tempString
    if (json[i] === ',') {
      arr.push(parseJSON(tempString));
      tempString = ''; //reset tempString to be empty
    //if: its a closing bracket
    } else if (json[i] === ']') {
      //if tempString has characters in it, invoke parseJSON - arr.push(parsejson(tempString))
      if (tempString !== '') {
        arr.push(parseJSON(tempString));
      }
      return arr;
    } else {
      tempString += json[i]; //concat to the tempString with the current character of json
    }
  }

  return arr;
};

