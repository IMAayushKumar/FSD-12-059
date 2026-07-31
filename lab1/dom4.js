import { EventEmitter } from "events";
const form = new EventEmitter();

form.on("submit",(username,password)=>{
    console.log(`form submitted`);
    console.log(`username:${username}`);
      console.log(`password:${password}`);
})

form.emit("submit","aayush123👍","1234567890")