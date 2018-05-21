/*//$(document).ready(function() {


	$("#firstNextButton").click(function(event) {
		 Act on the event 
		$( "#1" ).nextAll('div').remove();
		$('#co-borrowers').empty();

		var borrower = $("#noOfBorrower").val();
		for (var i = 1; i < borrower; i++) {
			
			//personal info with borrower
			$("#1").clone().appendTo('#pi-form').prop('id', i+1);

			//family info with co borrower
			$('<h2></h2>').addClass('box-title').text('Co-Borrower-'+i).appendTo('<div></div>').addClass("box-header with-border").appendTo('#co-borrowers');
			$("#family1").clone().appendTo('#co-borrowers').prop('id', 'family'+i+1);

		}


		event.preventDefault()
	});
//});
*/