// Code your solution in this file
function findMatching(collection, string) {
  return collection.filter(driver => {return driver.toLowerCase() === string.toLowerCase()})
}
