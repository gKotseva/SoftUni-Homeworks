function solve() {
    let shoppingList = document.getElementsByClassName('shopping-cart')[0]
    let result = document.getElementsByTagName('textarea')[0]
 
    shoppingList.addEventListener('click', onclick)
 
    let resultProducts = []
    let resultSum = 0;
 
    let checkOutButton = false;
 
    function onclick(event) {
       if (event.target.nodeName !== 'BUTTON') {
          return;
       }
 
       if (checkOutButton){
          return;
       }
 
       let btn = event.target
 
       if (Array.from(btn.classList).indexOf('add-product') >= 0) {
          let product = event.target.parentElement.parentElement
          let name = product.querySelectorAll('.product-title')[0].textContent
          let price = product.querySelectorAll('.product-line-price')[0].textContent
          price = Number(price)
          resultSum += price
 
          if (!resultProducts.includes(name)) {
             resultProducts.push(name)
          }
 
          result.textContent += `Added ${name} for ${price.toFixed(2)} to the cart.\n`
       } else if (Array.from(btn.classList).indexOf('checkout') >= 0) {
          result.textContent += `You bought ${resultProducts.join(', ')} for ${resultSum.toFixed(2)}.`
          checkOutButton = true
       }
    }
 }