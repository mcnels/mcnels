// Developer Info - Arjun (https://github.com/arjun0108)

$(function(){
    $('#rsvp').on('click', function (event) {
        showModal();
		event.stopPropagation(); 
    });
	$('#modalClose').on('click', function () {
        hideModal();
    });
	$('#closeButton').on('click', function () {
        hideModal();
    });
    
	// Do nothing when clicking on the modal content
	$('.modal-content').on('click', function (event) {
        event.stopPropagation();
    });
});

function showModal(){
	$('#myModal').fadeIn('slow');
		(function fun(){
			$('.modal-content').css({'transform':'translateY(-50px)'});
		})();
}

function hideModal(){
	$('#myModal').fadeOut('fast');
		(function fun2(){
			$('.modal-content').css({ 'transform':'translateY(0px)' });
		})();
}



$(document).on("click", function () {
    //click outside of ".nav__dropdown" class itself and menu will be hidden
	hideModal();
});

// @todo if name provided is in list of names, show afterparty page
// save info in firebase