var orderPrice = 0;
//-----------------------INGREDIENT------------------------------
var FoodItem = function(name, calories, vegan, glutenFree, citrusFree){
	if (arguments.length === 1) {
		var original = name;
		for (key in original) {
			if (typeof original[key] !== 'function') {
				this[key] = original[key];
			}
		}	
	}
	else {
		this.name = name;
		this.calories = calories;
		this.vegan = vegan;
		this.glutenFree = glutenFree;
		this.citrusFree = citrusFree;
	}
};

var isVegan = function() {
	var isVegan = true;
	this.ingredients.map(function(item) {
		if (item.vegan === false) {
			return isVegan = false;
		}
	});
	return isVegan;
};

var isGlutenFree = function() {
	var glutenFree = true;
	this.ingredients.map(function(item) {
		if (item.glutenFree === false) {
			return glutenFree = false;
		}
	});
	return glutenFree;
};

var isCitrusFree = function() {
	var citrusFree = true;
	this.ingredients.map( function(item) {
		if (item.citrusFree === false) {
			return citrusFree = false;
		}
	});
	return citrusFree;
};

//-----------------------DRINK------------------------------
var Drink = function(name, description, price) {
	this.name = name;
	this.price = price;
	this.description = description;
	this.ingredients = [];
};
Drink.prototype.isVegan = isVegan;
Drink.prototype.isGlutenFree = isGlutenFree;
Drink.prototype.isCitrusFree = isCitrusFree;

//-----------------------PLATE------------------------------
var Plate = function(name, description, price) {
	this.name = name;
	this.price = price;
	this.description = description;
	this.ingredients = [];
};
	// Plate methods
Plate.prototype.isVegan = isVegan;
Plate.prototype.isGlutenFree = isGlutenFree;
Plate.prototype.isCitrusFree = isCitrusFree;



//-----------------------ORDER------------------------------
var Order = function() {
	this.plates = [];
};

// ----------------------MENU-------------------------------
var Menu = function() {
	this.plates = [];
};

// ----------------------RESTAURANT-------------------------
var Restaurant = function(name, description, menu) {
	this.name = name;
	this.description = description;
	this.menu = menu;
};

// -----------------------CUSTOMER----------------------------
var Customer = function(dietaryPreference) {
	this.dietaryPreference = dietaryPreference;
};



// Create new instances of FoodItems
var tortilla = new FoodItem('tortilla',80,true,false,true);
var beans = new FoodItem('beans',120,true,true,true);
var rice = new FoodItem('rice',150,true,false,true);
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
burrito.ingredients = [tortilla, beans, rice, steak];
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


// Ingredients Array
var ingredients = [tortilla, beans, rice];

// Plate Arrays
var app = [guacamole];
var drk = [margarita];
var ent = [burrito];
var des = [];