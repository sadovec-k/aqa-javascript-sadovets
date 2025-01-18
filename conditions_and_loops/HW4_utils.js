export function checkInput(value) {
    if (!Number.isFinite(value)) { 
        throw new Error("Input isn't a number"); 
    }
    return value;
}

export const Grade = {
    UNSATISFACTORY : "Unsatisfactory",
    SUFFICIENT : "Sufficient",
    GOOD : "Good",
    VERY_GOOD : "Very good",
    EXCELLENT : "Excellent",
    OUT_OF_RANGE : "Please, input correct average grade"
}