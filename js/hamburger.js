// That's it! Now on to Lab 3...
// Create a JavaScript function that permits the creation of a hamburger object
// Consider that a hamburger has many options – that might include
/*
    different types of buns,
    vegetable garnishes, 
    assortments of cheeses, 
    specialty sauces, 
    different meat patties(beef, chicken, vegetarian), 
    single, double, or triple patty, 
    Pickles, hot peppers, olives etc.
*/
// add some extra if you want
// Make sure that the function allows for the output of a sentence that describes the hamburger, too
// This page inspired by and adapted from https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Objects/Object-oriented_JS

const output=document.getElementById('output');

function burgerChef(id, name, burgerName, breadType, spicy, meatType, meatDoneness, secretSauce, size, extraCheese, takeaway){
    let obj={};
    obj.id=id; //order number
    obj.name=name; //name of the customer
    obj.burgerName=burgerName; //burger name from the menu
    obj.breadType=breadType //diffrent types of bread
    obj.spicy=spicy; //not spicy, medium or hot
    obj.meatType=meatType; //chicken, meat or falafel (veggy)
    obj.meatDoneness=meatDoneness; //Donneness for meat. For other types - N/A
    obj.secretSauce=secretSauce;
    obj.size=size; //small, medium or large
    obj.extraCheese=extraCheese;
    obj.takeaway=takeaway; //takeway or inside
    obj.summary=function(){
        output.textContent=`Order #${this.id} for ${this.name}. ${this.size} ${this.burgerName} with ${this.breadType} bread and ${this.meatType} patty (Doneness: ${this.meatDoneness}).
        Spiciness level: ${this.spicy}, secret sauce: ${this.secretSauce}, with ${this.extraCheese} extra cheese. Package: ${this.takeaway}`;
    }
    return obj;
}

let customer1=burgerChef(1, 'Max', "Fat Boy", "multigrain", 'Mild', 'Meat', 'Medium', 'Yes', 'Large', '1', 'To go');
let customer2=burgerChef(2, 'Matt', "Buffalo", "whole", 'Medium', 'Chicken', 'N/A', 'No', 'Small', '2', 'Inside');
let customer3=burgerChef(3, 'Tony', "Philadelphia", "white", 'Hot', 'Falafel', 'N/A', 'Yes', 'Medium', '0', 'To go');
