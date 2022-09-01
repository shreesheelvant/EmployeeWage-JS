let totEmpWage = 0;
function sum(dailyWage) {
totEmpWage += dailyWage;
}
empDailyWageArr.forEach(sum);
console.log("UC7A - Total Days:" + totalWorkingDays +
            "Total Hrs: "+ totalEmpHrs + "Emp Wage:" + totalEmpWage); 

function totalWages(totalWage, dailyWage) {
    return totalWage + dailyWage;
}
console.log("UC7A - Emp Wage with reduce: " +
            empDailyWageArr.reduce(totalWages,0));
let dailyCntr = 0;
function mapDayWithWage(dailyWage) {
    dailyCntr++;
    return dailyCntr + " = " + dailyWage;
}
let mapDayWithWageArr = empDailyWageArr.map(mapDayWithWage);
console.log("UC78 - Daily Wage Map");
console.log(mapDayWithWageArr);
function fulltimeWage(dailyWage) {
    return dailyWage.includes("160");
}
let fullDayWageArr = mapDayWithWageArr.filter(fulltimeWage);
console.log("UC7 - Daily Wage Filter When Fulltime  Wage Earned");
console.log(fullDayWageArr);
