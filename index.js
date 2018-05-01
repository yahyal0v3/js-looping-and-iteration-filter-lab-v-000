// Code your solution in this file


function findMatching(collection, match) {
  return collection.filter(element => element.toLowerCase() === match.toLowerCase())
}