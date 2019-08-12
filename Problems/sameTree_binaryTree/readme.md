## How it works
This can be solved using recursion or iteratively. If solving iteratively, you need to maintain result so as to know if ever false came at any point. Where in recursive you don't need to maintain result as they keep returning byself in recursive calls.<br/>
### Using Recursion
1. Check if both are null. Return true in this case.
2. Check if any one of them is null but other is having value. Return false in this case.
3. At this point they both have values. Now check whether their values are same. Return false if not same.
4. Keep calling left and right of nodes recursively.

`isSameTreeNormalF` written in an elaborated way, so as to understand how it works.<br/>
`isSameTreeOptF` written in a short way.

## Notes
In every recursive call we check value is same or not, if it's to be different then false has to be returned at this point and stops processing further childs of that node.<br/>
If all values we keep getting same, then both of them should be null at some point, coz leaf nodes will be null.
