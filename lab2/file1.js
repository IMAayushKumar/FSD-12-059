// import { writeFile,appendFile } from "fs/promises";
import { writeFile, appendFile,readFile } from "fs/promises";

// await writeFile("hello.txt","Hello JS");
await appendFile("hello.txt","\n JS is much easy than othe r. ❤️❤️")
// asynchronous type of file 
await appendFile("hello.txt", "\naayush kumar ");
const content=await readFile("hello.txt","utf-8")
console.log(content);


