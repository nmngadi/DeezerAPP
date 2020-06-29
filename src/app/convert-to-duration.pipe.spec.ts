import { ConvertToDurationPipe } from './convert-to-duration.pipe';

describe('ConvertToDurationPipe', () => {
  it('Convert to duration', () => {
    // Arrange
    const pipe = new ConvertToDurationPipe();
    const expectedValue = '5:57';
    // Act
    const actualValue = pipe.transform(357);
   // Assert
    expect(actualValue).toBe(expectedValue);
  });
});
