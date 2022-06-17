

const additionalDiscount = (discont, price) => {

    if( discont >= 1 && discont < 31 && price > 99 ) {

        const cardDiscount = price * (discont/100);  
        const addDiscount = (price - cardDiscount) * 0.1;
        const resultSum =  cardDiscount + addDiscount;
             return(
                resultSum ) 
    } else {
        return ("Дополнительная скидка не предоставляется")
    }             
}


 module.exports = additionalDiscount;