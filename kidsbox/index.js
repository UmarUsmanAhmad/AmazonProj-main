
//Function for cart hide and visible
function ShowCartbox(event) {
  const cartBox = document.getElementById('cart-box');
  const cartIcon = document.querySelector('.Cart');

  if (cartIcon.contains(event.target)) {
    cartBox.style.visibility = 'visible';
    cartBox.style.right = '0';
  } else if (!cartBox.contains(event.target)) {

    cartBox.style.visibility = 'hidden';
    cartBox.style.right = '0';
  }
}

document.addEventListener('click', ShowCartbox);

//Function for adding items into Cart.
function additems(boxContent) {
  const cartItems = document.getElementById("cart-items");
  const listItem = document.createElement("li");
  const itemDiv = document.createElement("div");
  listItem.classList.add("item");
  itemDiv.classList.add("cart-item");
  if (
    cartItems.children.length !== 0
      ? checkExistingItem(boxContent, cartItems)
      : true
  ) {
    itemDiv.innerHTML = boxContent.innerHTML;
    itemDiv.dataset.quantity = 1;
    listItem.appendChild(itemDiv);
    cartItems.appendChild(listItem);

    const addbuttn = itemDiv.querySelector("a");
    if (addbuttn) {
      addbuttn.remove();
    }
    quantityCounter(itemDiv);
    minusButton(itemDiv);
    plusButton(itemDiv);
    removeButton(itemDiv);
    totalquantityIncreament();

    let totalPriceElement = document.getElementById("TotalPrice");
    if (!totalPriceElement) {
      totalPriceElement = document.createElement("div");
      totalPriceElement.id = "TotalPrice";
      document.getElementById("cart-box").appendChild(totalPriceElement);
    }

    totalPrice();
  }
}
//Check existing item
function checkExistingItem(newItem, existingItems) {
  var items = existingItems.getElementsByClassName("item");
  let flag = true;
  for (i = 0; i < items.length; i++) {
    if (
      items[i].querySelector("h2").innerHTML ===
      newItem.querySelector("h2").innerHTML
    ) {
      const findIten = items[i].querySelector("div");
      findIten.dataset.quantity = parseInt(findIten.dataset.quantity, 10) + 1;
      totalquantityIncreament();
      const quantityText = findIten.querySelector("#Span");
      quantityText.textContent = findIten.dataset.quantity;
      totalPrice();
      return (flag = false);
    }
  }
  return flag;
}
//RemoveButton Function
function removeButton(listItem) {
  const removeButton = document.createElement("button");
  removeButton.classList.add("remove-button");
  removeButton.textContent = "Remove";

  removeButton.addEventListener("click", function () {
    listItem.remove();
    totalquantityDecreament();
    listItem.appendChild(removeButton);

// Check if all items are removed, then reset cart
    if (document.querySelectorAll(".cart-item").length === 0) {
      const cartItems = document.getElementById("cart-items");
      cartItems.innerHTML = "";
      document.getElementById("numbers").innerText = "0";
      document.getElementById("Totalitems").innerText = "0";
      const totalPriceElement = document.getElementById("TotalPrice");
      totalPriceElement.parentNode.removeChild(totalPriceElement); // Remove the TotalPrice element
    }

    totalPrice();
  });

  listItem.appendChild(removeButton);
}
 
//Quantity counter
  function quantityCounter(itemDiv) {
    const quantityContainer = document.createElement("div");
    quantityContainer.classList.add("quantity-container");
    
    const minusButtonElement = minusButton(itemDiv); 
    const quantityText = document.createElement("span");
    quantityText.id = "Span";
    quantityText.textContent = itemDiv.dataset.quantity;
    const plusButtonElement = plusButton(itemDiv);
    
    quantityContainer.appendChild(minusButtonElement);
    quantityContainer.appendChild(quantityText);
    quantityContainer.appendChild(plusButtonElement);
    
    itemDiv.appendChild(quantityContainer);
  }
//Minusbutton Function
  function minusButton(itemDiv) {
    const minusButtonElement = document.createElement("button");
    minusButtonElement.textContent = "-";
    minusButtonElement.classList.add("minus-button");

    minusButtonElement.addEventListener("click", function () {
      const quantity = parseInt(itemDiv.dataset.quantity, 10);
      if (quantity > 1) {
        itemDiv.dataset.quantity = quantity - 1;
        totalquantityDecreament();
        const quantityText = itemDiv.querySelector("#Span");
        quantityText.textContent = itemDiv.dataset.quantity;
        totalPrice(); 
      }
    });

    return minusButtonElement;
  }
//Plusbutton Function
  function plusButton(itemDiv) {
    const plusButtonElement = document.createElement("button");
    plusButtonElement.textContent = "+";
    plusButtonElement.classList.add("plus-button");

    plusButtonElement.addEventListener("click", function () {
      itemDiv.dataset.quantity = parseInt(itemDiv.dataset.quantity, 10) + 1;
      totalquantityIncreament();
      const quantityText = itemDiv.querySelector("#Span");
      quantityText.textContent = itemDiv.dataset.quantity;
      totalPrice(); 
    });

    return plusButtonElement;
  }

//TotalQuantity ++
function totalquantityIncreament() {
  const numberswithcart = document.getElementById("numbers");
  console.log(numberswithcart.innerHTML);
  let x = !numberswithcart.innerHTML
    ? 1
    : parseInt(numberswithcart.innerHTML, 10) + 1;

  numberswithcart.innerHTML = x;
  // TotalItems
  document.getElementById("Totalitems").innerText = x;
}
//TotalQuantity --
function totalquantityDecreament() {
const numberswithcart = document.getElementById("numbers");
let x = parseInt(numberswithcart.innerText, 10) - 1;
numberswithcart.innerHTML = x;
// TotalItems
document.getElementById("Totalitems").innerText = x;
}

//TotalPrice
function totalPrice() {
const totalPriceElement = document.getElementById("TotalPrice");
const cartItems = document.querySelectorAll(".cart-item");

if (totalPriceElement) { // Check if TotalPrice element exists
  let totalPrice = 0;

  cartItems.forEach((cartItem) => {
    const price = cartItem.querySelector(".price");
    const NewPriceremovingDollarSign = parseInt(
      price.textContent.replace("$", "")
    );
    const quantity = parseInt(cartItem.dataset.quantity, 10);
    totalPrice += NewPriceremovingDollarSign * quantity;
  });

  totalPriceElement.innerHTML = `Total price: $${totalPrice}`;
}
}


//Making Divs With JS

let phones=[{
id:'1',
Name:'Bubble Machine' ,
Price:'14000',
image:"./BubbleMachine.jpg",
},{
id:'2',
Name:'Kids Camera' ,
Price:'13000',
image:"./KidsCamera.jpg",
},{ 
 id:'3',
Name:'Kids Disney' ,
Price:'12000',
image:"./KidsDisney.jpg",
},
{  
id:'4',
Name:'Kids MakeupKit' ,
Price:'11000',
image:"./KidsMakeupKit.jpg",
},

{  id:'5',
Name:'Punching Bag' ,
Price:'12000',
image:"./PunchingBag.jpg",
},
{  id:'6',
Name:'Shooting Games' ,
Price:'11000',
image:"./ShootingGames.jpg",
},
{  id:'7',
Name:'SmallPop Purse' ,
Price:'10000',
image:"./SmallPopPurse.jpg",
},
{  id:'8',
Name:'Star Wars' ,
Price:'9000',
image:"./StarWars.jpg",
}];

let shopContainer= document.getElementById('shopContainer');

const generatedivs=()=>{
return (shopContainer.innerHTML=phones.map((x)=>{
return `
<div class="box1 box">
              <div class="box-content">
                  <h2>${x.Name}</h2>
                  <div ><img class="Mobiles" src=${x.image}></div>
                  <p class="price">$${x.Price}</p>
                  <a onclick="additems(this.parentNode)">Add</a>
              </div>
          </div>`;
}).join(''));
} ;

generatedivs();



//Login website
function loginwebsitefun(){
window.location.href= "../Login/index.html";
}
//HomePage
function homepage(){
window.location.href= "../index.html";

}

/*
let prices = document.getElementById('price').innerHTML;
let withoutdollar = parseInt(prices.replace('$','')); 
console.log(prices);*/