import { expect, it } from 'vitest';

// problem
// export const getName = (params: { first: string; last: string }) => {
//   if (params.last) {
//     return `${params.first} ${params.last}`;
//   }

//   return params.first;
// };

// solution
type Params = { first: string; last?: string };

export const getName = (params: Params) => {
  if (params.last) {
    return `${params.first} ${params.last}`;
  }

  return params.first;
};

it('should be able to retrieve the first name', () => {
  expect(
    getName({
      first: 'Caio',
    }),
  ).toBe('Caio');
});

it('should be able to retrieve the first and last name', () => {
  expect(
    getName({
      first: 'Caio',
      last: 'Test',
    }),
  ).toBe('Caio Test');
});
