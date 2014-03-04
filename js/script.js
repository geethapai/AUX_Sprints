/*JSON data object with contacts*/

var contacts = {
	"addressBook" : [
			{
				"name": "anand",
				"email": "anand@example.com",
			}
			{
				"name": "brenda",
				"email": "brenda@example.com",
			}
			{
				"name": "bart",
				"email": "bsimpson@example.com",
			}
			{
				"name": "jack",
				"email": "jspencer@example.com",
			}
			{
				"name": "jennifer",
				"email": "jam@example.com",
			}
			{
				"name": "marisa",
				"email": "marisa@example.com",
			}
			{
				"name": "michael",
				"email": "patterson@example.com",
			}
			{
				"name": "sabina",
				"email": "sbrown@example.com",
			}
			{
				"name": "travis",
				"email": "travis@example.com",
			}
	]
};

function(){

/*caching initial variables*/
var object = contacts.addressBook // save JSON object with contacts
	contactsCount = object.length, // # of items in JSON 9
	target = document.getElementByTagName("body")[0],// this is where i'm outputting data
	i; // declare the "i" variable for later use in the loop

/*before doing anything make sure there are contacts to loop through*/
if(contactsCount > 0) {
/*loop through every JSON object item until hiting #9, then stop */
for (i = 0; i<contactsCount; i = i +1) {
	
	/*inside the loop "i" is the array index*/

	var item = object[i],
			name = item.name, // saving the name to a variable
			email = item.email; // saving the email to variable

	target.innerHTML += '<p><a href= "mailto:'+ email +'">' + name + '</a></p>'; 
 
} // end for loop

} // end count check

})(); // end anonymous function
































