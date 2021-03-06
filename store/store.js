/////////////////////////////////////////////////////////
//Rebecca's Store Object Additions//
////////////////////////////////////////////////////////
var book1 = {
		"id": "book1",
    "title": "Spawn, #1 (Comic Book) Comic – Color, 1992",
    "author": "TODD MCFARLANE",
		"picture": "https://images-na.ssl-images-amazon.com/images/I/51oYHJNoHTL._SX324_BO1,204,203,200_.jpg",
		"selling-points": [
				"Single issue comic book",
				"#1",
				"Featuring classic Todd McFarlane story and art"
      ],
		"price": "$5.99"
}
var book2 = {
		"id": "book2",
    "title": "Spawn, #2 (Comic Book) Comic - Color, 1992",
    "author": "TODD MCFARLANE",
		"picture": "https://images-na.ssl-images-amazon.com/images/I/51w44xM5PIL._SX298_BO1,204,203,200_.jpg",
		"selling-points": [
				"Single issue comic book",
				"#2",
				"Featuring classic Todd McFarlane story and art"
      ],
    "price": "$7.99"
}
var book3 = {
		"id": "book3",
    "title": "Spawn, #3 (Comic Book) Comic – Color, 1992",
    "author": "TODD MCFARLANE",
		"picture": "https://images-na.ssl-images-amazon.com/images/I/51rTGZmBE7L._SX322_BO1,204,203,200_.jpg",
		"selling-points": [
				"Single issue comic book",
				"#3",
				"Featuring classic Todd McFarlane story and art"
      ],
		"price": "$6.99"
}
var book4 = {
		"id": "book4",
    "title": "Spawn, #4 (Comic Book) Comic – Color, 1992",
    "author": "TODD MCFARLANE",
		"picture": "https://images-na.ssl-images-amazon.com/images/I/61qackl4H7L._SX323_BO1,204,203,200_.jpg",
		"selling-points": [
				"Single issue comic book",
				"#4",
				"Featuring classic Todd McFarlane story and art"
      ],
		"price": "$12.99"
}
var book5 = {
		"id": "book5",
    "title": "Spawn, #5 (Comic Book) Comic – Color, 1992",
    "author": "TODD MCFARLANE",
		"picture": "https://images-na.ssl-images-amazon.com/images/I/51mGQH6REzL._SX322_BO1,204,203,200_.jpg",
		"selling-points": [
				"Single issue comic book",
				"#5",
				"Featuring classic Todd McFarlane story and art"
      ],
    "price": "$8.50"
}
var book6 = {
		"id": "book6",
    "title": "Spawn, #6 (Comic Book) Comic – Color, 1992",
    "author": "TODD MCFARLANE",
		"picture": "https://images-na.ssl-images-amazon.com/images/I/61%2BCM2Z1EgL.jpg",
		"selling-points": [
				"Single issue comic book",
				"#6",
				"Featuring classic Todd McFarlane story and art"
      ],
    "price": "$16.25"
}


var add_to_page = function(book) {
	$('#' + book.id + ' .title').text(book.title);
	$('#' + book.id + ' .author').text(book.author);
	$('#' + book.id + ' .picture img').attr("src", book.picture);
	$('#' + book.id + ' .selling-points').text(book["selling-points"]);
	$('#' + book.id + ' .price').text(book.price);
}

add_to_page(book1);

//Rebecca's Loop//
// loop over the selling_points array with .forEach().
// Try using a loop within addToPage() to add selling_points to your page as an ordered list.
// Put all of the selling points li’s into a variable, wayne can append to a list.
//Keep in mind: a book object will be passed into the addToPage() function, which wayne is changing.
//It will use append and contain full html strings.
 //$contentNode.append($("<div class='selling-points'").html("<ol>" + sellingPointsListItems + "</ol>"));

var sellingPointsListItems = "";
var sellItems = book6['selling-points'];

function sellPoints (point) {
	sellingPointsListItems += "<li>" + point + "</li>";
}
sellItems.forEach(sellPoints);
console.log(sellingPointsListItems);
