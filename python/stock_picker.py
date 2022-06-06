def picker(prices):
    earning_potential = 0
    final_arr = []
    buy_day = []
    sell_day = []

    for i in range(0,len(prices),1):
        for j in range(i, len(prices), 1):
            if prices[i] - prices[j] < earning_potential:
                earning_potential = prices[i] - prices[j]
                buy_day.append(i)
                sell_day.append(j)
    final_arr.append(buy_day[0])
    final_arr.append(sell_day[-1])
    return final_arr
