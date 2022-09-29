let shop = document.getElementById("shop");

let shopItemsData = [
  {
    id: "jfhgbvnscs",
    name: "Leather Bag",
    price: 45,
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing.",
    img: "images/img1.jpg",
  },
  {
    id: "ioytrhndcv",
    name: "Nike Sneaker",
    price: 100,
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing.",
    img: "images/img2.jpg",
  },
  {
    id: "wuefbncxbsn",
    name: "Diamond Necklace",
    price: 25,
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing.",
    img: "images/img3.jpg",
  },
  {
    id: "thyfhcbcv",
    name: "Bow Tie",
    price: 300,
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing.",
    img: "images/img4.jpg",
  },
];

let generateShop = () => {
  return (shop.innerHTML = shopItemsData
    .map((x) => {
      let { id, name, price, desc, img } = x;
      return `
    <div id=product-id-${id} class="w-52 border-2 border-Purple rounded">
           <img class="" src= ${img} alt="img1" />
           <div class="flex flex-col p-2.5 gap-2.5">
             <h3 class="font-bold">${name}</h3>
             <p class="text-sm">
               ${desc}
             </p>
             <div class="flex flex-row justify-between">
               <h2 class="font-bold">$ ${price}</h2>
               <div class="flex flex-row gap-2">
                 <i onclick="decrement(${id})" class="bi bi-dash-lg text-red-600"></i>
                 <div id=${id}>0</div>
                 <i onclick="increment(${id})" class="bi bi-plus-lg text-green-600 "></i>
               </div>
             </div>
           </div>
         </div>`;
    })
    .join(""));
};

generateShop();

let increment = () => {
    console.log(id)
};
let decrement = () => {
    console.log()
};
let update = () => {};
