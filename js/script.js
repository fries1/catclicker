//	model
/*var model = function(){
	var id = 1;
	function Cat(name, imgUrl){
		this.name = name;
		this.image = imgUrl;
		this.counter = 0;
		this.id = id++;
	}

	var names = ['Gustav', 'Charles', 'Bjorn', 'Hans', 'Dagobert'];

	var cats =[];
	// create 5 cats
	for(var i=1; i < 6; i++){
		var imageURL = 'images/cat' + i + '.jpg';
		cats.push(new Cat(names[i-1], imageURL));
	}
	return cats;
}
*/

var model = {
	id: 1,
	Cat: function Cat(name, imgUrl){
		this.name = name;
		this.image = imgUrl;
		this.counter = 0;
		this.id = model.id++;
	},
	names: ['Gustav', 'Charles', 'Bjorn', 'Hans', 'Dagobert'],
	createCats: function(names){
		// create 5 cats
		var cats = [];
		for(var i=1; i < 6; i++){
			var imageURL = 'images/cat' + i + '.jpg';
			cats.push(new model.Cat(names[i-1], imageURL));
		}
		return cats;
	}

}

// add cat links to DOM
var view = {
	addLinksToDom: function(array){
		$('#links').append('<ul id="link-items">')
			for(var i=0; i<array.length; i++){
				var catname = array[i].name;
				var catId = array[i].id;
				var imgUrl = array[i].image;
				var counter = array[i].counter;
				$('#link-items').append('<li id="' + catId + '">' + catname + '</li>');
				$('#'+catId).click(this.updateDisplayArea(array[i]));
			}
			$('#links').append('</ul>');
	},

	updateDisplayArea: function(obj){
		return function(){
			// clear displayArea
			$('.displayArea').empty();

			// append name, img, counter
			$('.displayArea').append('<div><p>' + obj.name + '</p></div>');
			$('.displayArea').append('<img src="' + obj.image + '" id="c' + obj.id + '">');
			$('.displayArea').append('<p id="counter">Counter ' + obj.counter + '</p>')
			var id = '#c' + obj.id;
			$(id).click(function(){
				return function(){
					obj.counter++;
					var c = obj.counter;
					$('#counter').text('Counter ' + c);
				}

			}());
		}
	},

	addButtonListener: function(){

		$('#admin').click(function(){
			console.log('Button clicked');
			var admin_input = ('<div> </div>')
			$('.input-area').append('<div >')
		})
	}
}

// octopus
var octopus = {
	adminmode: false,
	init: function() {
		var cats = model.createCats(['Gustav', 'Charles', 'Bjorn', 'Hans', 'Dagobert']);
		view.addLinksToDom(cats);
		view.updateDisplayArea(cats[0])();
		view.addButtonListener();
	}

}

octopus.init();
/*
function(){
	var cats = model();
	view.addLinksToDom(cats);
	view.updateDisplayArea(cats[0])();
	view.addButtonListener();

}

octopus();
*/