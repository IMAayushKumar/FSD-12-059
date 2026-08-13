import { fstat } from "fs";
import { stat } from "fs/promises";

const stat = await stat("file3.js");
console.log("file size",fstat.size,"bytes");
console.log(`is file:${fstat.isFile()}`);
console.log(`is folder:${fstat.isFolder()}`);
console.log(`is syslink:${fstat.isSymbolicLink()}`);
console.log(`is created:${fstat.birthtime}`);
console.log(`Last used :${fstat.atime}`);
