// get only unique categories - hardest one
// iterate over categories return buttons
// make sure to select buttons when they are available

// items

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
    {
        id:5,
        title:"strawberry sheke",
        category:"shakes",
        img:'/images/item20.png',
        price:16.26,
        desc:`This is a strawberries, milk, ice cream and flavoring ingredients like vanilla extract or strawberry syrup with whipped cream.`
  
    },
    {
         id:6,
         title:"prawnpuff",
         category:"breakfast",
         img:"/images/item2.jpg",
         price:13.46,
         desc:` The Prawn Puffs mead with Sift the flour with a teaspoon of salt and baking powder. Mix the butter with the flour and knead into a stiff dough using very little water and dip prwan in dough after that put in oven`
   
     },
     {
        id:7,
        title:"sweet & sour chiken",
        category:"lunch",
        img:'/images/item6.jpg',
        price:16.26,
        desc:`Sweet and Sour Chicken is made by batter-frying chicken and then tossing it in a quick and easy sweet and sour sauce`
  
    },
    {
        id:8,
        title:"Cajun Blackened Chicken",
        category:"dinner",
        img:'/images/item10.jpg',
        price:16.26,
        desc:`Caun rubbed chicken sujpreme, red peppers, red onion and crumbled feta with potato puree`
  
    },
    {
        id:9,
        title:"strawberry panna cotta",
        category:"dessert",
        img:'/images/item14.webp',
        price:16.26,
        desc:`chocolate gelato sandwich, braised rhubarb, marshallow, strawberry ships`
  
    },
    {
        id:10,
        title:"oreo shake",
        category:"shakes",
        img:'/images/item19.jpg',
        price:16.26,
        desc:`Oreo shake, double chocolate oreo shake and with ice cream and nuts.`
  
    },
    {
         id:11,
         title:"sliptdesion breakfast",
         category:"breakfast",
         img:"/images/item3.jpg",
         price:14.86,
         desc:` Split Decision Breakfast - Start Your Combos Order Now! 2 eggs*, 2 bacon strips, 2 pork sausage links, 2 buttermilk pancakes & 1 slice of our new Thick Fluffy French Toast`
   
    },
    {
        id:12,
        title:"salad prawns",
        category:"lunch",
        img:'/images/item8.jpg',
        price:16.26,
        desc:`This is a prawns and vegetables with also lime juice, vinegar, sugar, garlic, lemongrass and fresh chilies`
  
    },
    
    {
        id:13,
        title:"Slow_Cooker_Vegan_Stew",
        category:"dinner",
        img:'/images/item11.jpg',
        price:16.26,
        desc:`This vegan Slow Cooker Vegetable Stew is packed with chickpeas, cauliflower, spinach, and other yummy veggies.`
  
    },
    {
        id:14,
        title:"tiramisu budino",
        category:"dessert",
        img:'/images/item15.png',
        price:16.26,
        desc:`This is a chocolate hazelnut pudding, mascarpaone moussem espresso "ice", espresso biscotti`
  
    },
    {
        id:15,
        title:"banana shake",
        category:"shakes",
        img:'/images/item18.jpg',
        price:16.26,
        desc:`This is banana shake with milk and nut butter, fruits, icecream or yogurt`
  
    },
    {
         id:16,
         title:"tomoto grilled sandwich",
         category:"breakfast",
         img:'/images/item4.jpg',
         price:16.26,
         desc:`This is a grilled Cheese and Tomato sandwich version made with tomatoes, cheddar cheese, dried herbs and seasonings`
   
    },
    {
        id:17,
        title:"stuffed mushrooms",
        category:"lunch",
        img:'/images/item7.jpg',
        price:16.26,
        desc:`this a Mushrooms caps baked with a filling of three choice cheeses, breadcrumbs and clams.`
  
    },
    {
        id:18,
        title:"prawn-rice-noodle-salad",
        category:"dinner",
        img:'/images/item12.jpeg',
        price:16.26,
        desc:`This is a prawn and rice noodles with the spicy chillies, the salty flavour of the fish sauce and the tart lime juice.`
  
    },
    {
        id:19,
        title:" zeppolericotta",
        category:"dessert",
        img:'/images/item16.jpg',
        price:16.26,
        desc:`marsala sabayan with pistachio gelato and pistachio brittle`
  
    },
    {
        id:20,
        title:"chocolate shake",
        category:"shakes",
        img:'/images/item17.jpg',
        price:16.26,
        desc:`This is a grilled Cheese and Tomato sandwich version made with tomatoes, cheddar cheese, dried herbs and seasonings`
  
    },

]
   
const sectionCenter = document.querySelector(".section-center");
const btnContainer = document.querySelector(".btn-container");

// load items

window.addEventListener("DOMContentLoaded", () => {
   displayMenuItems(menu);
   displayMenuButtons();
  
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

function displayMenuButtons(){

    const categories = menu.reduce((values,item) => {
        if(!values.includes(item.category)) {
            values.push(item.category)
        }
         return values;
       },["all"]);
    
      const categoryBtns = categories.map((category) => {
        return ` <button class="filter-btn" type="button" data-id=${category}>${category}</button>`
      })
       .join("");
       btnContainer.innerHTML = categoryBtns;
       const filterBtns = document.querySelectorAll('.filter-btn');
       
    //    filter items
       filterBtns.forEach(function(btn){
        btn.addEventListener("click", function (e) {
           // console.log(e.currentTarget.dataset)
           const btnCategory = e.currentTarget.dataset.id;
           const filterMenu = menu.filter(menuItem => {
               // console.log(menuItem.category)
               if(menuItem.category === btnCategory){
                   return menuItem;
               };
           });
           // console.log(filterMenu);
           if(btnCategory === "all"){
               displayMenuItems(menu);
           }else{
               displayMenuItems(filterMenu);
           }
       });
    });
}
