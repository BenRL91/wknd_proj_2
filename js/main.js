
// creating array of all prices, total of all prices,
// average of all prices
var prices = items.map(function (obj){
		return obj.price
});
var total = prices.reduce(function (aPrice, bPrice){
	return aPrice + bPrice
}); 

var avg = total / prices.length;

// Created Array of objects with prices between
// 14 and 18 dollars

var goodPrices = items.filter(function (obj){
	if (obj.currency_code === "USD"){
	 return obj.price > 14.00 && obj.price < 18.00}
}).map(function (obj){
	return obj.title
});

// Retrieve item name with GBP currency code

var gbpTitle = items.filter(function (obj){
	if (obj['currency_code'] === "GBP") {
		return obj
	}
})[0].title

var gbpPrice = items.filter(function (obj){
	if (obj['currency_code'] === "GBP") {
		return obj
	}
})[0].price

// Display list of items made of wood

var woodenItems = items.filter(function (obj){
	if (obj.materials.indexOf('wood') > -1) {
		return obj
	}
}).map(function (obj){
	return obj.title
});

//Which ones made of more than 8 mats,
// display title, number of items, 
//and mats made of

var mats8orMore = items.filter(function (obj){
	if (obj.materials.length >= 8) {
		return obj
	}
}).map(function (obj){
	return obj.title + " has " + obj.materials.length + " materials"
})
//Items made by sellers total 

var madeBySeller = items.filter(function (obj){
	if (obj.who_made.indexOf('i_did') > -1) {
		return obj
	}
}).length

madeBySeller = madeBySeller + " were made by their sellers"
