# Matrix Elements Sum

## Challenge Text

- After becoming famous, the CodeBots decided to move into a new building together. Each of the rooms has a different cost, and some of them are free, but there's a rumour that all the free rooms are haunted! Since the CodeBots are quite superstitious, they refuse to stay in any of the free rooms, **or any of the rooms below any of the free rooms**.
  
Given `matrix`, a rectangular matrix of integers, where each value represents the cost of the room, your task is to return the total sum of all rooms that are suitable for the CodeBots (ie: add up all the values that don't appear below a `0`).
  
  **Example**
  
  - For
  
    ```
    matrix = [[0, 1, 1, 2], 
              [0, 5, 0, 0], 
              [2, 0, 3, 3]]
    ```
  
    the output should be
    `matrixElementsSum(matrix) = 9`.
  
    ![example 1](https://codesignal.s3.amazonaws.com/tasks/matrixElementsSum/img/example1.png?_tm=1582038746746)
  
    There are several haunted rooms, so we'll disregard them as well as any rooms beneath them. Thus, the answer is `1 + 5 + 1 + 2 = 9`.
  
  - For
  
    ```
    matrix = [[1, 1, 1, 0], 
              [0, 5, 0, 1], 
              [2, 1, 3, 10]]
    ```
  
    the output should be
    `matrixElementsSum(matrix) = 9`.
  
    ![example 2](https://codesignal.s3.amazonaws.com/tasks/matrixElementsSum/img/example2.png?_tm=1582038747009)
  
    Note that the free room in the final column makes the full column unsuitable for bots (not just the room directly beneath it). Thus, the answer is `1 + 1 + 1 + 5 + 1 = 9`.

## Notes

This was a fun challenge to solve. I decided the best way to solve this was to create an array called haunt. I would make this array the same width as the matrix, and would use this to verify whether we have detected a haunting for that column of rooms yet. This would allow me to easily keep track of columns that were haunted, and purchase rooms that are safe.

##### Pseudocode

```
haunt = []
for(rows in matrix){
	for(columns in matrix){
		if column is haunted, change that haunt index to haunted
		if column isnt haunted and the column in haunt is clear
        	add the price of the room to the total
	}
}
return total price
```

