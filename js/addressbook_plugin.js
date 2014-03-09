//enclose the plugin so no variables leak out
(function($){

	//define and name the plugin
		$.fn.addressBookplugin = function(options){

			//define and name default options
			var defaults = {
					yourContacts: "data/contacts.json", //create a JSON file named contacts.json to load your contacts
					ouput: "#q"
			}; 

			//let options be customized by the user
			var options =$.extend(defaults,options);

			//loop through each element you're attaching the plugin to
			return this.each(function() {
				
				var lookup = $(this),

					addr = {

				  	search : function(event) {

				  		//stop the default behavior
							event.preventDefault();

							/*Ajax call begins*/
							$.getJSON(options, 'data/contacts.json', function(data) {

								//save the input value, contacts length to variables
								var searchValue = $('#q').val().toLowerCase(),
											 addrBook = data.addressBook,
	                        count = addrBook.length;
							

									//clear the target area incase there's something in it
										$('#output').empty();

										//check the count
										if(count > 0 && searchValue !== ""){

											//loop through the contacts
											$.each(addrBook, function (i , obj) { 	
											
												//look through the name value to see if contains the search term string
												var isItFound = obj.name.toLowerCase().indexOf(searchValue);

												//anything other than -1 means there is a match
												if(isItFound !== -1) {
													$('#output').append('<p>' + obj.name + ', <a href="mailto:' + obj.email + '">' + obj.email + '</a><p>');
										
												} //end if

									}); // end each

		  					} // end count check

		  			}); // end ajax call

					},

    })(jQuery);


$(document).ready(function()) {

	// attached address book plugin to the #output div
	$('#output').addressBookplugin({
		ouput: "#q"	
	});
}); // close document.ready
