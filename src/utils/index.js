/*=  
this function calculates total price of a new Order
@param {Array} products cartProducts Array of Object
@retuns  {numer} total price

*/

export const TotalPrice = (products) => {
    return products.reduce((acc, item) => acc + item.price, 0)
}