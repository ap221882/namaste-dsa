function maxFreqSum(s: string): number {
  let map = new Map();

  for (let i = 0; i < s.length; i++) {
    if (map.has(s[i])) {
      let ithVal = map.get(s[i])
      map.set(s[i], ++ithVal);
    } else {
      map.set(s[i], 1)
    }
  }

  const vowels = new Set(["a", "e", "i", "o", "u"])

  let maxVowels = 0
  let maxConsonants = 0

  // or loop over the Set
  // o(1), because max 26 letters possible if Set is used
  map.forEach((val, key) => {
    if (vowels.has(key)) {
      if (val > maxVowels) {
        maxVowels = val;
      }
    } else {
      if (val > maxConsonants) {
        maxConsonants = val;
      }
    }
  })

  return maxConsonants + maxVowels
};