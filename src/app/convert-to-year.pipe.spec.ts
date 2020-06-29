import { ConvertToYearPipe } from './convert-to-year.pipe';

describe('ConvertToYearPipe', () => {
  it('Should convert date to year ', () => {
   const pipe = new ConvertToYearPipe();
   const actualValue = pipe.transform('2020-01-31');
   const expectedValue = '2020';
   expect(actualValue).toBe(expectedValue);
  });
});
