// Define a function max() that takes two numbers as arguments and returns the largest of them. Use the if-then-else construct available in JavaScript.
// ---------------------

function max(a, b) {
  if (a > b) {
    return(a + " is greater than " + b + ".");
  } else {
    return(b + " is greater than " + a + ".");
  }
}


//Tim's method
function max (a, b) {
  return (a > b) ? a : b;
}

// ---------------------
// Define a function maxOfThree() that takes three numbers as arguments and returns the largest of them.
// ---------------------

function maxOfThree(a, b, c) {
  if (a >= b && a >= c) {
    return (a);
  } else if (b >= a && b >= c) {
  return b;
  } else {
    return c;
  }
}

//Tim's method - reuse your current library
function maxOfThree(a, b, c) {
  return max(max(a,b),c);
}

//INTRO TO SWITCH STATEMENT:
var myName = "Spencer"

switch (name) {

  case "Bob":
    console.log("My name is Bob");

  case "Mark":
    console.log("My name is Mark");

  case "Spencer":
    console.log("My name is Spencer");

  default:
    console.log("My name is none of these");

}




// ---------------------
// Write a function that takes a character (i.e. a string of length 1) and returns true if it is a vowel, false otherwise.
// ** REWRITE THIS ONE!
// ---------------------

var vowels = ["a", "A", "e", "E", "i", "I", "o", "O", "u", "U"]

var isVowel = function (char) {
  if (char.length === 1) {
    for (var i = 0; i < vowels.length; i++) {
      if (char === vowels[i]) {
        return true;
      }
    }
    return false;    

  } else {
    console.log("Please use only one character.");
  };
};

// ---------------------
// Write a function translate() that will translate a text into "rÃ¶varsprÃ¥ket". That is, double every consonant and place an occurrence of "o" in between. For example, translate("this is fun") should return the string "tothohisos isos fofunon".
// ---------------------
// var phrase = "My Name is Spencer";
var newArray = [];

var translate = function (phrase) {
  var lower_phrase = phrase.toLowerCase();
  
  var split_phrase = lower_phrase.split("");
  console.log(split_phrase);

  split_phrase.forEach( function(x) {
    if (!isVowel(x)) {
      newArray.push(x + "o" + x);
    }; 

    console.log(newArray.join(''));

    phrase.length = 0;
    


    // console.log(newArray);
  // var joined = newArray.join("");
  
  // console.log(joined);
  });

 };

// ---------------------
// Define a function sum() and a function multiply() that sums and multiplies (respectively) all the numbers in an array of numbers. For example, sum([1,2,3,4]) should return 10, and multiply([1,2,3,4]) should return 24.
// ---------------------

var array = [9, 8, 7, 6, 5];
var sum_total = 0;
var mult_total = 1;

var sum = function (numbers) {
  
  numbers.forEach( function(x) {
    sum_total += x;
  });
  console.log(sum_total);
  sum_total = 0;
};

var multiply = function (numbers) {
  
  numbers.forEach( function(x) {
    mult_total *= x;
  });
  console.log(mult_total);
  mult_total = 1;  
};

// ---------------------
// Define a function reverse() that computes the reversal of a string. For example, reverse("jag testar") should return the string "ratset gaj".
// ---------------------

// var string = "Spencer Wyckoff"

var reverse = function(string) {
  var split = string.split("");
  split.reverse();
  console.log(split.join(""));
}

// ---------------------
// Write a function findLongestWord() that takes an array of words and returns the length of the longest one.
// ---------------------

// var animals = ["cat", 'bird', 'pigeon', 'antelope'];
var numbers = [];

var findLongestWord = function (words) {
  words.forEach( function(x) {
    numbers.push(x.length);
  });

  return Math.max.apply(null, numbers);
}

// ---------------------
// Write a function filterLongWords() that takes an array of words and an integer i and returns the array of words that are longer than i.
// ---------------------

var filterLongWords = function (words, i) {
  words.forEach( function(x) {
    var wordLength = x.length;
    if (wordLength > i) {
      console.log(x);
    };
  });
};

// ---------------------
// Write a function charFreq() that takes a string and builds a frequency listing of the characters contained in it. Represent the frequency listing as a Javascript object. Try it with something like charFreq("abbabcbdbabdbdbabababcbcbab").
// ---------------------

var charFreq = function (string) {
  var stringSplit = string.split("");
  console.log(stringSplit);




  // var freqListing = new Object();

};









