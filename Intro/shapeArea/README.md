# shapeArea

## Challenge Text

Below we will define an `n`-interesting polygon. Your task is to find the area of a polygon for a given `n`.

A `1`-interesting polygon is just a square with a side of length `1`. An `n`-interesting polygon is obtained by taking the `n - 1`-interesting polygon and appending `1`-interesting polygons to its rim, side by side. You can see the `1`-, `2`-, `3`- and `4`-interesting polygons in the picture below.
![shapeAreaImage](https://codesignal.s3.amazonaws.com/tasks/shapeArea/img/area.png?_tm=1582090003453)

##### Example

- For `n = 2`, the output should be
  `shapeArea(n) = 5`;
- For `n = 3`, the output should be
  `shapeArea(n) = 13`.

## Notes

In this challenge I was able to draw on some of my experience in my former career as a CAD detailer. Knowing that usually when dealing with polygons there is some sort of formulaic similarity between them. So in this challenge I began writing down different numbers associated with the n 1-5. I noticed that that the difference on squares between each squares was `4 * (n - 1)`. This was enough to solve the challenge.

I had a lot of fun solving this one as I had some prior experience in dealing with geometric problems.