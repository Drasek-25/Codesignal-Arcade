function shapeArea(n) {
    let increment = 4
    let area = 1
    for(let i = 2; i <= n; i++){
        area += increment
        increment += 4
    }
    return area
}