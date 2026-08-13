import { readFile ,appendFile,writeFile} from "fs/promises";
const readData = async (filename)=>{
    try {
        const content= await readFile(filename,"utf-8");
        return content;
    } catch (error) {
        console.log("file not found Sorry !!!!!")
        
    }

};
const writeData=(filename,content)=>{
    try {
        await writeFile(filename,content);
    } catch (error) {
        console.log(error.message)
        
    }
};


const appendData= async(filename,content)=>{
    try {
        await appendFile(filename,content);
    } catch (error) {
        console.log(error.message)
        
    }

};
const deleteFile=async(filename)=>{
    try {
        
    } catch (error) {
        console.log("File not Found ")
        
    }
}
// if a function uses awwit keyword the function must be async 
const data =await readData("file5.js");
console.log(data);