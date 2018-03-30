// BIZ LOGIC

function pizzaObject(size, toppings, price) {
  this.size = size;
  this.toppings = [];
  this.price = parseInt("")
}

pizzaObject.prototype.toppingsPrice = function() {
  return this.price += (1.50 * this.toppings.length)
}

// UI LOGIC

$(document).ready(function() {
  $("form#pizza-order").submit(function(event) {
    event.preventDefault();
    var size = $("input:radio[name=pizza-size]").val();
    $("input:checkbox[name=pizza-toppings]:checked").each(function() {
      var toppings = $(this).val();
      return toppings;
    });
    var newPizza = pizzaObject(size, toppings)

    var newPrice = 0;

    pizzaObject.price = newPrice;

  });
});
