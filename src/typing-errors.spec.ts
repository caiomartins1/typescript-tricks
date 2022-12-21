import { expect, it } from 'vitest';

// problem
// const tryCatchDemo = (state: "fail" | "succeed") => {
//   try {
//     if (state === "fail") {
//       throw new Error("Failure!");
//     }
//   } catch (e) {
//     return e.message;
//   }
// };

// solution
const tryCatchDemo = (state: 'fail' | 'succeed') => {
  try {
    if (state === 'fail') {
      throw new Error('Failure!');
    }
  } catch (e) {
    // return (e as Error).message;
    if (e instanceof Error) {
      return e.message;
    }
  }
};

it('Should return the message when it fails', () => {
  expect(tryCatchDemo('fail')).toEqual('Failure!');
});
