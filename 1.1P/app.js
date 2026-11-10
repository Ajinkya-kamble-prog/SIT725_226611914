// SIT725 1.1P - introductory JavaScript / Node.js activity

const studentName = "Ajinkya";
const unitCode = "SIT725";

// Function with parameters and a return value
function buildGreeting(name, unit) {
  return `Hello ${name}, welcome to ${unit}!`;
}

// Array + loop + conditional
const weeklyHours = [2, 4, 3, 5, 1];
let totalHours = 0;
for (const hours of weeklyHours) {
  totalHours += hours;
}
const averageHours = totalHours / weeklyHours.length;

// Object + array method
const topics = [
  { name: "JavaScript", done: true },
  { name: "Git", done: true },
  { name: "Node.js", done: false },
];
const pending = topics.filter((t) => !t.done).map((t) => t.name);

console.log(buildGreeting(studentName, unitCode));
console.log(`Total study hours: ${totalHours}`);
console.log(`Average per day: ${averageHours.toFixed(1)}`);
console.log(averageHours >= 3 ? "Good pace" : "Increase study time");
console.log(`Topics still to cover: ${pending.join(", ")}`);