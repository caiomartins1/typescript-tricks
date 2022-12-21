import { expect, it } from 'vitest';

// problem
// export const addTwoNumbers = (params) => {
//   return params.a + params.b;
// };

// solution
type Params = {
  a: number;
  b: number;
};
export const addTwoNumbers = (params: Params) => {
  return params.a + params.b;
};

// Key takeaways -> inline approach will result in more verbose error messages,
// type and interfaces are similar but interfaces only will work with objects

it('should be able to add two numbers', () => {
  expect(
    addTwoNumbers({
      a: 1,
      b: 2,
    }),
  ).toBe(3);
  expect(
    addTwoNumbers({
      a: 5,
      b: 5,
    }),
  ).toBe(10);
});
