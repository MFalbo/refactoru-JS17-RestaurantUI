$(document).on('ready', function(){


function appendIngredient (item) {
	var newIngredient = $('<li>' + item.name + '</li>');

	var ingredientInfo = $('<div class="ingredient-info"> Calories: ' + item.calories + '<br>Vegan: ' + item.vegan + '<br>Gluten Free: ' +
	item.glutenFree + '<br>Citrus Free: ' + item.citrusFree + '</div>');

	$('#ingredients-list').append(newIngredient);
	newIngredient.append(ingredientInfo);


}

ingredients.map(appendIngredient);

function createIngredient () {
		var name = $('#ingredient-name').val();
		var calories = $('#ingredient-calories').val();
		var vegan = $('#ingredient-vegan').prop('checked');
		var gluten = $('#ingredient-gluten').prop('checked');
		var citrus = $('#ingredient-citrus').prop('checked');

		var item = new FoodItem (name, calories, vegan, gluten, citrus);
		ingredients.push(item);
		console.log(ingredients);
}



$(document).on('submit', '#ingredient-form', function() {
	createIngredient();
	$('#ingredients-list li').remove();
	ingredients.map(appendIngredient);
	return false;
});



$(document).on('click', 'li', function() {
	console.log('CLICK');
	$(this).find('.ingredient-info').toggle();
});
















});