/*
  Створіть функцію (isWeekend), яка приймає день тижня (з вашого enum)
  і повертає boolean значення, що вказує, чи це день робочий чи вихідний.
*/

enum Day {
  MON,
  TUE,
  WED,
  THU,
  FRI,
  SAT,
  SUN,
}

function isWeekend(day: Day): boolean {
  if (day === 5 || day === 6) {
    return true;
  } else {
    return false;
  }
}

console.log(isWeekend(Day.SUN));
