import { mkdir } from "fs/promises";
import{rm}from"fs/promises";

await mkdir("uploads/resume",{recursive:true});
await mkdir("/upload/images")
// create directory 



//remove directory
await rm("uploads",{recursive:true})
