import { writeFile,appendFile } from "fs/promises";

// await writeFile("hello.txt","Hello JS");
await appendFile("hello.txt","\nFS is much easy than other.")
