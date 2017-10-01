// JavaScript Document
$( document ).ready(function() {

// CHANGE Main Content
	$( ".mainNav" ).each(function(index) {
    $(this).on("click", function(){
			var thisID = $(this).attr('id');
			var pageName = thisID.replace('mainNav', '');
				// alert('clicked');
				$.post( "./page_templates/" + pageName + "Page.php", function( data ) {
  			$( "#divDynamicContents" ).html( data );
				});
			});
	});




});
// END ONLOAD FUNCTIONS
