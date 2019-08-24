Find the subset which sum is equal to given weight.
```
Input: {2,3,5,7,10}
Total: 14
```
```
Subset = {2,5,7}
```
```
In this, DP Table looks like this-
[ [ 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ],
  [ 1, 0, 1, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0 ],
  [ 1, 0, 1, 1, 0, 1, 0, 1, 1, 0, 1, 0, 0, 0, 0 ],
  [ 1, 0, 1, 1, 0, 1, 0, 1, 1, 1, 1, 0, 1, 0, 1 ],
  [ 1, 0, 1, 1, 0, 1, 0, 1, 1, 1, 1, 0, 1, 1, 1 ] ]
```
https://www.youtube.com/watch?v=dJmyfFC3-3A&list=PLdo5W4Nhv31aBrJE1WS4MR9LRfbmZrAQu&index=6