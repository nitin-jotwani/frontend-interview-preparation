## Coin Change - Dynamic Programming
Minimum denominations to get total from available denominations.<br/>
```
Coins: { 2, 3, 5, 10 }
Total: 15

Denominations Picked: {5, 10}
```
```
In this, DP table looks like this-
[ [ 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15 ],
  [ 0, 1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8 ],
  [ 0, 1, 1, 1, 2, 2, 2, 3, 3, 3, 4, 4, 4, 5, 5, 5 ],
  [ 0, 1, 1, 1, 2, 1, 2, 2, 2, 3, 2, 3, 3, 3, 4, 3 ],
  [ 0, 1, 1, 1, 2, 1, 2, 2, 2, 3, 1, 2, 2, 2, 3, 2 ] ]
```
https://www.youtube.com/watch?v=J2eoCvk59Rc&list=PLdo5W4Nhv31aBrJE1WS4MR9LRfbmZrAQu&index=3