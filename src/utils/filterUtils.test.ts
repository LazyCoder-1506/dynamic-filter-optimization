import { getAllFilterOptions, getSelectedFilterOptions, getSelectedNumbersFromSelectedOptions } from "./filterUtils";
import { Option } from "./types";

describe("Filter Utility function", () => {
  const values: string[] = ['a', 'b', 'c'];

  test("getAllFilterOptions returns option objects from option values", () => {
    const expectedResult:Option[] = [
      {
        value: 'a',
        label: 'a'
      }, {
        value: 'b',
        label: 'b'
      }, {
        value: 'c',
        label: 'c'
      }
    ];

    const actualResult = getAllFilterOptions(values);

    expect(actualResult).toEqual(expectedResult);
  });

  test("getSelectedFilterOptions returns option objects from option values", () => {
    const expectedResult:Option[] = [
      {
        value: 'a',
        label: 'a'
      }, {
        value: 'b',
        label: 'b'
      }, {
        value: 'c',
        label: 'c'
      }
    ];

    const actualResult = getSelectedFilterOptions(values);

    expect(actualResult).toEqual(expectedResult);
  });

  

  test("getSelectedNumbersFromSelectedOptions returns option objects from option values", () => {
    const options:Option[] = [
      {
        value: 'a',
        label: 'a'
      }, {
        value: 'b',
        label: 'b'
      }, {
        value: 'c',
        label: 'c'
      }
    ];

    const actualResult = getSelectedNumbersFromSelectedOptions(options);

    expect(actualResult).toEqual(values);
  });
});