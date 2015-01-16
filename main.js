/*  QUESTIONS TO ANSWER

==========================================================================
Q: Show me how to calculate the average price of all items. Please console.log the average.

A: The average price is $23.62

What do we know???? 
-var items is an array of 25 objects
-Within each object, there are roughly 40 different properties

My Thought Process for Exercise 1:
	-I want to create a new array that just shows the price property for each of the 25 different objects.
			**For this I think I want to use the map() method....

	-Then I want to take each of those price values and convert them to numerals.
	-Then I want to add all of those values together.
			**Realized we can use the reduce() method to do this...
	-Then I want to divide that total by the total (.length)
	-Then I want to return the answer in a string "The average price is " + (answer)""
========================================================================*/
var priceArray = items.map( function (item, i, array) {
	return item.price;
});

var priceSum = priceArray.reduce( function (a, b) {
	return (a + b);
});	

var priceAvg = priceSum / items.length;
var priceString = priceAvg.toString();
var trimmedPrice = priceString.substring(0, 5)

console.log("The average price is $" + priceAvg.toFixed(2) + " by using the .toFixed(2) method at the end...");

console.log("The average price is $" + trimmedPrice + " --- only if I convert it to a string first, then use the .substring method to trim it to the first 5 characters.");
/*=====================================================================
Q: Show me how to get an array of items that cost between $14.00 and $18.00 USD

A: "Items that cost between $14.00 USD and $18.00 USD:"
[
{
  title: "1970s Coors Banquet Glass Beer Pitcher",
  ...
},
{
  title: "The Three Broomsticks Customizable Beer Stein Mug, Harry Potter Inspired, hogsmeade village, harry potter gift, three broomsticks mug",
  ...
},
{
  title: "Hand Painted Colorful Feather Glass",
  ...
}
]
Initial Thought Process for #2: WRONG!!!!!
	-Use map() method to grab the title property for each object
	-Use priceArray from earlier and create an if statement that measures the prices between $14-18.  
	-"console.log(Items that cost between...)" 
		console.log (titlesArray_14_18)
========================================================================*/
var pricesArray_14_18 = function (item) {
	return item.price >= 14 && item.price <= 18;
}; 

var filtered = items.filter(pricesArray_14_18);

console.log("Items that cost between $14.00 USD and $18.00 USD:")

filtered.forEach( function (item) {
	console.log("title: " + item.title);
});

/*=====================================================================
Q: Show me how find the item with a "GBP" currency code and print its name and price. Please console.log the one you find.

A: 1970s Schlitz Malt Liquor Glass Beer Pitcher costs £18

Initial Thought Process for #3:

========================================================================*/
var GBP = function (item) {
	return item.currency_code === "GBP";
}

var GBP_filtered = items.filter(GBP);

GBP_filtered.forEach( function (item) {
	console.log(item.title + " costs " + String.fromCharCode('163') + item.price);
});
/*========================================================================

Q: Show me how to find which items are made of wood. Please console.log the ones you find.

A: SALE Mid Century Siesta Ware White Mug with Anchor - Set of 3 is made of wood.
Bottle cap catcher personalized. Man cave gift for him- Wooden Beer pub sign - Groomsmen wedding Gift is made of wood.
Medium Size, Welcome To Our Firepit-Where Friends And Marshmallows Get Toasted At The Same Time-Painted Wood Sign-Custom Colors is made of wood.
Magnetic Wall Mount Bottle Opener Barware Set - Stainless Steel or Black - Personalized if you like! is made of wood.
Engraved Pocket Knife, Personalized Groomsmen Gift, Ring Bearer Gift, Graduation Gift, 4 Knives is made of wood.

Thought process for #4:
	-wood is under the .materials property
	-we will also need the .title property for the final answer
	-I need to create a filter that looks through each object and sees if the .materials property includes "wood"
	-Once I have that new filtered list, I need to console.log the filteredlist.title

========================================================================*/
var materialsArray = items.filter(function (item) {
	return item.materials.indexOf("wood") > -1;
});

materialsArray.forEach (function (item) {
 console.log (item.title + " is made of wood.");
});
/*========================================================================

Q: Show me how to find which items are made of eight or more materials. Please console.log the ones you find.

A: Qty of 2 Groomsmen Gift - Stainless Steel Personalized Bottle Opener - NO Capcatcher has 9 materials:
wall mount bottle opener
wedding
man cave
christmas gift
guy gift
fathers day
home bar
beer
bar

The Three Broomsticks Customizable Beer Stein Mug, Harry Potter  Inspired, hogsmeade village, harry potter gift, three broomsticks mug  has 13 materials:

glass
sandblast cabinet
vinyl
beer glass
pint glass
etched pint glass
etched glass
etched beer glass
16 oz pint
beer gift
etched harry potter glass
the three broomsticks glass
personalized harry potter glass

Thought Process for #5:
	-The answer needs a title and materials
	-Filter the items array so that we get materials and that there are >= 8 materials
	-console.log the title property and list the materials
========================================================================*/
var manyMaterials = items.filter( function (item) {
		return item.materials.length >= 8;
});

var logManyMaterials = manyMaterials.forEach (function (item, i, array) {
	console.log(item.title + " has " + item.materials.length + " materials: " + item.materials);
});

/*========================================================================
Q: Show me how to calculate how many items were made by their sellers

A: 18 were made by their sellers
========================================================================*/










