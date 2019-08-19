# How it works
- Keep comparing no and it's adjacent i.e. `j & j+1`
- If `j` is greater then swap and compare next two
- Continue doing this. Last no will get placed at end

# Notes
- Max numbers are kept placing into end of array. So, need to reduce loop from end i.e. `n-i` but we comparing one element next also `j+1` so `n-i-1` to avoid undefined
- Complexity is O(n^2)