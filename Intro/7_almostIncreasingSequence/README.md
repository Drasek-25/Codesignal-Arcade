# Almost Increasing Sequence

## Challenge Text

Given a sequence of integers as an array, determine whether it is possible to obtain a strictly increasing sequence by removing no more than one element from the array.

*Note:* sequence `a0`, `a1`, ..., `an` is considered to be a strictly increasing if `a0 < a1 < ... < an`. Sequence containing only one element is also considered to be strictly increasing.

##### Example

- For `sequence = [1, 3, 2, 1]`, the output should be
  `almostIncreasingSequence(sequence) = false`.

  There is no one element in this array that can be removed in order to get a strictly increasing sequence.

- For `sequence = [1, 3, 2]`, the output should be
  `almostIncreasingSequence(sequence) = true`.

  You can remove `3` from the array to get the strictly increasing sequence `[1, 2]`. Alternately, you can remove `2` to get the strictly increasing sequence `[1, 3]`.

## Notes

This was the first challenge that really challenged me. I had initially written a recursive algorithm following this layout

##### Pseudocode

```
deletions = 1
recursiveFunction = () =>{
	for(i in sequence){
		if(i >= i+1){
			if(deletions === 0){
				return false
			}
			deletions --
			if(i-1 >= i+1) delete i+1
			else delete i

			recursiveFunction()
		}
	}
	return true
}
```

After working out the bugs in my code I could not seem to get all of the test cases. Unfortunately I was failing 2 hidden test cases, and despite my added custom tests I could not get it to fail myself. I eventually decided to write it a different way hoping that it somehow managed to not fail on hidden cases. 

For my second attempt I decided to take a brute force route. In an effort to avoid the brute force being too intensive I had the brute forcing happen only with something non sequential was detected at which point I sent the index and the surrounding 4 values and sent them to a helper function that would test the 5 item subarray 5 times, with 4/5 values each time to see if any of those 5 runs would give a sequential array.

##### Pseudocode

```
runTest = () => {
	testArr = array from i-2 to i+2
	for( each potential deletion){
		subTest = testArr without 1 value
		for(i in subTest){
			if(i >= i+1) fails++
		}
	}
	if(fails === number of tests) return false
	else return true
}

for(i in sequence){
	if(i >= i+1 or i-1 >= i+1)
		if a deletion has happened previously return false
		if(runTest(i)){
			deletio = true
			skip for loop past current tested indices
		} else return false
}

return true
```

As per usual, the brute forcing method will always solve a problem, as long as it doesn't hit a time limit, and making my brute force only run in small batches where needed this code passed muster. I still really want to know what hidden test cases were failing my previous code though.