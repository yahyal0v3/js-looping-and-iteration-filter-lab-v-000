// Code your solution in this file
function findMatching(collection, match) {
  collection.filter(function (element) {return element.toLowerCase() === match.toLowerCase()})
}
