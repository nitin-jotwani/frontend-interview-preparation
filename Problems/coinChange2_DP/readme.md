## Coin Change - Dynamic Programming
Minimum denominations to get total from available denominations.<br/>
```
Coins: { 2, 3, 5, 10 }
Total: 15
If solution doesnt exists return -1.

Denominations Picked: {5, 10}
```
```
In this, DP table looks like this-
[ 
  [ 0, Infinity, 1, Infinity, 2, Infinity, 3, Infinity, 4, Infinity, 5, Infinity, 6, Infinity, 7, Infinity ],
  [ 0, Infinity, 1, 1, 2, 2, 2, 3, 3, 3, 4, 4, 4, 5, 5, 5 ],
  [ 0, Infinity, 1, 1, 2, 1, 2, 2, 2, 3, 2, 3, 3, 3, 4, 3 ],
  [ 0, Infinity, 1, 1, 2, 1, 2, 2, 2, 3, 1, 3, 2, 2, 3, 2 ] 
]
```
https://www.youtube.com/watch?v=J2eoCvk59Rc&list=PLdo5W4Nhv31aBrJE1WS4MR9LRfbmZrAQu&index=3

## Another way of solving
Using 2 1D array - https://www.youtube.com/watch?v=NJuKJ8sasGk