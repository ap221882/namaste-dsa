// brute force
function sellBuyStocks(stocks: number[]): number {

  let maxProfit = 0

  for (let i = 0; i < stocks.length; i++) {
    for (let j = 0; j < i; j++) {
      if (stocks[i] > stocks[j]) {
        if (maxProfit < (stocks[i] - stocks[j])) {
          maxProfit = stocks[i] - stocks[j]
        }
      }
    }
  }

  return maxProfit
}



function sellBuyStocks2(stocks: number[]) {

  let minimumValue = stocks[0]
  let maxProfit = 0

  for (let i = 1; i < stocks.length; i++) {
    if ((stocks[i] - minimumValue) > maxProfit) {
      maxProfit = (stocks[i] - minimumValue)
    }

    if (stocks[i] < minimumValue) {
      minimumValue = stocks[i]
    }
  }

  return maxProfit

}

const result = sellBuyStocks2([7, 1, 5, 3, 6, 4])
console.log('====================================');
console.log(result);
console.log('====================================');