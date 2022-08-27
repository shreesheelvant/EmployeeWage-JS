function getWorkingHours(empCheck) {
    switch (empCheck) {
        case IS_PART_TIME:
          return PART_TIME_HOURS;
        case IS_FULL_TIME:
          return FULL_TIME_HOURS;
        default:
        return 0;
    }
}
let empHrs = 0;
let empCheck = Math.floor(Math.random() * 10) % 3;
empHrs = getWorkingHours(empCheck);
let empWage = empHrs * WAGE_PER_HOUR;
console.log("Emp Wage: " + empWage);