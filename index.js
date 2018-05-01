// Code your solution in this file
function findMatching(collection, match) {
  return collection.filter(driver => driver.toLowerCase() === match.toLowerCase())
}
