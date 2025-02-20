import * as Utils_HW4 from "./HW4_utils.js";

const averageGrade = 75;

Utils_HW4.checkInput(averageGrade);

if (averageGrade < 60) {
	console.log(Utils_HW4.Grade.UNSATISFACTORY);
} else if (averageGrade >= 60 && averageGrade <= 70) {
	console.log(Utils_HW4.Grade.SUFFICIENT);
} else if (averageGrade > 70 && averageGrade <= 80) {
	console.log(Utils_HW4.Grade.GOOD);
} else if (averageGrade > 80 && averageGrade <= 90) {
	console.log(Utils_HW4.Grade.VERY_GOOD);
} else if (averageGrade > 90 && averageGrade <= 100) {
	console.log(Utils_HW4.Grade.EXCELLENT);
} else {
	console.log(Utils_HW4.Grade.OUT_OF_RANGE);
}
