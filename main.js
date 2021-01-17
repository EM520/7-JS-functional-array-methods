//Question 1 average price of items

//console.log(items)

const totalNumberOfItems = items.length

let total = 0
items.forEach (function(item) {

    const itemPrice = item.price

    // console.log(total, itemPrice)
    total = total + itemPrice
})

const avgPrice = total / totalNumberOfItems

// console.log(avgPrice)

document.querySelector('#answer1').innerHTML = `The average price is $${avgPrice.toFixed(2)}.`

// --------------------------------------------------------------------------------
// Question 2 An array of items that cost between $14.00 and $18.00 USD?


let priceItems = items.filter(function(item){

    //console.log(item.price)

    return (item.price>14 && item.price<18)

})
//console.log(priceItems)

let priceItemsList = priceItems.map(function(item) {

    return `<li> ${item.title} </li> `
}).join('')


    document.querySelector('#answer2').innerHTML = `${priceItemsList}`


// let priceItems = items.filter(function(item){

//     // console.log(item.price)
    
//         return (item.price>14 && item.price<18)
    
//     })
// console.log(priceItems)

// const newList = priceItems.map(function(item){
//     return `<li> ${item.title} </li>`
// })

//    document.querySelector('#answer2').innerHTML = `${newList}`
    

// --------------------------------------------------------------------------------------
// Question 3  Which item has a "GBP" currency code? Display it's name and price.


let itemsGBP =  items.filter(function(item) {
    const checkCode = item.currency_code    
    //console.log(checkCode)
    // This comparision evaluation for True or False!
    return checkCode == "GBP"
})

 //console.log(itemsGBP)

const itemsName = itemsGBP[0].title
const itemsPrice = itemsGBP[0].price

// console.log(itemsPrice)
// console.log(itemsName)

document.querySelector('#answer3').innerHTML=`${itemsName} costs £${itemsPrice}`

// --------------------------------------------------------------------------------------
// Question 4  Display a list of all items who are made of wood.

let woodItems = items.filter(function(item) {
    
    let checkCode = item.materials
    
    return checkCode.includes('wood')
})
//console.log(woodItems)

 let woodItemsList = woodItems.map(function(item) {
    return  `<li>${item.title} is made of wood.</li>
    `
}).join('')

document.querySelector('#answer4').innerHTML=`${woodItemsList}`

// --------------------------------------------------------------------------------------
// Question 5  Which items are made of eight or more materials? Display the name, number of items and the items it is made of.

let numWoodItems = items.filter(function(item){

    let checkCode = item.materials

    //console.log(checkCode.length)

    return checkCode.length >= 8

})
 //console.log(numWoodItems)

//  const newItemMat = numWoodItems.map(function(x){
//      const inner = x.materials.map(function(y){
//          return `${y} \n`
//      })
//      return   inner.join('')
//    })

//console.log(newItemMat)


let numWoodItemsList = numWoodItems.map(function(item) {

    const inner = item.materials.map(function(y){
        return `${y} \n`
    }).join('')
    
    return `<li> ${item.title} has ${item.materials.length} materials: </br>
${inner}</li>`
}).join('')

document.querySelector('#answer5').innerHTML = `${numWoodItemsList}`


// --------------------------------------------------------------------------------------
// Question 6  How many items were made by their sellers?

//console.log(items)

let whoMadeItems = items.filter(function(item) {
    let checkCode = item.who_made
    //console.log(checkCode)
    return checkCode == 'i_did'
})
//console.log(whoMadeItems.length)

document.querySelector('#answer6').innerHTML = `${whoMadeItems.length} were made by their sellers`