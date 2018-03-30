// BIZ LOGIC

function pizzaObject(size, toppings, price) {
  this.size = size;
  this.toppings = toppings;
  this.price = price;
}

pizzaObject.prototype.Price = function() {
  var pizzaSize = this.size;
  var pizzaToppings = this.toppings.length;
  if (pizzaSize === "Personal") {
    this.price = (8+(pizzaToppings*1.50));
  } else if (pizzaSize === "Small") {
    this.price = (12+(pizzaToppings*1.50));
  } else if (pizzaSize === "Medium") {
    this.price = (16+(pizzaToppings*1.50));
  } else if (pizzaSize === "Large") {
    this.price = (20+(pizzaToppings*1.50));
  } else if (pizzaSize === "Extra Large") {
    this.price = (24+(pizzaToppings*1.50));
  }
}

// UI LOGIC

$(document).ready(function() {
  $("form#pizza-order").submit(function(event) {
    event.preventDefault();
    var size = $("input:radio[name=pizza-size]:checked").val();
    var toppings = [];
    var price = 0;
    $("input:checkbox[name=pizza-toppings]:checked").each(function() {
      toppings.push($(this).val());
    });
    var newPizza = new pizzaObject(size, toppings, price)

    newPizza.Price();

    $("#order-summary").show();
    $("#user-size").text(newPizza.size);
    $("#user-toppings").text(newPizza.toppings)
    $("#user-price").text(newPizza.price);
  });
});
