console.log("Hello from new DSA assignment!");
/**
 * //> Primitive Datatypes
 */

const a = 1;
const b = "1";
const c = true;
const d = null;
const e = undefined;

// Bigint
// Number in JS is stored in 64 bits. The structure is

// * | Part                    | Bits | Purpose                                        |
// * | ----------------------- | ---- | ---------------------------------------------- |
// * | **Sign**                | 1    | Whether the number is positive or negative     |
// * | **Exponent**            | 11   | Determines the scale (magnitude) of the number |
// * | **Fraction (Mantissa)** | 52   | Holds the significant digits of the number     |

const bigInt = 1234567890123456789012345678901234567890n;


const array = [1, 2, 3]
const object = {
  a: "1",
  b: 3,
  c: [1, { 1: 2 }]
}

export {};