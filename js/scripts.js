// BIZ LOGIC

function pizzaObject(size, meats, veggies, price) {
  this.size = size;
  this.meats = meats;
  this.veggies = veggies;
  this.price = price;
}

pizzaObject.prototype.Price = function() {
  var pizzaSize = this.size;
  var meatToppings = this.meats.length;
  var veggieToppings = this.veggies.length;
  if (pizzaSize === "Personal") {
    this.price = (8+(meatToppings*2)+(veggieToppings*1.5));
  } else if (pizzaSize === "Small") {
    this.price = (12+(meatToppings*2)+(veggieToppings*1.5));
  } else if (pizzaSize === "Medium") {
    this.price = (16+(meatToppings*2)+(veggieToppings*1.5));
  } else if (pizzaSize === "Large") {
    this.price = (20+(meatToppings*2)+(veggieToppings*1.5));
  } else if (pizzaSize === "Extra Large") {
    this.price = (24+(meatToppings*2)+(veggieToppings*1.5));
  }
}

// UI LOGIC

$(document).ready(function() {
  $("form#pizza-order").submit(function(event) {
    event.preventDefault();
    var meats = [];
    var veggies = [];
    var price = 0;
    var comments = $("input:text").val();
    var size = $("input:radio[name=pizza-size]:checked").val();
    $("input:checkbox[name=meat-toppings]:checked").each(function() {
      meats.push($(this).val());
    });
    $("input:checkbox[name=pizza-toppings]:checked").each(function() {
      veggies.push($(this).val());
    }); if
    var newPizza = new pizzaObject(size, meats, veggies, price)

    newPizza.Price();

    $("#order-summary").show();
    $("#user-size").text(newPizza.size);
    $("#meat-toppings").text(newPizza.meats)
    $("#veggie-toppings").text(newPizza.veggies)
    $("#user-price").text(newPizza.price);
    $("#comments").text(comments);
  });
});
