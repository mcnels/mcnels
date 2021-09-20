// Developer Info - Arjun (https://github.com/arjun0108)
var guests = [""];

$(function(){
    $('#rsvp').on('click', function (event) {
        showModal();
		popGuests();
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

// save info in firebase
var db = firebase.firestore();

function popGuests() {
	db.collection("afterparty").get()
	.then(querySnapshot => {
		querySnapshot.forEach((doc) => {
			this.guests.push(doc.id);
		});
	})
	.catch(function(error) {
        console.error("Error writing guests", error);
     });
}
 
function storeData() {
	
	document.getElementById("submit").disabled = true;

	// Make namefield required

  var inputName = document.getElementById("namefield").value;
  var inputMsg = document.getElementById("msgfield").value;

  if (inputName == "") {
    alert("Name must be filled out");
	document.getElementById("submit").disabled = false;
    return false;
  }
 
     db.collection("attendees").doc(inputName).set({
         Message: inputMsg
     })
     .then(function() {
		 hideModal();
		 document.getElementById("namefield").value = '';
		 document.getElementById("msgfield").value = '';

		if (guests.includes(inputName)){
			window.location.replace("afterparty.html");
		}
         console.log("Doc successful");
     })
     .catch(function(error) {
        console.error("Error writing doc", error);
     });

	 document.getElementById("submit").disabled= false;
		
}