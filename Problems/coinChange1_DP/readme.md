## Coin Change - Dynamic Programming
Total no. of ways to get total from available denominations.<br/>
```
Coins: { 2, 3, 5, 10 }
Total: 15
```
```
In this, DP table looks like this-
[ [ 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1 ],
  [ 1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8 ],
  [ 1, 1, 2, 3, 4, 5, 7, 8, 10, 12, 14, 16, 19, 21, 24, 27 ],
  [ 1, 1, 2, 3, 4, 6, 8, 10, 13, 16, 20, 24, 29, 34, 40, 47 ],
  [ 1, 1, 2, 3, 4, 6, 8, 10, 13, 16, 21, 25, 31, 37, 44, 53 ] ]
```
https://www.youtube.com/watch?v=L27_JpN6Z1Q&list=PLdo5W4Nhv31aBrJE1WS4MR9LRfbmZrAQu&index=2