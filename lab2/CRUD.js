import Readline  from "readline/promises";
import {stdin,stdout  } from "process";


const main= async()=>{
    let choice;
    const cin =Readline.createInterface({input:stdin,output:stdout});

    console.log("Welcome to Amazon 🤑🤑")
    console.log('1..............Show Cart')
    console.log("2..............Add product");
    console.log("3..............Remove product");
    console.log("4..............Update quntity");
    console.log("5..............Cheakout");
    choice = await cin.question("Enter your choice:")
    while(choice!=5);
    cin.close();
    switch (choice) {
        case 1:
            console.log("Show Product")
            break;
    
        case 2:
            console.log("Product added")
            break;
        case 3:
            console.log("Remove product")
            break;
        case 4:
        console.log("UPdate product quantity")
            break;
        case 5:
            console.log("See you Later");
            break;
        case 6:
            console.log("Invalid Choice! TRy again 😆")

    
    cin.close();

};
main();}
