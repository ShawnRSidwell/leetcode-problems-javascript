/*
20. Valid Parentheses
https://leetcode.com/problems/valid-parentheses/

Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

An input string is valid if:

Open brackets must be closed by the same type of brackets.
Open brackets must be closed in the correct order.
Every close bracket has a corresponding open bracket of the same type.


Example 1:

Input: s = "()"
Output: true
Example 2:

Input: s = "()[]{}"
Output: true
Example 3:

Input: s = "(]"
Output: false


Constraints:

1 <= s.length <= 104
s consists of parentheses only '()[]{}'.
 */

/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
  const comps = new Map();
  comps.set(")", "(");
  comps.set("}", "{");
  comps.set("]", "[");

  const symbols = [];
  for (let i = 0; i < s.length; i++) {
    if (
      symbols.length > 0 &&
      symbols.at(symbols.length - 1) === comps.get(s.charAt(i))
    ) {
      symbols.pop();
    } else {
      symbols.push(s.charAt(i));
    }
  }
  return symbols.length === 0;
};

console.log(isValid("()[]{}"));
