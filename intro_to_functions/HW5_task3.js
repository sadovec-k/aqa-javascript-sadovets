function checkIsGoodsAvailable(available, ordered){
    if(ordered == 0 ) return "Yor order is empty";

    return available >= ordered 
        ? "Your order is accepted"
        : "Your order is too large, we don’t have enough goods.";
}

console.log(checkIsGoodsAvailable(10, 0));
console.log(checkIsGoodsAvailable(10, 15));
console.log(checkIsGoodsAvailable(10, 7));


function reverseString(str) {
    if (str == "") return "";
    let result = "";
    for (let i = str.length - 1; i >= 0; i --){
        result = result + str[i];
    }
    return result;
}

console.log("Result " + reverseString("!"));
