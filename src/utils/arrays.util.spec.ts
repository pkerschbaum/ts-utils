import { arrays } from '~/utils/arrays.util';
import { objects } from '~/utils/objects.util';

describe('arrays.util', () => {
  it('flatten', () => {
    const input = [
      [1, 2],
      [3, 4],
    ];
    const originalInput = objects.deepCopyJson(input);

    const output = arrays.flatten(input);

    expect(output).toEqual([1, 2, 3, 4]);
    expect(input).toEqual(originalInput);
  });
});
