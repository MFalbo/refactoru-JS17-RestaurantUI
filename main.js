
// ---------------------------------PART1---------------------------
var FoodItem = function(name, calories, vegan, glutenFree, citrusFree){
	this.name = name;
	this.calories = calories;
	this.vegan = vegan;
	this.glutenFree = glutenFree;
	this.citrusFree = citrusFree;
	
};

// FoodItem.prototype.toString = function(){
// 		var message = '';

// 		for (key in this){
// 			if(typeof(this[key]) === 'string' || typeof(this[key]) === 'number' ){

// 				message += key + ': ' + this[key] + '\n';
// 			}
// 		}

// 			this.vegan ? message += 'This is vegan\n' : message +='This is not vegan\n';
// 			this.glutenFree ? message += 'This is gluten free\n' : message += 'This contains gluten\n';
// 			this.citrusFree ? message += 'This is citrus free\n' : message += 'This contains citrus\n';
				
// 			return message;
// 	};

// FoodItem.prototype.create = function(){


// }


// -----------------------------------PART2---------------------------------
var Drink = function(name, description, price) {
	this.name = name;
	this.price = price;
	this.description = description;
	this.ingredients = [];
};
Drink.prototype.toString = toString;
// -----------------PLATE---------------------------
var Plate = function(name, description, price) {
	this.name = name;
	this.price = price;
	this.description = description;
	this.ingredients = [];
};
	// Plate methods
Plate.prototype.toString = toString;

Plate.prototype.isVegan = function() {
	var isVegan = true;
	this.ingredients.map(function(item) {
		if (item.vegan === false) {
			return isVegan = false;
		}
	});
	return isVegan;
};

Plate.prototype.isGlutenFree = function() {
	var glutenFree = true;
	this.ingredients.map(function(item) {
		if (item.glutenFree === false) {
			return glutenFree = false;
		}
	});
	return glutenFree;
};

Plate.prototype.isCitrusFree = function() {
	var citrusFree = true;
	this.ingredients.map( function(item) {
		if (item.citrusFree === false) {
			return citrusFree = false;
		}
	});
	return citrusFree;
};

// ----------------ORDER-------------------------
var Order = function() {
	this.plates = [];
};
Order.prototype.toString = toString;

// -----------------MENU-------------------------
var Menu = function() {
	this.plates = [];
};
Menu.prototype.toString = toString;

// -----------------RESTAURANT-------------------------
var Restaurant = function(name, description, menu) {
	this.name = name;
	this.description = description;
	this.menu = menu;
};
Restaurant.prototype.toString = toString;

// -----------------CUSTOMER-------------------------
var Customer = function(dietaryPreference) {
	this.dietaryPreference = dietaryPreference;
};
Customer.prototype.toString = toString;


// -----------------TO STRING------------------
function toString() {
	var message = '';
	for (key in this){
		if(typeof(this[key]) !== 'function' ){
			if(this[key] instanceof Array){
				message += key + ': ' + this[key].join('\n') + '\n';
			}
			else{
				message += key + ': ' + this[key] + '\n';
			}
		}
	}
	return message;
}



// Create new instances of FoodItems
var tortilla = new FoodItem('tortilla',100,true,false,true);
var beans = new FoodItem('beans',100,true,true,true);
var rice = new FoodItem('rice',100,true,false,true);
var steak = new FoodItem('steak',200,false,true,true);
var lime = new FoodItem('lime',5,true,true,false);
var avacado = new FoodItem('avacado',10,true,true,true);
var greenPeppers = new FoodItem('Green Peppers',5,true,true,true);
var tequila = new FoodItem('tequila', 100,true,true,true);
var salt = new FoodItem('salt',0,true,true,true);
var margaritaMix = new FoodItem('Margarita Mix',200,true,true,false);

// Create new instances of Plates
var burrito = new Plate('Burrito Plate','Burrito on a plate',7);
var guacamole = new Plate('Guacamole Plate','Guacamole!!!',5);
// Add Ingredients to Plates
burrito.ingredients = [tortilla, beans, rice, steak, lime];
guacamole.ingredients = [avacado, lime, greenPeppers];

// Create new instances of Drinks
var margarita = new Drink('Margarita','booze',3);
// Add ingredients to Drinks
margarita.ingredients = [tequila, salt, margaritaMix];

// Create new menu
var ourMenu = new Menu();
// Add plates to menu
ourMenu.plates = [burrito, guacamole, margarita];

// Create new Restaurant
var ourRestaurant = new Restaurant("Pepe's",'Mexican Food',ourMenu);





// console.log(ourRestaurant.toString());



// console.log(burrito.isVegan());
// console.log(burrito.isGlutenFree());
// console.log(burrito.isCitrusFree());

// -------------Dynamically Create Menu----------------
$(document).on('ready', function() {

	console.log('document ready');

	var createMenuSection = function(sectionName){
		var section = $('.template.original').clone();
		section.removeClass('original');
		$('#menu').prepend(section);
		section.find($('h3')).text(sectionName);
		// section.find($('ul')).append($('<li>'));

		return section;
	};

// createMenuSection('Desserts');
// createMenuSection('Entrees');
// createMenuSection('Drinks');
// createMenuSection('Appetizers');

	var menuItem = function(obj){
		// console.log('in menu item function');
		var item = $('<div class="item">');
		var plate = $('<h5 class="plate item-title"></h5>');
		var price = $('<h5 class="price item-title">' + obj.price + '</h5>');
		var descriptionContainer = $('<div class="description-container"></div>');
		var description = $('<p class="description"></p>');
		var addBtn = $('<button class="add-item">');
		plate.text(obj.name);
		description.text(obj.description);
		descriptionContainer.append(description);
		descriptionContainer.append(addBtn);
		item.append(plate).append(price).append(descriptionContainer);

		return item;
	};


var build = function(arr, sectionName){
	
	var section = createMenuSection(sectionName);	

	arr.map(function(obj){
		section.find($('ul')).append($('<li class="list-item">'));
		$('.list-item').append(menuItem(obj));
		$('.list-item').removeClass('list-item');

	});
};


// Construct Food Arrays and Append everything to the DOM
var des = [];
build(des, 'Desserts');

var ent = [burrito];
build(ent, 'Entrees');

var drk = [margarita];
build(drk, 'Drinks');

var app = [guacamole];
build(app, 'Appetizers');


// Event Handlers for Menu Sections
	$(document).on('click', '.item', function(){
		// console.log('clicked');
		$(this).find('.description-container').slideToggle();
	});

	$(document).on('click', '.add-item', function(){   
		// console.log('clicked');
		var orderItem = $(this).closest('.item').find('.plate').text();
		// console.log(orderItem);

		return false;

	});

  
});



































