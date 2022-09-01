function findFulltimeWage(dailyWage) {
return dailyWage.includes("160");
}
console.log("UC7D - First time wage was earned on Day:"+
            mapDayWithWageArr.find(findFulltimeWage));

function isAllFulltimeWage(dailyWage) {
    return dailyWage.includes("160");
}
console.log("UC 6E - Check All Element have Full Time Wage: " +
            fullDayWageArr.every(isAllFulltimeWage));

function isAnyPartTimeWage(dailyWage) {
   return dailyWage.includes("80");
}
console.log("UC7F - Check If Any Part Time Wage : " +
             mapDayWithWageArr.some(isAnyPartTimeWage));

function totalDaysWorked(numOfDays, dailyWage) {
    if (dailyWage > 0) return numOfDays+1;
    return numOfDays;
}
console.log("UC 7G - Number of Days Emp Worked: "+
              empDailyWageArr.reduce(totalDaysWorked,0));
