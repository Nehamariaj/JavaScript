let fortune1="Your cat will look very cuddly today.";
let fortune2="The weather will be nice tomorrow.";
let fortune3="Be cautious of your new neighbours.";
let fortune4="You will find a new hobby soon.";
let fortune5="It would be wise to avoid the colour red today.";
let min=1,max=6;
let randomNumber = Math.round(Math.random() * (max - min) + min);
let selectedFortune;
if (randomNumber==1){
  selectedFortune=fortune1;
}
else if (randomNumber==2){
  selectedFortune=fortune2;
}
else if (randomNumber==3){
  selectedFortune=fortune3;
}
else if (randomNumber==4){
  selectedFortune=fortune5;
}
else{
  selectedFortune=fortune5;
}
console.log(selectedFortune);
