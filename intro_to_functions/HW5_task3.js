function checkIsGoodsAvailable(available, ordered){
    if(ordered == 0 ) return "Yor order is empty";

    return available >= ordered 
        ? "Your order is accepted"
        : "Your order is too large, we don’t have enough goods.";
}

console.log(checkIsGoodsAvailable(10, 0));
console.log(checkIsGoodsAvailable(10, 15));
console.log(checkIsGoodsAvailable(10, 7));