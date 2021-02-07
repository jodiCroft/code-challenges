function daysOfTheWeek(s, k) {
  // Create an object to hold the days of the week
  const calendar = {
    Monday: 0,
    Tuesday: 1,
    Wednesday: 2,
    Thursday: 3,
    Friday: 4,
    Saturday: 5,
    Sunday: 6,
  };

  const reverse = {
    0: "Monday",
    1: "Tuesday",
    2: "Wednesday",
    3: "Thursday",
    4: "Friday",
    5: "Saturday",
    6: "Sunday",
  };

  // If k = 7, then return s, because it will be exactly one week
  if (k === 7) {
    return s;
  }

  return reverse[(calendar[s] + k) % 7];
}

// s = day of the week
// k = integer between 0 and 500

// return the day of the week that occurs k number of days after s

// Always 7 days in the week

// if k is 7, return s

// Should return Monday:
daysOfTheWeek("Saturday", 8);
