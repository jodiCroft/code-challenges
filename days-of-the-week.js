function daysOfTheWeek(s, k) {
  // Create an object to hold the days of the week and their corresponding day of the week
  const calendar = {
    1: "Monday",
    2: "Tuesday",
    3: "Wednesday",
    4: "Thursday",
    5: "Friday",
    6: "Saturday",
    7: "Sunday",
  };

  // If k = 7, then return s, because it will be exactly one week
  if (k === 7) {
    return s;
  }

  // Otherwise, divide k (which is the number of days after s) by 7 (which is how many days in a week), and grab the remainder (this happens by using modulo %) and add 1 to it becuase they are 1 indexed. And then return thaat day of the week from the calendar object.
  return calendar[(k % 7) + 1];
}

// s = day of the week
// k = integer between 0 and 500

// return the day of the week that occurs k number of days after s

// Always 7 days in the week
// Make an object that stores the days of the week and their corresponding day of the week
// {
//   1: 'Monday',
//   2: 'Tuesday',
//   3: 'Wednesday',
//   4: 'Thursday',
//   5: 'Friday',
//   6: 'Saturday',
//   7: 'Sunday'
// }

// monday = 1
// k = 2
// should be wed 3
// k%7 + 1
// if k is 7, return s

daysOfTheWeek("Monday", 11);
