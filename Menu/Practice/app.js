const menu = [
    {
       id:1,
       title: "japanese souffle pancakes",
       category: "Breakfast",
       img: "./images/item1.jpg",
       price:15.66,
       desc:` i am s pancake made using soufflé techniques. Egg whites are whipped up with sugar into a glossy thick meringue then mixed with a batter made with the yolks.This panckes are fluffy,jiggley,sweet,soft,so delicious`
 
     },
     {
         id:2,
         title:"prawnpuff",
         category:"Breakfast",
         img:"./images/item2.jpg",
         price:13.46,
         desc:` The Prawn Puffs mead with Sift the flour with a teaspoon of salt and baking powder. Mix the butter with the flour and knead into a stiff dough using very little water and dip prwan in dough after that put in oven`
   
     },
     {
         id:3,
         title:"sliptdesion breakfast",
         category:"Breakfast",
         img:"./images/item3.jpg",
         price:14.86,
         desc:` Split Decision Breakfast - Start Your Combos Order Now! 2 eggs*, 2 bacon strips, 2 pork sausage links, 2 buttermilk pancakes & 1 slice of our new Thick Fluffy French Toast`
   
     },
     {
         id:4,
         title:"tomoto grilled sandwich",
         category:"Breakfast",
         img:'./images/items.jpg',
         price:16.26,
         desc:`This is a grilled Cheese and Tomato sandwich version made with tomatoes, cheddar cheese, dried herbs and seasonings`
   
     }
 ]
   
 const sectionCenter = document.querySelector(".section-center")

window.addEventListener("DOMContentLoaded", function (){
    let displayMenu = menu.map(function(item){

        // console.log(item);

        return`<article class="menu-item">
                    <img src="/images/item1.jpg" class="photo" alt="image" />
                    <div class="item-info">
                       <header>
                           <h4>japanes stuffel pancakes</h4>
                           <h4 class="price">$16</h4>
                       </header>
                       <p class="item-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi sit atque       cumque natus totam magnam! Assumenda magnam nihil mollitia accusantium velit perferendis labore, natus doloremque voluptates excepturi repudiandae vel voluptas.</p>
                  </div>
             </article> `


    });
    console.log(displayMenu)
});
