let cartQuanity=0;
document.querySelector('.cart-summary').innerHTML=`Your Bag has ${cartQuanity} items`;


function addBag(){
    cartQuanity=cartQuanity+1;
document.querySelector('.cart-summary').innerHTML=`Your Bag has ${cartQuanity} items`;
}

function  moveList(){
    cartQuanity= cartQuanity-1;
document.querySelector('.cart-summary').innerHTML=`Your Bag has ${cartQuanity} items`;
}

function saleItem(){
    cartQuanity +=2
document.querySelector('.cart-summary').innerHTML=`Your Bag has ${cartQuanity} items`;

}