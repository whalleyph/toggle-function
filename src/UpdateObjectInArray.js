/** Adds two given numbers, returning the sum.
 * @param {string} soughtId
 * @param {Function} operationFN
 * @param {object[]} arrayOfObjects
 * @returns {object[]} new transformed version of arrayOfObjects
 */
function updateObjectInArray(soughtId, operationFN, arrayOfObjects) {
  const updateObject = (object) => {
    let newObject = { ...object };
    operationFN(newObject);
    return newObject;
  };
  return arrayOfObjects.map((object) =>
    soughtId === object.id ? updateObject(object) : { ...object }
  );
}

export { updateObjectInArray };
