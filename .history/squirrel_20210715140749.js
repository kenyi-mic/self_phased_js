let day1 = {
  squirrel: false,
  events: ["work", "touched tree", "pizza", "running"],
};
console.log(day1.squirrel);

console.log(day1.wolf);

day1.wolf = false;
console.log(day1.wolf);
console.log(day1.events);
let occa = day1.events.map((event) => {
  console.log(event);
});
