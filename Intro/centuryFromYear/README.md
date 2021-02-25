# centuryFromYear

## Challenge Text

Given a year, return the century it is in. The first century spans from the year 1 up to and including the year 100, the second - from the year 101 up to and including the year 200, etc.

#### Example

- For `year = 1905`, the output should be
  `centuryFromYear(year) = 20`;
- For `year = 1700`, the output should be
  `centuryFromYear(year) = 17`.

## Notes

I had considered a few different routes, mostly including trying to deal with the problem strictly mathematically until I ultimately decided to split up the year and handle this in a way I thought would be easy to read. I decided to convert the year into a string to have access to string methods which I thought would be beneficial to achieve this. By doing it this way I could grab the first 2 digits off of the front and handle them separately from the remaining digits.

##### Pseudo Code:

```
century = first 2 digits of year

for(all remaining digits of year){
	if year digit > 0 return century + 1
}

return century
```

This was my plan, the only thing I had to change after the fact was that I needed a condition to handle years of the 1st century which would confuse my string slice, I did this by adding `if(!century) return 1`