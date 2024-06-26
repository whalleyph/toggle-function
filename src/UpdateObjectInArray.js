/** Adds two given numbers, returning the sum.
 * @param {string} soughtId
 * @param {Function} operationFN
 * @param {object[]} arrayOfObjects
 * @returns {object[]} new transformed version of arrayOfObjects
 */
function updateObjectInArray(soughtId, operationFN, arrayOfObjects) {
  return arrayOfObjects.map((object) =>
    {
      if (soughtId === object.id) {
        let newObject = { ...object };
        operationFN(newObject);
        return { ...newObject };
      } else {
        return { ...object };
      }
    }
  );
}

export { updateObjectInArray };
