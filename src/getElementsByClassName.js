// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:
var getElementsByClassName = function(className
) {
  // your code here
  //declare resultArr
  let resultArr = [];

  //declare inner function - getChildNodes
  let getChildNodes = function (nodes) {
    //Loop through the nodes
    nodes = Array.from(nodes);
    nodes.forEach(node => {
      //If the node has the className,
      if (node.classList.value === className) {
        //if true: push it into resultArr
        resultArr.push(node);
      }
      //call the getChildNodes on each node
      return getChildNodes(node.childNodes);
    });
  };

  getChildNodes(document);
  //return resultArr
  return resultArr;
};
