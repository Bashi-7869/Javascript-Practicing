const menu = [
    {
        id:1,
        title: "japanese souffle pancakes",
        category: "breakfast",
        img: "/images/item1.jpg",
        price:15.66,
        desc:` i am s pancake made using soufflé techniques. Egg whites are whipped up with sugar into a glossy thick meringue then mixed with a batter made with the yolks.This panckes are fluffy and soft.`
  
    },
    {
         id:2,
         title:"beef-steak",
         category:"lunch",
         img:'/images/item5.webp',
         price:16.26,
         desc:`This is a flat cut of beef with parallel faces, usually cut perpendicular to the muscle fibers with rich spices and vegetables grilled.`
   
    },
    {
         id:3,
         title:"roasted salmon with walnut sauce",
         category:"dinner",
         img:'/images/item9.jpg',
         price:16.26,
         desc:`Roasted Salmon Recipe is a delicious Fish recipe where fillets of salmon are marinated with Indian spices and then, roasted in the pan to perfection. serve with crust walnut sauce.`
   
    },
    {
         id:4,
         title:"lemon cheescake",
         category:"dessert",
         img:'/images/item13.jpg',
         price:16.26,
         desc:`This simple but refreshing cake brings about a citurs-y breeze with cashew nuts, lemon juice, dates, coconut oil, soy lecithin filling also Crust almonds, maple syrup`
   
    },
]
   
const sectionCenter = document.querySelector(".section-center");
const btnContainer = document.querySelector(".btn-container");
const filterBtns = document.querySelectorAll('.filter-btn');


window.addEventListener("DOMContentLoaded", () => {
   displayMenuItems(menu);

});

filterBtns.forEach(function(btn){
     btn.addEventListener("click", function (e) {
        // console.log(e.currentTarget.dataset)
        const btnCategory = e.currentTarget.dataset.id;
        const filterMenu = menu.filter(menuItem => {
            // console.log(menuItem.category)
            return menuItem;
        })
        console.log(filterMenu);
    });
});
   
function displayMenuItems (menuItems)  {
    let displayMenu = menuItems.map ((item) => {

        return`<article class="menu-item">
                    <img src=${item.img} class="photo" alt=${item.title} />
                    <div class="item-info">
                       <header>
                           <h4>${item.title}</h4>
                           <h4 class="price">${item.price}</h4>
                       </header>
                       <p class="item-text">${item.desc}</p>
                  </div>
             </article> `;
        
});

displayMenu = displayMenu.join("");
sectionCenter.innerHTML = displayMenu;

};
   


