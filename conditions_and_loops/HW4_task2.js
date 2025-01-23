import * as Utils_HW4 from "./HW4_utils.js"

const averageGrade = 75;

Utils_HW4.checkInput(averageGrade);

switch (true) {
    case averageGrade < 60 : 
        console.log(Utils_HW4.Grade.UNSATISFACTORY);
        break;
    case averageGrade >= 60 && averageGrade <= 70 :
        console.log(Utils_HW4.Grade.SUFFICIENT);
        break;
    case averageGrade > 70 && averageGrade <= 80 :
        console.log(Utils_HW4.Grade.GOOD);
        break;
    case averageGrade > 80 && averageGrade <= 90 :
        console.log(Utils_HW4.Grade.VERY_GOOD);
        break;
    case averageGrade > 90 && averageGrade <= 100 :
        console.log(Utils_HW4.Grade.EXCELLENT);
        break;
    default:
        console.log(Utils_HW4.Grade.OUT_OF_RANGE);
}