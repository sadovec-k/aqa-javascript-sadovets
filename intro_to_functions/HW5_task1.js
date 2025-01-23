
function squareOfRectangle(height, width) {
    return height * width;
}

console.log(`Square of the rechtangle is ${squareOfRectangle(3, 7)}`);

//Function Exeption
const squareOfRechtangle_Expression = function(height, width) {
    return `Square of the rechtangle is ${height * width}`;
}

console.log(squareOfRechtangle_Expression(5, 7));

//Arrow Function Exeption
const squareOfRechtangle_arrow_Expression = (height, width) => {
    return `Square of the rechtangle is ${height * width}`;
}

console.log(squareOfRechtangle_arrow_Expression(4, 8));