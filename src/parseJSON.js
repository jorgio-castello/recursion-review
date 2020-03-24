// this is what you would do if you were one to do things the easy way:
// var parseJSON = JSON.parse;

// but you're not, so you'll write it from scratch:
var parseJSON = function(json) {
  // your code goes here

  //Loop through each character of the json parameter
  for (let i = 0; i < json.length; i++) {
    if (json[i] === '[') {
      let tempStr = json.slice(i + 1);
      return parseArray(tempStr);
    }
  }
  //if json[i] === '['
  // parseJSON(']')
};

let parseArray = function(json) {
  let result = [];
  let tempStr = '';

  for (let i = 0; i < json.length; i++) {
    if (json[i] === ',' || json[i] === '[') {
      let parsedElement = parseJSON(tempStr);
      result.push(parsedElement);
      tempStr = '';
    }
    if (json[i] === ']') {
      return result;
    }

    tempStr += json[i];
  }
};

