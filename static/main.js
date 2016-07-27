$(document).ready(function(){
    $("#txt_name").keyup(function(){
	var encoded = encodeURIComponent($(this).val());
	$.get( "/convert?s="+encoded, function( data ) {
	    $( "#qrcode-container" ).html( data );
	});
    });

});
