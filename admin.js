$(document).on('ready', function(){

// Local Storage Ingredient Parsing
ingredients = JSON.parse(localStorage.getItem('ingredients'));
ingredients = ingredients.map(function(obj) {
	var newFoodItem = new FoodItem(obj);
	return newFoodItem;
});


// Append Ingredient List to Admin Page
function appendIngredient (item) {
	var newIngredient = $('<li>');
	var ingredientInfo = $('<div class="ingredient-info">Calories: <span id="span-calories"></span></br>Vegan: <span id="span-vegan"></span></br>Gluten Free: <span id="span-gluten-free"></span></br>Citrus Free: <span id="span-citrus-free"></span></div>');
	newIngredient.text(item.name);
	$('#span-calories').text(item.calories);
	$('#span-vegan').text(item.vegan);
	$('#span-gluten-free').text(item.glutenFree);
	$('#span-citrus-free').text(item.citrusFree);



	// Calories: ' + item.calories + '<br>Vegan: ' + item.vegan + '<br>Gluten Free: ' +
	// item.glutenFree + '<br>Citrus Free: ' + item.citrusFree + 
	

	$('#ingredients-list').append(newIngredient);

	// $('#ingredient-sidebar').append(newIngredient);
	newIngredient.append(ingredientInfo);

}
ingredients.map(appendIngredient);


// Creates new ingredient from form and saves to local storage
function createIngredient () {
	var name = $('#ingredient-name').val();
	var calories = $('#ingredient-calories').val();
	var vegan = $('#ingredient-vegan').prop('checked');
	var gluten = $('#ingredient-gluten').prop('checked');
	var citrus = $('#ingredient-citrus').prop('checked');

	var item = new FoodItem (name, calories, vegan, gluten, citrus);
	ingredients.push(item);
	localStorage.setItem('ingredients',JSON.stringify(ingredients));
}

$(document).on('submit', '#ingredient-form', function() {
	createIngredient();
	$('#ingredients-list li').remove();
	ingredients.map(appendIngredient);
	return false;
});


// Toggles Ingredient info on click
$(document).on('click', 'li', function() {
	console.log('CLICK');
	$(this).find('.ingredient-info').toggle();
});



// Drinks
function createNewItem () {
	var name = $(this).find('.create-name').val();
	var price = $(this).find('.create-price').val();
	var description = $(this).find('.create-description').val();
	var item = new FoodItem (name, calories, vegan, gluten, citrus);
	ingredients.push(item);
	localStorage.setItem('ingredients',JSON.stringify(ingredients));
}

// Ingredient Button
$(document).on('click','ingredient-button', function() {

	return false;
})











});