import { ShortNumberPipe } from './short-number.pipe';

describe('ShortNumberPipe', () => {
  it('should convert mumber to short number', () => {
    const pipe = new ShortNumberPipe();
    expect(pipe.transform(1000)).toEqual('1K');
  });
});
