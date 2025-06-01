import { Nullable } from '@vitest/utils';

function isEligibleToVote(age: number): Nullable<boolean> {
  if (age < 0) {
    console.log('====================================');
    console.log('Invalid input');
    console.log('====================================');
    return null
  }

  if (age >= 18) {
    return true
  } else {
    return false
  }
}


// OR

function isEligibleToVote2(age: number): boolean {
  return age >= 18
}



function isEven(num: number): Nullable<boolean> {
  if (num < 0) {
    console.log('====================================');
    console.log('Invalid input');
    console.log('====================================');
    return null
  }
  return num % 2 === 0
}

export { isEligibleToVote, isEligibleToVote2, isEven };