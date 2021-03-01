# checkPalindrome

## Challenge Text

Given the string, check if it is a [palindrome](keyword://palindrome).

##### Example

- For `inputString = "aabaa"`, the output should be
  `checkPalindrome(inputString) = true`;
- For `inputString = "abac"`, the output should be
  `checkPalindrome(inputString) = false`;
- For `inputString = "a"`, the output should be
  `checkPalindrome(inputString) = true`.

## Notes

So for this challenge my first idea, and the one I went forward with, was to run a for loop and check the front index, and the last index, moving both towards the middle each iteration. I would check both the front and back indexes to see if they had a letter match.

##### Pseudocode

```
for (half the length of input){
	if(front index !== back index) return false
}
return true
```

This was a simple challenge and was fine tuned without too much issue, only had to play around with the back index and the for loop conditional.