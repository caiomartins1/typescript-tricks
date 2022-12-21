import { expect, it } from 'vitest';

// problem
// export const addTwoNumbers = (a, b) => {
//   return a + b;
// };

// solution
export const addTwoNumbers = (a: number, b: number) => {
  return a + b;
};

it('should be able to add two numbers', () => {
  expect(addTwoNumbers(1, 2)).toBe(3);
  expect(addTwoNumbers(5, 5)).toBe(10);
});
