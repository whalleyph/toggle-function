/** Adds two given numbers, returning the sum.
 * @param {string} soughtId
 * @param {object[]} arrayOfObjects
 * @returns {object[]} new transformed version of arrayOfObjects
 */
function toggle(soughtId, arrayOfObjects) {
    const newArrayOfObjects = []
    for (let object of arrayOfObjects) {
        const newObject = {...object}
        if (soughtId === newObject.id) {
            newObject.isOn = !newObject.isOn
        }
        newArrayOfObjects.push(newObject)
    }

    return newArrayOfObjects
}

export { toggle };
