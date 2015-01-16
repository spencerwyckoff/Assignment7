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
//Map the items in a new array with just the price objects, call that new array "priceArray"
var priceArray = items.map( function (item, i, array) {
	return item.price;
});

//Reduce the priceArray by adding the values "a" and "b" together to accumulate a total and name it "priceSum"
var priceSum = priceArray.reduce( function (a, b) {
	return (a + b);
});	

//Create average by taking priceSum and dividing it by the total # of albums
var priceAvg = priceSum / items.length;
//Convert my average to a string and make that string only 5 characters so it displays the $0.01 correction.
var priceString = priceAvg.toString();
var trimmedPrice = priceString.substring(0, 5);

//Print out my answer.
console.log("The average price is $" + priceAvg.toFixed(2) + " by using the .toFixed(2) method at the end...");

console.log("The average price is $" + trimmedPrice + " --- only if I convert it to a string first, then use the .substring method to trim it to the first 5 characters.");
console.log("");

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

//create a function that returns pricing on all objects between $14 and $18. You will use this parameter for the filter next.
var pricesArray_14_18 = function (item) {
	return item.price >= 14 && item.price <= 18;
}; 

//create a filter that filters to the parameter "pricesArray_14_18" and store it in a variable called "filtered"
var filtered = items.filter(pricesArray_14_18);

//Print out a preceding string for the answer...""
console.log("Items that cost between $14.00 USD and $18.00 USD:")

//Use a forEach on the newly filtered array and log out the parameter item's title object.
filtered.forEach( function (item) {
	console.log("title: " + item.title);
});
console.log("");

/*=====================================================================
Q: Show me how find the item with a "GBP" currency code and print its name and price. Please console.log the one you find.

A: 1970s Schlitz Malt Liquor Glass Beer Pitcher costs £18

Initial Thought Process for #3:

========================================================================*/

//create a function that returns item currency_codes that equal GBP
var GBP = function (item) {
	return item.currency_code === "GBP";
}

//create a new array filtered to the GBP function - and store it in a variable called "GBP_filtered"
var GBP_filtered = items.filter(GBP);

//Use a forEach on the filtered array set to print out the answer - the answer includes the parameter's title and price object + a british pound character code found online.
GBP_filtered.forEach( function (item) {
	console.log(item.title + " costs " + String.fromCharCode('163') + item.price);
});
console.log("");

/*========================================================================

Q: Show me how to find which items are made of wood. Please console.log the ones you find.

A: SALE Mid Century Siesta Ware White Mug with Anchor - Set of 3 is made of wood.
Bottle cap catcher personalized. Man cave gift for him- Wooden Beer pub sign - Groomsmen wedding Gift is made of wood.
Medium Size, Welcome To Our Firepit-Where Friends And Marshmallows Get Toasted At The Same Time-Painted Wood Sign-Custom Colors is made of wood.
Magnetic Wall Mount Bottle Opener Barware Set - Stainless Steel or Black - Personalized if you like! is made of wood.
Engraved Pocket Knife, Personalized Groomsmen Gift, Ring Bearer Gift, Graduation Gift, 4 Knives is made of wood.

Initial Thought process for #4:
	-wood is under the .materials property
	-we will also need the .title property for the final answer
	-I need to create a filter that looks through each object and sees if the .materials property includes "wood"
	-Once I have that new filtered list, I need to console.log the filteredlist.title

========================================================================*/

//Filter the items array down to just materials that have wood.  First grab the object "materials" on the "item" parameter THEN use indexOf to locate items within the materials array that have the string "wood" in it.  Call this function materialsArray.
var materialsArray = items.filter(function (item) {
	return item.materials.indexOf("wood") > -1;
});

//Run a forEach on the filtered down materialsArray and have it print the item's title and the answer string.
materialsArray.forEach (function (item) {
 console.log (item.title + " is made of wood.");
});
console.log("");

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
	***Is there a way to list items top down?
========================================================================*/

//create a filtered items list that returns just items that have greater than or = to 8 materials.  Store that in a variable called manyMaterials.
var manyMaterials = items.filter( function (item) {
		return item.materials.length >= 8;
});

//run a forEach on the filtered list and log each item's title and how many materials they have within an answer log.
	manyMaterials.forEach (function (item, i, array) {
		console.log(item.title + " has " + item.materials.length + " materials: ");
//using the item parameter, print each material individually so it creates a nice vertical list.
		item.materials.forEach ( function (item) {
			console.log(item);
		});
	});

console.log("");

// var scripts = new Array();
// scripts[0] = "PHP";
// scripts[1] = "ASP";
// scripts[2] = "JavaScript";
// scripts[3] = "HTML";

// for (i=0;i<scripts.length;i++)
// {
// document.write(scripts[i] + "<br >");
// }
/*========================================================================
Q: Show me how to calculate how many items were made by their sellers

A: 18 were made by their sellers
========================================================================*/

//create an items filter for items that who_made property equals the string "i_did." Assign that to a variable called madeBySeller.
var madeBySeller = items.filter ( function (item) {
	return item.who_made === "i_did";
});

//find out how many objects are in the filtered array using the length method and log it to the console with the answer string.
console.log(madeBySeller.length + " were made by their sellers");



