# Make Array Consecutive 2

## Challenge Text

Ratiorg got `statues` of *different* sizes as a present from CodeMaster for his birthday, each statue having an non-negative integer size. Since he likes to make things perfect, he wants to arrange them from smallest to largest so that each statue will be bigger than the previous one exactly by `1`. He may need some additional statues to be able to accomplish that. Help him figure out the minimum number of additional statues needed.

##### Example

For `statues = [6, 2, 3, 8]`, the output should be
`makeArrayConsecutive2(statues) = 3`.

Ratiorg needs statues of sizes `4`, `5` and `7`.

## Notes

This challenge had me questioning which route would be most performant. On one hand I could sort the array, and then count the difference between the values in the array to get the needed statues.

##### Pseudocode

```
array.sort()
for(each statue){
	answer += statue[i+1] - statue[i]
}
return answer
```

 And on the other hand.

##### Pseudocode

```
let max = Max(...arr)
let min = Min(...arr)
for(from min to max){
	if (arr.indexof(i) === -1) count +=1
}
return count
```

I decided to go with the first solution option as indexing an array in a for loop seems like it would be an unnecessary amount of iteration. I imagine there may also be a trick way to use the total sum of the array vs what the total sum should be to find missing statues, but I could not figure out that method (if it exists).
While working on this code the only things I had to fine tune was adding an if statement to handle empty arrays, and in the math of `statue[i+1] - statue[i]` I needed to subtract a 1 from the total `statue[i+1] - statue[i] - 1`  because `4-3 === 1` when it should not be counted in this algorithm .