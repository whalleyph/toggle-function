/** Adds two given numbers, returning the sum.
 * @param {string} soughtId
 * @param {Function} operationFN
 * @param {object[]} arrayOfObjects
 * @returns {object[]} new transformed version of arrayOfObjects
 */
function updateObjectInArray(soughtId, operationFN, arrayOfObjects) {
  const newArrayOfObjects = [];
  for (let object of arrayOfObjects) {
    let newObject = { ...object };
    if (soughtId === newObject.id) {
      operationFN(newObject)
    }
    newArrayOfObjects.push(newObject);
  }

  return newArrayOfObjects;
}

export { updateObjectInArray };
