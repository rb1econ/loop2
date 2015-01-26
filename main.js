$(document).on('ready', function() {
  
});

var animals = ['rat', 'cat', 'butterfly', 'marmot', 'ocelot'];

// // 	ONE | \\

// for(var i=0; i < animals.length-1; i++){
// 	console.log(animals[i]);
// };


// //TWO || \\
// for(var i=0; i < animals.length; i++){
// 	if (i%2===0) {
// 		console.log(animals[i]);
// 	}

// };

// //THREE ||| \\
// var humans = animals.reverse();
// for(var i = 0; i<animals.length; i++){
	
// 	console.log(humans[i]);
// };


// //four |||| \\
for (var i=0; i<animals.length; i++) {
	if(i===1 || i===2 || i===3){
		console.log(animals[i]);
	};

	console.log(animals[i]);
};