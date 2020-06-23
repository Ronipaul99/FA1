function getBookings() {
	var url = "../booking.json";
	// Ajax Call : on selecting the location and date of booking make an ajax call
	// Check if the date is a valid date (call the validate date method) - Populate error message if the user has entered a past date
	// Check if there is any availability in the selected location on the date of booking
	// Populate error message if there is no availability in the location on the selected date
	var location=document.getElementById("location").value;
	var date=document.getElementById("dor").value;
	var url="./booking.json"
	var xhr=new XMLHttpRequest();
	xhr.open('GET',url);
	xhr.onload = function () {
		if(validateDate(date,new Date())){
			var valid=false;
			var xyz=xhr.response
			var str=JSON.parse(xyz)
			 if(location==="Allepey"){
			     str.Allepey.forEach(element => {
					 if(element.toString()===date.toString()){
						  valid=true;
						  document.getElementById("btn").disabled=false;
					 }
					
				 });
			 }else if(location==="Kumarakom"){
				str.Kumarakom.forEach(element => {
					if(element.toString()===date.toString()){
						 valid=true;
						 document.getElementById("btn").disabled=false;						 
					}
				});
			 }else if(location==="Tarkarli"){
				str.Tarkarli.forEach(element => {
					if(element.toString()===date.toString()){
						 valid=true;
						 document.getElementById("btn").disabled=false;
					}
				});
			}
			if(valid==false){
				document.getElementById("dateError").innerText = "Houseful!! Booking is not available on this date"
				console.log(valid);
				
			}
			 
		}else{
            document.getElementById("dateError").innerText = "Ride Date should be greater than today"
		}
		
    }
	xhr.send();
	
}


/* Debug the below code to display the appropriate booking/success message */
function book() {
 window.preventdefault();
	// Charges for one person for one day is 100$
	// If the Number of people is less than 5 no discount is offered
	// If the number of people is more than 5 and less than 15 then a discount of 5% is offered
	// If the number of people is more than 14 and less than 21 a discount of 10% should be offered

	var nop = document.forms[0].nop.value;
	var cost = (nop * 5);
	var cost1 = ((nop * 100 - (nop * 100)) * 5);
	var cost2 = ((nop * 100 - (nop * 100)) * 10);

	if (nop > 5 && nop <= 15) {
		document.getElementById("successMessage").innerHTML = "Successful booking.Total amount to be paid is: $" + cost;
	} else if (nop >= 14 && nop <= 21) {
		document.getElementById("successMessage").innerHTML = "Successful booking.Total amount to be paid is: $" + cost1;
	} else {
		document.getElementById("successMessage").innerHTML = "Successful booking.Total amount to be paid is: $" + cost2;
	}

	return false
}



function validateDate(bookingDate, todayDate) {
	// write the code to return true if bookingDate is after todayDate and false if bookingDate is a past date
	var bookingdate=new Date(bookingDate)
	console.log(bookingdate-todayDate);
	if(bookingdate-todayDate>0){
		return true;
	}else{
		return false;
	}
}







