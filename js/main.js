
// creating array of all prices, total of all prices,
// average of all prices

// var prices = items.map(function (obj){
// 		return obj.price
// });
// var total = prices.reduce(function (aPrice, bPrice){
// 	return aPrice + bPrice
// }); 

// var avg = total / prices.length;
// avg = avg.toFixed(2)

// function getAvg(arr){
// 	if (arr.indexOf('Object' > -1)) {
// 		return arr.map(function (obj){
// 			return obj.price
// 		}).reduce(function (a, b){
// 			return a + b
// 		}) / arr.length 
// 	}
// }

var Avg = items.reduce(function (memo, obj)
  {return memo + obj.price},0) / items.length

// Created Array of objects with prices between
// 14 and 18 dollars

// var goodPrices = items.filter(function (obj){
// 	if (obj.currency_code === "USD"){
// 	 return obj.price > 14.00 && obj.price < 18.00}
// }).map(function (obj){
// 	return obj.title
// });

function getGoodPrices(arr){
	if (arr.indexOf('Object' > -1)) {
		return arr.filter(function (obj){
			if (obj.currency_code === "USD"){
			return obj.price > 14.00 && obj.price < 18.00}
		}).map(function (obj){
			return obj.title + "<br>" + "<br>"
		}).join("")
	}
}

// Retrieve item name with GBP currency code

// var gbpTitle = items.filter(function (obj){
// 	if (obj['currency_code'] === "GBP") {
// 		return obj
// 	}
// })[0].title

function gbpTitle(arr){
	if (arr.indexOf('Object' > -1)) {
		return arr.filter(function (obj){
			if (obj.currency_code === "GBP") {
				return obj
			}
		})[0].title
	}
}

// var gbpPrice = items.filter(function (obj){
// 	if (obj['currency_code'] === "GBP") {
// 		return obj
// 	}
// })[0].price

function gbpPrice(arr){
	if (arr.indexOf('Object' > -1)) {
		return arr.filter(function (obj){
			if (obj.currency_code === "GBP") {
				return obj
			}
		})[0].price
	}
}

// Display list of items made of wood

// var woodenItems = items.filter(function (obj){
// 	if (obj.materials.indexOf('wood') > -1) {
// 		return obj
// 	}
// }).map(function (obj){
// 	return obj.title
// });

// function listWoodenItems(arr){
// 	if (arr.indexOf('Object' > -1)) {
// 		return arr.filter(function (obj){
// 			if (obj.materials.indexOf('wood') > -1){
// 				return obj
// 			}
// 		}).map(function (obj){
// 			return obj.title + " is made of wood." + "<br>"
// 		}).pop()
// 	}
// }


function listWoodenItems(arr){
	if (arr.indexOf('Object' > -1)) {
		return arr.filter(function (obj){
			if (obj.materials.indexOf('wood') > -1){
				return obj
			}
		}).map(function (obj){
			return obj.title + " is made of wood." + "<br>" + "<br>"
		}).join("")
	}
}
//Which ones made of more than 8 mats,
// display title, number of items, 
//and mats made of

// var mats8orMore = items.filter(function (obj){
// 	if (obj.materials.length >= 8) {
// 		return obj
// 	}
// }).map(function (obj){
// 	return obj.title + " has " + obj.materials.length + " materials"
// })


function listItems8OrMore(arr){
	if (arr.indexOf('Object' > -1)) {
		return arr.filter(function (obj){
			if (obj.materials.length >= 8) {
				return obj
			}
		}).map(function (obj){
			return "<div>" + obj.title + " has " + obj.materials.length + " materials " + "<br>" + obj.materials + "</div>" + "<br>"
		}).join("")
	}
}


// var listMats1 = items.filter(function (obj){
// 	if (obj.materials.length >= 8) {
// 		return obj
// 	}
// })[0].materials

// var listMats2 = items.filter(function (obj){
// 	if (obj.materials.length >= 8) {
// 		return obj
// 	}
// })[1].materials

//Items made by sellers total 

var madeBySeller = items.filter(function (obj){
	if (obj.who_made.indexOf('i_did') > -1) {
		return obj
	}
}).length
 
madeBySeller = madeBySeller + " were made by their sellers" 

var one =  document.querySelector('.one');
var two = document.querySelector('.two');
var three = document.querySelector('.three');
var four = document.querySelector('.four');
var five = document.querySelector('.five');
var six = document.querySelector('.six');
one.innerHTML = "$" + Avg.toFixed(2)
two.innerHTML = "<div>" + getGoodPrices(items) + "</div>";
three.innerHTML = gbpTitle(items) + " costs &pound;" + gbpPrice(items)
four.innerHTML = "<div>" + listWoodenItems(items) + "</div>"
five.innerHTML = "<div>" + listItems8OrMore(items) + "</div>"
six.innerHTML = madeBySeller





