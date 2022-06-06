exports.picker = function(prices) {
    let earningPotential = 0
    let finalArr = []
    let buyDay = []
    let sellDay = []
    for(let i = 0; i < prices.length; i++){
        for(let j = i; j < prices.length; j++){
            if(prices[i] - prices[j] < earningPotential){
                earningPotential = prices[i] - prices[j]
                buyDay.push(i)
                sellDay.push(j)
            }
        }
    }
    finalArr.push(buyDay[0])
    finalArr.push(sellDay[sellDay.length - 1])
    return finalArr
}
