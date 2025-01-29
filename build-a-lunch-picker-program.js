let lunches=[];

function addLunchToEnd(lunches,LunchItem){
  lunches.push(`${LunchItem}`);
  console.log(`${LunchItem} added to the end of the lunch menu.`);
  return lunches;
}

function addLunchToStart(lunches,LunchItem){
  lunches.unshift(`${LunchItem}`);
  console.log(`${LunchItem} added to the start of the lunch menu.`);
  return lunches;
}

function removeLastLunch(lunches) {
    if (lunches.length === 0) {
        console.log("No lunches to remove.");
        return lunches;
    } else {
        let removedItem = lunches.pop();
        console.log(`${removedItem} removed from the end of the lunch menu.`);
        return lunches;
    }
}

function removeFirstLunch(lunches) {
    if (lunches.length === 0) {
        console.log("No lunches to remove.");
        return lunches;
    } else {
        let removedItem = lunches.shift();
        console.log(`${removedItem} removed from the start of the lunch menu.`);
        return lunches;
    }
}

function getRandomLunch(lunches) {
    if (lunches.length === 0) {
        console.log("No lunches available.");
    } else {
        let randomIndex = Math.floor(Math.random() * lunches.length);
        let randomSelection = lunches[randomIndex];
        console.log(`Randomly selected lunch: ${randomSelection}`);
    }
}

function showLunchMenu(lunches) {
    if (lunches.length === 0) {
        console.log("The menu is empty.");
    } else {
        console.log(`Menu items: ${lunches.join(", ")}`);
    }
}
