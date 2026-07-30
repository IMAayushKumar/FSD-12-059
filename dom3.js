import { EventEmitter } from "events";
const button = new EventEmitter();

button.on("click", (username) => {
  console.log(`button is clicked by ${username} `);
});
button.emit("click","Aayush");
button.emit("click", "Aashu");
button.emit("click", "Payal");
button.emit("click", "Aanat");
button.emit("click")