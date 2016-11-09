// Business logic:
function pizza (size, crust, sauce, toppings, price) {
  this.size = size;
  this.crust = crust;
  this.sauce = sauce;
  this.toppings = toppings;
  this.price = price;
};

var toppingsArray = [];
var numberOfToppings;

pizza.prototype.addCostForSize = function () {
  if (this.size === "small") {
    this.price += 10;
  } else if (this.size === "medium") {
    this.price += 12;
  } else if (this.size === "large") {
    this.price += 14;
  } else if (this.size === "XL") {
    this.price += 16;
  }
};

pizza.prototype.addCostForCrust = function() {
  if (this.crust === "stuffed") {
    this.price += 2;
  }
};

pizza.prototype.addCostForSauce = function() {
  if (this.sauce === "white") {
    this.price += 1;
  }
};

pizza.prototype.addCostForToppings = function() {
  numberOfToppings = toppingsArray.length;
  this.price += numberOfToppings;
}

pizza.prototype.createPrice = function() {
  this.addCostForSize();
  this.addCostForCrust();
  this.addCostForSauce();
  this.addCostForToppings();
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
    newPizza.price = newPizza.price.toFixed(2);

    console.log(newPizza);

    alert ("You have ordered a "+newPizza.size+" pizza with "+newPizza.sauce+" sauce on a "+newPizza.crust+" crust. Your pizza has "+numberOfToppings+" toppings for a total price of: $"+newPizza.price+". Enjoy!");

  });
});
