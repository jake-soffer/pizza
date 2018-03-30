// BIZ LOGIC

function pizzaObject(size, toppings) {
  this.size = size;
  this.toppings = toppings;
}

pizzaObject.prototype.Price = function() {
  var pizzaSize = this.size;
  var pizzaToppings = this.toppings.length;
}

// if (pizzaSize === "small") {
//   return 12+(pizzaToppings*1.50)
// } else if (pizzaSize === "medium") {
//   return 16+(pizzaToppings*1.50)
// } else if (pizzaSize === "large") {
//   return 20+(pizzaToppings*1.50)
// }

// UI LOGIC

$(document).ready(function() {
  $("form#pizza-order").submit(function(event) {
    event.preventDefault();
    debugger;
    var size = $("input:radio[name=pizza-size]").val();
    var toppings = [];
    $("input:checkbox[name=pizza-toppings]:checked").each(function() {
      toppings.push($(this).val());
    });
    var newPizza = new pizzaObject(size, toppings)

    var newPrice = newPizza.Price();
    $("#order-summary").show();
    $("#user-size").text(newPizza.size);
    $("#user-toppings").text(newPizza.toppings)
    $("#user-price").text(newPrice);
  });
});
