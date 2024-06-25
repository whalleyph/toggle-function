import { expect, test } from "@jest/globals";
import { toggle } from "./toggle";

test("toggle hulk on", () => {
    const originalCharactersArray = [
        { id: "gz", isOn: true, name: "Godzilla" },
        { id: "hk", isOn: false, name: "Hulk" },
        { id: "md", isOn: true, name: "Medusa" },
        { id: "pg", isOn: false, name: "Pegasus" },
    ];

    const newArray = toggle("hk", originalCharactersArray);

    const expectedOutput = [
        { id: "gz", isOn: true, name: "Godzilla" },
        { id: "hk", isOn: true, name: "Hulk" },
        { id: "md", isOn: true, name: "Medusa" },
        { id: "pg", isOn: false, name: "Pegasus" },
    ];
    //the returned array should have the contents we expect (with hulk off and others unchanged)
    expect(newArray).toEqual(expectedOutput);
    //we should have been given a new reference not the same array
    expect(newArray).not.toBe(originalCharactersArray);
    //the second element of the array should have a new object replacing the old
    expect(newArray[1]).not.toBe(originalCharactersArray[1]);
    //the original hulk object shouldn't have been changed
    expect(originalCharactersArray[1].isOn).toBe(false);
});

test("toggle godzilla off", () => {
    const originalCharactersArray = [
        { id: "gz", isOn: true, name: "Godzilla" },
        { id: "hk", isOn: false, name: "Hulk" },
        { id: "md", isOn: true, name: "Medusa" },
        { id: "pg", isOn: false, name: "Pegasus" },
    ];

    const newArray = toggle("gz", originalCharactersArray);

    const expectedOutput = [
        { id: "gz", isOn: false, name: "Godzilla" },
        { id: "hk", isOn: false, name: "Hulk" },
        { id: "md", isOn: true, name: "Medusa" },
        { id: "pg", isOn: false, name: "Pegasus" },
    ];

    //the returned array should have the contents we expect (with godzilla off)
    expect(newArray).toEqual(expectedOutput);
    //we should have been given a new reference
    expect(newArray).not.toBe(originalCharactersArray);
    //the first element of the array should have a new object replacing the old
    expect(newArray[0]).not.toBe(originalCharactersArray[0]);
    //the original godzilla object shouldn't have been changed
    expect(originalCharactersArray[0].isOn).toBe(true);
});