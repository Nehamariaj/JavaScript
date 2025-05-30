console.log("Grocery shopping list");

const shoppingList = [];

console.log("It will be nice to have some fruit to eat.");

shoppingList.push("Apples");

function getShoppingListMsg() {
  return `Current Shopping List: ${shoppingList}`;
}

console.log(getShoppingListMsg());

shoppingList.push("Grapes");
console.log(getShoppingListMsg());

console.log("It looks like we need to get some cooking oil.");

shoppingList.unshift("Vegetable Oil");
console.log(getShoppingListMsg());

shoppingList.push("Popcorn", "Beef Jerky", "Potato Chips");
console.log(getShoppingListMsg());

console.log("This looks like too much junk food.");

shoppingList.pop();
console.log(getShoppingListMsg());

console.log("It might be nice to get a dessert.");

shoppingList.unshift("Chocolate Cake");
console.log(getShoppingListMsg());

console.log("On second thought, maybe we should be more health conscious.");

shoppingList.shift();
console.log(getShoppingListMsg());

shoppingList[0] = "Canola Oil";

console.log(getShoppingListMsg());
