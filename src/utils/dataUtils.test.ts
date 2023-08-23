import { filterData, updateMod20002Filters, updateMod350Filters, updateMod8000Filters } from "./dataUtils";
import { DataRow } from "./types";

describe("Data Utility function", () => {
  const initialData: DataRow[] = [
    {
      number: '700567',
      mod350: '112',
      mod8000: '3395',
      mod20002: '16251'
    },
    {
      number: '24100',
      mod350: '300',
      mod8000: '100',
      mod20002: '4098'
    },
    {
      number: '300',
      mod350: '300',
      mod8000: '300',
      mod20002: '300'
    },
    {
      number: '670521',
      mod350: '40',
      mod8000: '4602',
      mod20002: '3742'
    },
    {
      number: '376582',
      mod350: '345',
      mod8000: '7783',
      mod20002: '661'
    },
    {
      number: '31838',
      mod350: '151',
      mod8000: '6109',
      mod20002: '17190'
    },
    {
      number: '148939',
      mod350: '13',
      mod8000: '7146',
      mod20002: '17087'
    },
    {
      number: '915435',
      mod350: '222',
      mod8000: '1855',
      mod20002: '4593'
    },
  ]
  
  test("filterData should return correct filtered data", () => {
    const mod350SelectedValues:string [] = ['300'];
    const mod8000SelectedValues:string [] = ['100', '300'];
    const mod20002SelectedValues:string [] = [];

    const expectedResult: DataRow[] = [
      {
        number: '24100',
        mod350: '300',
        mod8000: '100',
        mod20002: '4098'
      },
      {
        number: '300',
        mod350: '300',
        mod8000: '300',
        mod20002: '300'
      }
    ]

    const actualResult: DataRow[] = filterData(initialData, mod350SelectedValues, mod8000SelectedValues, mod20002SelectedValues);

    expect(actualResult).toEqual(expectedResult);
  });

  test("updateMod350Filters returns unique mod 350 values in sorted order", () => {
    const expectedResult = ['13', '40', '112', '151', '222', '300', '345']
    const actualResult = updateMod350Filters(initialData)
    expect(actualResult).toEqual(expectedResult);
  });

  test("updateMod8000Filters returns unique mod 350 values in sorted order", () => {
    const expectedResult = ['100', '300', '1855', '3395', '4602', '6109', '7146', '7783']
    const actualResult = updateMod8000Filters(initialData)
    expect(actualResult).toEqual(expectedResult);
  });

  test("updateMod20002Filters returns unique mod 350 values in sorted order", () => {
    const expectedResult = ['300', '661', '3742', '4098', '4593', '16251', '17087', '17190']
    const actualResult = updateMod20002Filters(initialData)
    expect(actualResult).toEqual(expectedResult);
  });
});