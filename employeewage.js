const MAX_HRS_IN_MONTH = 160;
const NUM_OF_WORKING_DAYS = 20;
let totalEmpHrs = 0;
let totalWorkingsDays = 0;
let empDailyWageArr = new Array();
let empDailyWageMap = new Map();

function calDailyWage(empHrs) {
    return empHrs*WAGE_PER_HOUR;
}

while (totalEmpHrs <= MAX_HRS_IN_MONTH &&
          totalWorkingDays < NUM_OF_WORKING_DAYS) {
            totalWorkingDays++;
            let empCheck = Math.floor(Math.random() * 10) % 3;
            let empHrs = getWorkingHours(empCheck);
            totalEmpHrs += empHrs;
            empDailyWageMap.set(totalWorkingDays, calcDailyWage(empHrs));
          }
          console.log(empDailyWageMap);
          function totalWages(totalWage, dailyWage) {
            return totalWage + dailyWage;
          }
          console.log("UC7A - Emp Wage Map totalHrs: " +
            Array.from(empDailyWageMap.values()).reduce(totalWages, 0));