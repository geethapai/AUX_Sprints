/*start of anonymous function to contain all variables*/
(function() {

/*JSON data object with contacts*/
var contacts = {
	"addressBook" : [
			{
				"name": "anand",
				"email": "anand@example.com"
			},
			{
				"name": "brenda",
				"email": "brenda@example.com"
			},
			{
				"name": "bart",
				"email": "bsimpson@example.com"
			},
			{
				"name": "jack",
				"email": "jspencer@example.com"
			},
			{
				"name": "jennifer",
				"email": "jam@example.com"
			},
			{
				"name": "marisa",
				"email": "marisa@example.com"
			},
			{
				"name": "michael",
				"email": "patterson@example.com"
			},
			{
				"name": "sabina",
				"email": "sbrown@example.com"
			},
			{
				"name": "travis",
				"email": "travis@example.com"
			}
	]
};

 // save DOM elements and common variables
var searchForm = document.getElementById("search-form"),
		searchField = document.getElementById("q"),
		getAllButton = document.getElementById("get-all"),
		count = contacts.addressBook.length,
		target = document.getElementById("output");


/*define the adr object to hold methods*/

var addr = {

	//define the method for submit
	search : function(event){

		//save the input value, contacts length and i to variables
		var searchValue = searchField.value,
			i;

		//stop the default behavior
		event.preventDefault();

		//clear the target area incase there's something in it
		target.innerHTML = "";

		//check the count
		if(count > 0 && searchValue !== ""){

			//loop through the contacts
			for(i = 0; i < count; i = i + 1) { 	
			
				//look through the name value to see if contains the search term string
				var obj = contacts.addressBook[i],
					isItFound = obj.name.indexOf(searchValue);

				//anything other than -1 means there is a match
				if(isItFound !== -1) {
					target.innerHTML += '<p>' + obj.name + ', <a href="mailto:' + obj.email + '">' + obj.email + '</a></p>';
				} //end if
			
			} // end for loop
		
		} // end count check

	},

		getAllContacts : function() {

			/*ready the loop*/
			var i;

			/*clear the contents of #output just in case there's something in there*/
			target.innerHTML = "";
			
			/*checking count before looping*/
			if(count > 0){
				/*loop through the contacts*/
				for(i = 0; i < count; i = i + 1) {
					
					var obj = contacts.addressBook[i];

					target.innerHTML +=	'<p>' + obj.name + ', <a href="mailto:' + obj.email + '">' + obj.email + '</a></p>';

				} // end for loop
			} // end of count check
		},
		

setActiveSection: function() {
	// add a class of "active" the wrapping div
	this.parentNode.setAttribute("class", "active");
},

removeActiveSection: function(){

	// remove the class from the wrapping div
	this.parentNode.removeAttribute("class");
},

addHoverClass: function() {
	// add a class of "hovering" to the wrapping div
	searchForm.setAttribute("class", "hovering");
},

removeHoverClass: function() {
	// remove all classes from the wrapping div
	searchForm.removeAttribute("class");
}

}; // end adr object

/*BELOW are the event listeners*/
/*activate autocomplete on keyUp*/
searchField.addEventListener("keyup", addr.search, false);

/*activate the focus event on the search box*/
searchField.addEventListener("focus", addr.setActiveSection, false);

/*remove the blur event on the search box*/
searchField.addEventListener("blur", addr.removeActiveSection, false);

getAllButton.addEventListener("click", addr.getAllContacts, false);

//activate the focus event on the search box
searchForm.addEventListener("mouseover", addr.addHoverClass, false);

//activate the blur event on the search box
searchForm.addEventListener("mouseout", addr.removeHoverClass, false);

searchForm.addEventListener("submit", addr.search, false);



})(); // end anonymous function