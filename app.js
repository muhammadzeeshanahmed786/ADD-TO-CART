let products = [
    {
        image: "data:image/jpeg;base64,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",
        price: "30Lakh",    
        name:"Civic"
    
    },
    {
        image:"https://images.hgmsites.net/hug/2021-bmw-x4_100772649_h.jpg",
        price: "50Lakh",    
        name:"BMW"
    
    },{
        image:"https://images.news18.com/ibnlive/uploads/2020/08/1597473433_mahindra-thar-4x4-new-suv.jpg",
        price: "20Lakh",    
        name:"Jeep"
    
    },{
        image:"https://www.arabianbusiness.com/public/images/2019/05/29/Ferrari_SF90_Stradale_5.jpg",
        price: "$500,00",    
        name:"Ferrari"
    
    },
    {
        image:"https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-12-family-select-2021?wid=940&hei=1112&fmt=jpeg&qlt=80&.v=1617135051000",
        price: "2 Lakh",    
        name:"IPhone 12 X"
    
    },
    {
        image:"https://propakistani.pk/price/wp-content/uploads/2018/04/apple-iphone-7-plus-red-1-215x300.jpg",
        price: "1 Lakh",    
        name:"IPhone 7"
    
    },
    {
        image:"https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/refurb-iphone-xs-max-gold?wid=1144&hei=1144&fmt=jpeg&qlt=80&.v=1579299533651",
        price: "50K",    
        name:"IPhone X"
    
    },
    {
        image:"https://thumbor.forbes.com/thumbor/960x0/https%3A%2F%2Fspecials-images.forbesimg.com%2Fimageserve%2F5f766465171081b47b0e73ad%2FApple--iPhone--new-iPhone--iPhone-13--iPhone-12--iPhone-12-Pro--iPhone-12-release-%2F960x0.jpg%3Ffit%3Dscale",
        price: "3 Lakh",    
        name:"IPhone 12 pro max"
    
    },

]



var cart=document.getElementById("main_cart");

for(var i=0; i<products.length; i++){
    cart.innerHTML +=`
    <div id="Allcards">
    <div class="card" style="width: 18rem;">
            <img src="${products[i].image}" class="card-img-top " alt="...">
            <div class="card-body">
              <h5 class="card-title">${products[i].price}</h5>
              <p class="card-text">${products[i].name}.</p>
              <a href="#" class="btn btn-primary" onclick='addToCart("${products[i].name}","${products[i].price}","${products[i].image}")'>Add To Cart</a>
            </div>
          </div>
          </div>

    `
}


var allCards=[];

var cards=localStorage.getItem("card")

if(cards !==null){
    
   allCards= JSON.parse(cards)
    
    var cart_badge=document.getElementById("cart_badge");
    cart_badge.innerHTML=allCards.length


}


function addToCart(name,price,image){
    console.log(name,price,image)

    var card={
        name,
        image,
        price
    }
    // console.log(card)
    allCards.push(card)
    localStorage.setItem("card",JSON.stringify(allCards))
    
var cart_badge=document.getElementById("cart_badge");
cart_badge.innerHTML=allCards.length



}




























// let allCards=[];
// let cards=localStorage.getItem("cards")



// if( cards !== null){
//     allCards=JSON.parse(cards)
//     let card_badge=document.getElementById("card_badge")
//     card_badge.innerHTML=allCards.length
// }


// let addToCart=(image,price,name)=>{
//     console.log("hy")

//     let card={
//         image,
//         price,
//         name
//     }
//     allCards.push(card)
//     localStorage.setItem("cards", JSON.stringify(allCards));
//     let cart_badge = document.getElementById('cart_badge');
//     cart_badge.innerHTML = allCards.length
// }













