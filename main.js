// $(document).on('ready', function() {
  
// });


// ---------------------------------PART1---------------------------
var FoodItem = function(name, calories, vegan, glutenFree, citrusFree){
	this.name = name;
	this.calories = calories;
	this.vegan = vegan;
	this.glutenFree = glutenFree;
	this.citrusFree = citrusFree;
	
};

FoodItem.prototype.toString = function(){
		var message = '';

		for (key in this){
			if(typeof(this[key]) === 'string' || typeof(this[key]) === 'number' ){

				message += key + ': ' + this[key] + '\n';
			}
		}

			this.vegan ? message += 'This is vegan\n' : message +='This is not vegan\n';
			this.glutenFree ? message += 'This is gluten free\n' : message += 'This contains gluten\n';
			this.citrusFree ? message += 'This is citrus free\n' : message += 'This contains citrus\n';
				
			return message;
	};

FoodItem.prototype.create = function(){
	
}


// var pizza = new FoodItem('Pizza', 700, false, false, true);
// var sandwich = new FoodItem('Sandwich', 350, true, false, true);
// var soup = new FoodItem('Soup', 225, true, true, false);

// console.log(pizza.toString());
// console.log(sandwich.toString());
// console.log(soup.toString());


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





console.log(ourRestaurant.toString());



// console.log(burrito.isVegan());
// console.log(burrito.isGlutenFree());
// console.log(burrito.isCitrusFree());







