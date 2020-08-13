function scheduleActivities(dayOfWeek) {
  switch (dayOfWeek) {
    case ("Monday"):
      return "Alan goes to the gym.";

    case ("Wednesday"):
      return "Nick goes dancing.";

    case ("Sunday"):
      return "The grandmother goes to church.";

    default:
      return "No events";
  }
}
let eventWednesday = scheduleActivities("Wednesday");
let eventSunday = scheduleActivities("Sunday");
let eventMonday = scheduleActivities("Monday");

console.log(eventWednesday, eventSunday, eventMonday);
