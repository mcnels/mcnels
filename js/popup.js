// Developer Info - Arjun (https://github.com/arjun0108)
var guests = [""];

// save info in firebase
var db = firebase.firestore();

window.onload = function popGuests() {
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

	var inputName = document.getElementById("namefield").value;
	var inputMsg = document.getElementById("msgfield").value;

	if (inputName == "") {
		alert("Please enter your full name before submitting.");
		document.getElementById("submit").disabled = false;
		return false;
	}
 
	db.collection("attendees").doc(inputName).set({
		Message: inputMsg
	})
	.then(function() {
	//  hideModal();
		document.getElementById("namefield").value = '';
		document.getElementById("msgfield").value = '';

		if (guests.includes(inputName)){
			window.location.replace("afterparty.html");
		} else {
			document.getElementById('rsvpMsg').style.display = 'none';
			document.getElementById('entryForm').style.display = 'none';
			$('#thanks').toggle();
		}

	})
	.catch(function(error) {
	console.error("Error writing doc", error);
	});

	document.getElementById("submit").disabled= false;
		
}