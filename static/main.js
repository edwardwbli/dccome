$(document).ready(function(){
    //function to support keyup event in #txt_name
    $("#txt_name").keyup(function(){
	var encoded = encodeURIComponent($(this).val());
	$.get( "/convert?s="+encoded, function( data ) {
	    $( "#qrcode-container" ).html( data );
	});
    });

    //other function

});
