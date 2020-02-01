import { ReversePipe } from './reverse.pipe';

describe('ReversePipe', () => {
  it('create an instance', () => {
    const pipe = new ReversePipe();
    expect(pipe).toBeTruthy();
  });

  it('transform work right', () => {
    const pipe = new ReversePipe();
    expect(pipe.transform('123')).toBe('321');
  });

  it('should throw error', () => {
    const pipe = new ReversePipe();
    expect(() => { // если хотим использовать toThrowError, то нада в expect передать функцию
      pipe.transform(123);
    }).toThrowError('Parameter in ReversePipe should be string');
  });
});
