// Business logic:
function pizza (size, crust, sauce, toppings, price) {
  this.size = size;
  this.crust = crust;
  this.sauce = sauce;
  this.toppings = toppings;
  this.price = price;
};

var newPizza = new pizza("no size", "no crust", "no sauce", [], 0);
var toppingsArray = [];
var numberOfToppings;

function addCostForSize() {
  if (newPizza.size === "small") {
  newPizza.price += 10;
  } else if (newPizza.size === "medium") {
    newPizza.price += 12;
  } else if (newPizza.size === "large") {
    newPizza.price += 14;
  } else if (newPizza.size === "XL") {
    newPizza.price += 16;
  }
};

function addCostForCrust() {
  if (newPizza.crust === "stuffed") {
  newPizza.price += 2;
  }
};

function addCostForSauce() {
  if (newPizza.sauce === "white") {
  newPizza.price += 1;
  }
};

function addCostForToppings() {
  numberOfToppings = toppingsArray.length;
  newPizza.price += numberOfToppings;
}

//creates a method that calculates pizza price
pizza.prototype.createPrice = function() {
  addCostForSize();
  addCostForCrust();
  addCostForSauce();
  addCostForToppings();
};

// User Interface logic:
$(document).ready(function() {
  $("#pizzabutton").click(function(event) {
    event.preventDefault();

    //creates an array of the toppings
    $("input:checkbox[name=pizza-topping]:checked").each(function() {
      toppingsArray.push($(this).val());
    });

    //constructs a new pizza using user inputs
    newPizza = new pizza(
      $("#size option:selected").val(),
      $("#crust option:selected").val(),
      $("#sauce option:selected").val(),
      toppingsArray,
      0);

    //adds a price to the pizza
    newPizza.createPrice();

    //rounds price to 2 decimal places
    newPizza.price += 0.00000001;
    newPizza.price.toFixed(2);

    console.log(newPizza);

    alert ("You have ordered a "+newPizza.size+" pizza with "+newPizza.sauce+" sauce on a "+newPizza.crust+" crust. Your pizza has "+numberOfToppings+" toppings for a total price of: $"+newPizza.price+". Enjoy!");

  });
});
