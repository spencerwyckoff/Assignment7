var names = ['tim', 'sean', 'greg', 'bill', 'julie', 'sam', 'linda'];

//For Each
names.forEach( function (name)	{
	console.log(name);
});


//For... In
for (var i in names) {
	console.log(names[i]);
}

//For Loop

var i;
for (i = 0; i < names.length; i++) {
	console.log(names[i]);
}

//While Loop
var i = 0;
while (i < names.length) {
	console.log(names[i]);
	i++;
}