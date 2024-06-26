import { expect, test } from "@jest/globals";
import { updateObjectInArray } from "./UpdateObjectInArray";

function upperCaseMyName(obj) {
  obj.name = obj.name.toUpperCase();
}

test("hulk to uppercase", () => {
  const originalCharactersArray = [
    { id: "gz", isOn: true, name: "Godzilla" },
    { id: "hk", isOn: false, name: "Hulk" },
    { id: "md", isOn: true, name: "Medusa" },
    { id: "pg", isOn: false, name: "Pegasus" },
  ];

  const result1 = updateObjectInArray(
    "hk",
    upperCaseMyName,
    originalCharactersArray
  );

  const expectedOutput = [
    { id: "gz", isOn: true, name: "Godzilla" },
    { id: "hk", isOn: false, name: "HULK" },
    { id: "md", isOn: true, name: "Medusa" },
    { id: "pg", isOn: false, name: "Pegasus" },
  ];
  //the returned array should have the contents we expect
  expect(result1).toEqual(expectedOutput);
  //we should have been given a new reference not the same array
  expect(result1).not.toBe(originalCharactersArray);
  //the second element of the array should have a new object replacing the old
  expect(result1[1]).not.toBe(originalCharactersArray[1]);
  //the original hulk object shouldn't have been changed
  expect(originalCharactersArray[1].name).toBe("Hulk");
});

test("pegasus can fly", () => {
  const originalCharactersArray = [
    { id: "gz", isOn: true, name: "Godzilla" },
    { id: "hk", isOn: false, name: "Hulk" },
    { id: "md", isOn: true, name: "Medusa" },
    { id: "pg", isOn: false, name: "Pegasus" },
  ];

  const result2 = updateObjectInArray(
    "pg",
    (obj) => (obj.canFly = true),
    originalCharactersArray
  );

  const expectedOutput = [
    { id: "gz", isOn: true, name: "Godzilla" },
    { id: "hk", isOn: false, name: "Hulk" },
    { id: "md", isOn: true, name: "Medusa" },
    { id: "pg", isOn: false, name: "Pegasus", canFly: true },
  ];

  //the returned array should have the contents we expect
  expect(result2).toEqual(expectedOutput);
  //we should have been given a new reference
  expect(result2).not.toBe(originalCharactersArray);
  //the first element of the array should have a new object replacing the old
  expect(result2[3]).not.toBe(originalCharactersArray[3]);
  //the original godzilla object shouldn't have been changed
  expect(originalCharactersArray[3].canFly).toBe(undefined);
});
