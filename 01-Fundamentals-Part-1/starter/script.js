/*

  1. Store Mark's and John's mass and height in variables
  2. Calculate both their BMIs usying the formula 
  3. Create a boolean variable 'markHigherBMI' containing information about whther Mark has higher BMI than John

*/

const massMark = 78;
const heightMark = 1.69;
const massJohn = 92;
const heightJohn = 1.95;

const BMICalculator = (height, mass) => {
  return mass / height ** 2;
};

const BMIMark = BMICalculator(heightMark, massMark);
const BMIJohn = BMICalculator(heightJohn, massJohn);

if (BMIMark > BMIJohn) {
  console.log("marks bmi is higher than johns");
} else {
  console.log("john's is higher");
}
