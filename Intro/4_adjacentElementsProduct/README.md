# adjacentElementsProduct

## Challenge Text

Given an array of integers, find the pair of adjacent elements that has the largest product and return that product.

##### Example

For `inputArray = [3, 6, -2, -5, 7, 3]`, the output should be
`adjacentElementsProduct(inputArray) = 21`.

`7` and `3` produce the largest product.

## Notes

Very simple challenge. Just need to iterate through the array checking neighbor pairs and see what the largest number they can produce is

##### Pseudocode

```
int largestNumber
for(length of array - 1){
	if ( largestNumber < current index * next index) largestNumber = product
}
return 
```

I believe the only thing that I had to fine tune was that I was originally adding the values together, when this problem requires I multiply, and setting the largestNumber variable to the smallest integer available.