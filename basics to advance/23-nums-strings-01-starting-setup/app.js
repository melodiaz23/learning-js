// To produce alternative number above 0 and 10.

function randomIntBet(min, max){ // min: 5, max: 10
  return Math.floor(Math.random() * (max - min + 1) + min);
}

console.log(randomIntBet(0, 20))

// Tag template

function productDescription(strings, productName, productPrice){
  console.log(strings);
  console.log(productName);
  console.log(productPrice);
  let priceCategory = 'pretty cheap regarding its price'
  if (productPrice > 20){
    priceCategory = 'fairly priced';
  }
  return `${strings[0]}${productName}${strings[1]}${priceCategory}${strings[2]}`;
}

const prodName = 'JS course'
const prodPrice = 29.99;
const productOutput = productDescription`This product (${prodName}) is ${prodPrice}.`;

console.log(productOutput);