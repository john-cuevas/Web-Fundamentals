var pizza= {
    crustType: [ "deep dish", "hand tossed", "flat bread", "cauliflower"],
    sauceType: ["traditional", "marinara", "white", "pesto"],
    cheese: ["mozzarella", "feta", "cheddar", "provolone" ],
    toppings: ["pepperoni", "sausage", "mushrooms", "jalapenos", "olives", "onions", "bacon"]
};

function pizzaOven(crustType, sauceType, cheese, toppings){
    var pizza = {};
    pizza.crustType = crustType;
    pizza.sauceType = sauceType;
    pizza.cheese = cheese;
    pizza.toppings = toppings;

    return pizza;
}

var pizza1 = pizzaOven("deep dish", "traditional", "mozzarella", "pepperoni", "sausage");
console.log(pizza1);

var pizza2 = pizzaOven("hand tossed", "marinara", ["mozzarella", "feta"],  ["mushrooms", "olives", "onions"]);
console.log(pizza2);

var pizza3 = pizzaOven("flat bread", ["white", "pesto"], ["mozzarella", "provolone"],  ["mushrooms", "jalapenos", "onions", "bacon"]);
console.log(pizza3);

var pizza4 = pizzaOven("cauliflower", "pesto", ["mozzarella", "cheddar"],  ["pepperoni", "olives", "jalapenos"]);
console.log(pizza4);


////////////////////////////TBD////////////////////////////////////
function randompizza(crustType, sauceType, cheese, toppings){
    var x = {
        crustType: [ "deep dish", "hand tossed", "flat bread", "cauliflower"],
        sauceType: ["traditional", "marinara", "white", "pesto"],
        cheese: ["mozzarella", "feta", "cheddar", "provolone" ],
        toppings: ["pepperoni", "sausage", "mushrooms", "jalapenos", "olives", "onions", "bacon"]
    };
        for (i=0; i< x.length; i++){}
    var newcrust = x.crustType[Math.floor(Math.random() * x.crustType.length)];
    var newsauce = x.sauceType[Math.floor(Math.random() * x.sauceType.length)];
    var newcheese = x.cheese[Math.floor(Math.random() * x.cheese.length)];
    var newtoppings = x.toppings[Math.floor(Math.random() * x.toppings.length)];
    
    return newcrust, newsauce, newcheese, newtoppings;
}

var mypizza = randompizza(newcrust, newsauce, newcheese, newtoppings);
console.log (mypizza);

