function maskEmail(email){
  const position=email.indexOf("@");
  let sliced_portion=email.slice(1,position-1);
   const masked_portion = '*'.repeat(sliced_portion.length);
    return email.replace(sliced_portion,masked_portion);
}
let email="apple.pie@example.com";
console.log(maskEmail(email)); //Output:a*******e@example.com
email="freecodecamp@example.com";
console.log(maskEmail(email));  //Output:f**********p@example.com
