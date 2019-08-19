/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
  var pairs = {
      '(': ')',
      '[': ']',
      '{': '}'
  }
  const stack = [];
  for(let i=0; i<s.length;i++) {
      if(pairs[s[i]]) {
          stack.push(pairs[s[i]]);
      } else {
          if(stack.pop() !== s[i])
              return false
      }
  }
  return stack.length === 0;
};
