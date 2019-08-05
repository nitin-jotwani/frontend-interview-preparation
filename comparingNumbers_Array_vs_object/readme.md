Nested for loop reduced to single for loop

```
for(let i=0;i<nums.length;i++) {
        for(let j=0;j<nums.length && i!==j;j++) {
            if (nums[i]+nums[j] === target) {
                if(i>j)
                    return [j,i]
                return [i,j];
            }
        }
    }
```

```
for(let i=0; i<nums.length; i++){
        if(comp[nums[i] ]>=0){
            return [ comp[nums[i] ] , i]
        }
        comp[target-nums[i]] = i
    }
```
