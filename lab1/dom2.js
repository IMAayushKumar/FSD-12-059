import { EventEmitter } from "events";
const button = new EventEmitter();

button.on("click", () => {
  console.log("task1 ");
});
button.on("click", () => {
  console.log("task2 ");
});

button.emit("click");
