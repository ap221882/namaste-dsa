let regex = /[a-z0-9]/

function isPalindrome(s: string): boolean {
  let strArr = s.split("");
  let filtered = []

  for (let i = 0; i < s.length; i++) {
    if (regex.test(strArr[i])) {
      filtered.push(strArr[i])
    }
  }

  let reversedString = filtered

  let start = 0;
  let end = reversedString.length - 1;

  while (start < end) {
    let temp = reversedString[start];
    reversedString[start] = reversedString[end]
    reversedString[end] = temp;

    start++;
    end--;
  }

  let x = reversedString.join("");
  return x === filtered.join("")

};



function isPalindrome2(s: string): boolean {
  let filtered = ''
  let reversed = ''

  for (let i = 0; i < s.length; i++) {
    if (regex.test(s[i])) {
      filtered = filtered + s[i].toLowerCase()
    }
    if (regex.test(s[s.length - i - 1])) {
      reversed = reversed + s[s.length - i - 1].toLowerCase()
    }
  }

  return reversed === filtered

};

function isPalindrome3(s: string): boolean {
  let ls = s.toLowerCase();

  let i = 0;
  let j = ls.length - 1;

  while (i < j) {
    if (!regex.test(ls[i])) {
      i++;
      continue;
    }
    if (!regex.test(ls[j])) {
      j--;
      continue;
    }

    if (ls[i] !== ls[j]) {
      return false;
    }

    i++;
    j--;
  }

  return true
};