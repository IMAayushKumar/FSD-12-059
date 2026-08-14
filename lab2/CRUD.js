import Readline from "readline/promises";
import { stdin, stdout } from "process";
import { readFile, writeFile } from "fs/promises";
const FILE = "product.json";
const getCart = async () => {
  const data = await readFile(FILE, "utf-8");
  return JSON.parse(data);
};

const saveCart = async (myCart) => {
  await writeFile(FILE, JSON.stringify(myCart, null, 2));
};

const addTOCart = async (product) => {
  const myCart = await getCart();
  const isFound = myCart.find((item) => item.id === product.id);
  if (isFound) {
    isFound.qty += product.qty;
  } else {
    myCart.push(product);
  }
  await saveCart(myCart);
  console.log(`product added/updated with id ${product.id} into cart `);
};

const removeFromCart = async (productId) => {
  const myCart = await getCart();
  const index = myCart.findIndex((item) => item.id == productId);
  if (index !== -1) {
    myCart.splice(index, 1);
    await saveCart(myCart);
    console.log(`product with id ${productId} removed from cart`);
  } else {
    console.log("Product not found!");
  }
};

const updateQuantity = async (productId, newQty) => {
  const myCart = await getCart();
  const product = myCart.find((item) => item.id == productId);
  if (product) {
    product.qty = newQty;
    await saveCart(myCart);
    console.log(`product id ${productId} quantity updated to ${newQty}`);
  } else {
    console.log("Product not found!");
  }
};

const showCart = async () => {
  const myCart = await getCart();
  if (myCart.length === 0) {
    console.log("Cart is empty!");
  } else {
    console.log("\n=== Your Cart ===");
    myCart.forEach((item) => {
      console.log(
        `ID: ${item.id}, Name: ${item.name}, Price: ${item.price}, Qty: ${item.qty}`,
      );
    });
    console.log("================\n");
  }
};

const main = async () => {
  let choice;
  const cin = Readline.createInterface({ input: stdin, output: stdout });

  console.log("Welcome to Amazon 🤑🤑");
  console.log("1..............Show Cart");
  console.log("2..............Add product");
  console.log("3..............Remove product");
  console.log("4..............Update quntity");
  console.log("5..............Cheakout");

  do {
    choice = await cin.question("Enter your choice:");
    switch (Number(choice)) {
      case 1:
        await showCart();
        break;

      case 2:
        const data = await cin.question("Enter (id,name,price,qty): ");
        const [id, name, price, qty] = data
          .split(",")
          .map((item) => item.trim());
        const product = {
          id: id,
          name: name,
          price: Number(price),
          qty: Number(qty),
        };
        await addTOCart(product);
        break;

      case 3:
        const removeId = await cin.question("Enter product ID to remove: ");
        await removeFromCart(removeId);
        break;
      case 4:
        const updateId = await cin.question("Enter product ID to update: ");
        const newQty = await cin.question("Enter new quantity: ");
        await updateQuantity(updateId, Number(newQty));
        break;
      case 5:
        console.log("See you Later");
        break;
      default:
        console.log("Invalid Choice! TRy again 😆");
    }
  } while (choice != "5");

  cin.close();
};
main();
