
// -------------Dynamically Create Menu----------------
$(document).on('ready', function() {

	
	// Create header title with restaurant name of an instance of a restaurant
	var createHeader = function(restaurantObject){
		$('.header').append('<h1>Welcome to ' + restaurantObject.name + '!</h1>');
	}

	// Call createHeader function, passing it an instance of a restaurant
	createHeader(ourRestaurant);

	// Construct the elements for an individual section of a menu from a pre-created template
	var createMenuSection = function(sectionName){
		var section = $('.template.original').clone();
		section.removeClass('original');
		$('#menu').append(section);
		section.find($('h3')).text(sectionName);
		// section.find($('ul')).append($('<li>'));

		return section;
	};


	// Construct individual menu items to be appended to sections of the menu at a later time
	var menuItem = function(obj){

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
		item.append(plate);

		if (obj.isVegan()) {
			var veganIcon = $('<h5 class="icon">★</h5>');
			item.append(veganIcon).addClass('vegan');
		}
		if (obj.isGlutenFree()) {
			var glutenIcon = $('<h5 class="icon">●</h5>');
			item.append(glutenIcon).addClass('gluten');
		}
		if (obj.isCitrusFree()) {
			var citrusIcon = $('<h5 class="icon">❁</h5>');
			item.append(citrusIcon).addClass('citrus');
		}
		item.append(price).append(descriptionContainer);
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
	
	build(app, 'Appetizers');

	
	build(drk, 'Drinks');

	
	build(ent, 'Entrees');

	
	build(des, 'Desserts');


	// Event Handlers for Menu Sections
	$(document).on('click', '.item', function(){
		// console.log('clicked');
		$(this).find('.description-container').slideToggle();
	});

	$(document).on('click', '.add-item', function(){   
		var itemPrice = +$(this).closest('.item').find('.price').text();
		// console.log('clicked');
		var orderItem = $(this).closest('.item').find('.plate').text();
		// console.log(orderItem);
		$('#order').append('<li class="order-item">' + orderItem + ' : $' + '<span>' + itemPrice + '</span>' + '</li>')
		orderPrice += itemPrice;
		$('#order-price').text(orderPrice);
		return false;
	});

	$(document).on('click', '.order-item', function() {
		var itemPrice = +$(this).find('span').text();
		orderPrice -= itemPrice;
		$('#order-price').text(orderPrice);
		$(this).remove();
	});

	
	// add highlight class to items matching checked box within customer preference form
	var highlight = function(item){

		$(document).find('.item').removeClass('highlighted');

		var arr = $('#customer-preference').find($(':checked')).toArray();
		
		var newClass = arr.map(function(item){
			var checkName = $(item).attr('name');
			return '.' + checkName;
		}).join('');

		$(document).find(newClass).addClass('highlighted');
	};

	// execute highlight class function when customer preference checkboxes are clicked
	$(document).on('click', '#customer-preference input[type="checkbox"]', function(){ 
		var item = $(this);
		highlight(item);
		
	});

	// execute highlight class function when document is ready. (checkbox state maintained when 'back' button used from different page)
	var item = $('#customer-preference input[type="checkbox"]');
	highlight(item);
	
  
});

































