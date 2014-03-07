/*Using JQuery*/

(function(){
/*define the addressbook object to hold methods*/

var addr = {

	//define the method for submit
	search : function(event){

		//stop the default behavior
			event.preventDefault();

		/*start the Ajax call*/
		$.getJSON('data/contacts.json', function(data) {

			//save the input value, contacts length and i to variables
			var searchValue = $('#q').val(),
					addrBook = data.addressBook,
					count = addrBook.length;


			//clear the target area incase there's something in it
			$('#output').empty();

			//check the count
			if(count > 0 && searchValue !== ""){

				//loop through the contacts
				$.each(addrBook, function (i , obj) { 	
				
					//look through the name value to see if contains the search term string
					var isItFound = obj.name.indexOf(searchValue);

					//anything other than -1 means there is a match
					if(isItFound !== -1) {
						$('#output').append('<p>' + obj.name + ', <a href="mailto:' + obj.email + '">' + obj.email + '</a><p>');
			
					} //end if
				
				}); // end each 
			
			} // end count check

		}); // end ajax call	

	},


		getAllContacts: function() {

			/*start Ajax call*/
			$.getJSON('data/contacts.json', function (data) {

					var addrBook = data.addressBook,
							count = addrBook.length;
							

					/*clear the contents of #output just in case there's something in there*/
					$('#output').empty();
					
					/*checking count before looping*/
					if(count > 0){

							/*loop through the contacts*/
							$.each(addrBook, function (i, obj) {

								 $('#output').append('<p>' + obj.name + ', <a href="mailto:' + obj.email + '">' + obj.email + '</a><p>');

						}); // end each

					} // end of count check
				

				}); // end ajax call
			
			}
		
		}; // end addr object


		//searchbox events
		$('#q').keyup(addr.search).focus(function() {

			$(this).parent().addClass("active");
		
		}).blur(function(){

			$(this).parent().removeClass("active");
		});

		//search form events
		$("#search-form").hover(function() {

			$(this).addClass("hovering");

		}).submit(addr.search);


		//get all contacts action
		$("#get-all").click(addr.getAllContacts);

	})(); // end anonymous function