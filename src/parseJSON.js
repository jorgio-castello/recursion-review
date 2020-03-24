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

  }
};



