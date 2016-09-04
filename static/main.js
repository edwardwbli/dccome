$(document).ready(function(){
    //function to support keyup event in #txt_name
    $("#txt_name").change(function(){
	var encoded = encodeURIComponent($(this).val());
	$.get( "/convert/"+encoded, function( data ) {
	    $( "#qrcode-container" ).html( data );
	});
    });

    //other function

});
