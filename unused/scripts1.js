// JavaScript Document
//********add select belt level at init.

var dt = new Date(); // creates date object
var minutes = 0.0, timeSave = 0.0;  // float/doubles
var image;
var beltLevelInt = 0, beltSave = 0, screenWidth= 0; // integers
var buttonHalf = false;

$( document ).ready(function() {
	  alert('hi');
});





// ----------------BASIC LOAD PAGE FUNCTIONS-----------------------

// ONLOAD - INDEX/BODY - if there is no hoursBanked key in local storage, prompts for user estimate of total mat hours to date, and belt status
// if there is an hoursBanked, there will have to be a belt status, so both will be loaded.  This is persistent, and user can utilize app over time
function loadPage(){
	document.getElementById('bodyIndex').bgColor="black";
	loadSplash();
	screenWidth = window.innerWidth;
	loadValues();
}

// ---------------------LOAD ALL VALUES --------------------
function loadValues(){
	loadThePage();
	loadHours();}


// Continually reloads the page every time the window-width is resized
function reLoad(){
	if(window.innerWidth != screenWidth)
		{location.assign("contents.html");}}


// resizes body margin as window is resized and header changes height/size so that body fits header
function loadThePage(){
	 document.getElementById('divBody').style.marginTop = (window.innerWidth / 5) + "px";
	 }


// load vert/horiz splash screen image depending on screen-size / landscape or portrait orientation, then loads contents.html
function loadSplash(){
var imge = document.getElementById('imgSplashScreen');
if (window.innerWidth > window.innerHeight){ // if window inner-width is greater than inner-height
   imge.src = "images/sScreenHoriz.jpg";  }
else
	{ imge.src = "images/sScreenVert.jpg";}
	setTimeout(function(){showContents();}, 6000); // after 6 seconds loads contents.html
}


function showContents(){
document.getElementById('screenDiv').style.display="none";
document.getElementById('bodyIndex').bgColor="#ff0040";
document.getElementById('allStuff').style.display="block";
}


// reloads page after 1.1 second
function reloadPage(){
setTimeout(function(){location.reload();}, 1100);		}










// ---------------------LOAD VALUES FROM LOCALSTORAGE---------------

// ----------------------LOAD HOURS -------------------------
// and send through addMins function to log initial hours
function loadHours(){
	if(localStorage.getItem("LSHours") == null){ // IF NO HOURS BANKED LS --- WILL PROMPT USER FOR TOTAL HOURS THUS FAR
	// ************GIVE EXPLANATION HOW TO ESTIMATE HOURS - EX. ESTIMATE HOW MANY TIMES YOUVE MADE EACH MONDAY EVE, TUESDAY MORNING, J
	// ************SATURDAY CLASS ECT, THEN MULTIPLY EACH NUMBER BY THE LENGTH OF EACH CLASS
		 var hours;
		 while(hours==null){
		 hours = prompt("Please estimate your current total mat hours to date", "");
		 if(hours==null)
		 	{alert("One way of calculating mat hours is to estimate how many times you've attended each class your academy offers. Then multiply each number by the length of each class.   Or you can make an estimate of hours/week, then multiply by weeks since you began.");}
		 }


		addMins(hours * 60);
		//newDate(); // SETS NEW DATE
		openModal();
		localStorage.setItem("LSDate", dt.toString()); // STORES DATE IN LOCALSTORAGE (LS)
		localStorage.setItem("LSBelt", beltLevelInt.toString());}   // SETS BELT LEVEL TO 0, SINCE THIS IS FIRST TIME USING APP, USER WILL NEED TO SET BELT LEVEL LATER
	else{
		addMins(parseInt(localStorage.getItem("LSHours"))); // IF THERE IS HOURS BANKED LS --- CALLS ADDMINS FUNCTION TO SET MAT HOURS FROM LOADED VALUE
		loadDate();  // LOAD DATE FROM LS
		loadBelt();} // LOAD BELT LEVEL FROM LS
}

function loadDate(){
	var d = new Date(localStorage.getItem("LSDate"));
	dt = d;
	document.getElementById("divDate").innerHTML = dt.toDateString();		}

function loadBelt(){
	beltLevelInt = parseInt(localStorage.getItem("LSBelt"));
	setBelt();	}


// ---------------------BELT IMAGE SET -------------------
function setBelt(){
	var beltImage = document.getElementById("imgBelt");
switch(beltLevelInt){
	case 0: beltImage.src = "images/whiteNoStripes.jpg"; break; // white belts
	case 1: beltImage.src = "images/white1Stripe.jpg"; break;
	case 2: beltImage.src = "images/white2Stripe.jpg"; break;
	case 3: beltImage.src = "images/white3Stripe.jpg"; break;
	case 4: beltImage.src = "images/white4Stripe.jpg"; break;

	case 5: beltImage.src = "images/blueNoStripe.jpg"; break; // blue belts
	case 6: beltImage.src = "images/blue1Stripe.jpg"; break;
	case 7: beltImage.src = "images/blue2Stripe.jpg"; break;
	case 8: beltImage.src = "images/blue3Stripe.jpg"; break;
	case 9: beltImage.src = "images/blue4Stripe.jpg"; break;

	case 10: beltImage.src = "images/purpleNoStripe.jpg"; break; // purple belt
	case 11: beltImage.src = "images/purple1Stripe.jpg"; break;
	case 12: beltImage.src = "images/purple2Stripe.jpg"; break;
	case 13: beltImage.src = "images/purple3Stripe.jpg"; break;
	case 14: beltImage.src = "images/purple4Stripe.jpg"; break;

	case 15: beltImage.src = "images/brownNoStripe.jpg"; break; // brown belt
	case 16: beltImage.src = "images/brown1Stripe.jpg"; break;
	case 17: beltImage.src = "images/brown2Stripe.jpg"; break;
	case 18: beltImage.src = "images/brown3Stripe.jpg"; break;
	case 19: beltImage.src = "images/brown4Stripe.jpg"; break;

	case 20: beltImage.src = "images/blackBelt.jpg"; break;	// black belt
	}
	storeBelt();
}










// ------------------------BUTTON FUNCTIONS-------------------------

// ------------------------FUNCTION ADD TIME-------------------------
// gets minutes entered (seen by user as combination of hours and minutes (1:30ex), displays - YOU HAVE ENTERED *** TIME BANKED, passes amount of minutes to addMins
function addTime(){
	var selectBox = document.getElementById("selectHours");
	var selectedLabel = selectBox.options[selectBox.selectedIndex].label;
	var selectedValue = selectBox.options[selectBox.selectedIndex].value;
	var selectedValueInt = parseInt(selectedValue);
		if(selectedValueInt >0)
		{
			if(confirm("- Click Confirm to Save " + selectedLabel + " Mat Time.")){
				document.getElementById("divYouHaveAdded").innerHTML = "You have added " + selectedLabel ;
				setTimeout(function(){ document.getElementById("divYouHaveAdded").innerHTML = "";}, 3000);
				addMins(selectedValueInt);
			}
		}
}


// --------------------------FUNCTION ADD MINS ------------------------------
// adds SELECTED VALUE INT to minutes, passes total minutes logged to calcTime
function addMins(val){
	minutes += val;
	calcTime(minutes); 	}

// --------------------------FUNCTION CALC TIME ------------------------------
// REFORMATS GROSS MINUTES (ex-250 min) TO HOURS AND MINUTES FORMAT (4:42) passes these to new value for 'textShowHours'
function calcTime(n){
	var mins = n%60;
 	var hours = (n - mins) / 60;
	console.log(hours + ":" + mins);
	document.getElementById("textShowHours").value = hours + ":" + mins ;
	newDate();
	storeHours();
}


function storeHours(){
if(typeof(Storage) !== "undefined")  //if there is localstorage capability
		{ localStorage.setItem("LSHours", minutes.toString());	}
else // If no localstorage capability
		{ alert("Sorry, no local storage. ");	}
}


// --------------------------------DATE CHANGES-------------------------
function newDate(){
	d = new Date();
	dt=d;
	setDateDiv();
	}

function setDateDiv(){
	document.getElementById("divDate").innerHTML =  dt.toDateString();
	storeDate();
	}

function storeDate(){
if(typeof(Storage) !== "undefined")  //if there is localstorage capability
		{ localStorage.setItem("LSDate", dt.toString());}
else // If no localstorage capability
		{ alert("Sorry, no local storage. ");	}
}




//-----------------------------FUNCTION RESET --------------------------
function resetData(){
	if (confirm('Are you sure you want to delete all data?'))
	{
		if (confirm('ARE YOU SURE YOUR SURE? THIS ACTION CANNOT BE UNDONE!'))
		{
    		localStorage.removeItem("LSDate");
			localStorage.removeItem("LSHours");
			localStorage.removeItem("LSBelt");
			minutes = 0;
			document.getElementById("divYouHaveAdded").innerHTML = "You have reset all data.";
			document.getElementById("textShowHours").value = 0;
			level = 0;
			reloadPage();
		}
	}
}









// ------------------------- BELT PROMOTION ----------------------------
// increments global variable level which keeps track of belt level, triggers
// setBelt function to set belt image to match


function beltPromotion(){
	if (confirm('You got a stripe or new belt? Good job!'))
	{
		beltLevelInt++;
		setBelt();
	}
}

// --------------SAVE TO LOCALSTORAGE--------------
function storeBelt(){
if(typeof(Storage) !== "undefined")  //if there is localstorage capability
		{ localStorage.setItem("LSBelt", beltLevelInt.toString());	}
else // If no localstorage capability
		{ alert("Sorry, no local storage. ");	}
}









// ------------------------------MODAL BOX FUNCTIONS----------------------
// Get the modal
var modal = document.getElementById('myModal');

// ---------------------OPEN MODAL BOX------------------
function openModal() {
    document.getElementById('myModal').style.display = "block";
}


// --------------------------RADIO BUTTONS GET VALUE----------------------------------

function getRadioVal(form, name) {
    var val;
    // get list of radio buttons with specified name
    var radios = form.elements[name];

    // loop through list of radio buttons
    for (var i=0, len=radios.length; i<len; i++) {
        if ( radios[i].checked ) { // radio checked?
            val = radios[i].value; // if so, hold its value in val
            break; // and break out of for loop
        }
    }
    return val; // return value of checked radio or undefined if none checked
}

function beltFormSubmit() {

    // this (keyword) refers to form to which onsubmit attached
    // 'ship' is name of radio button group
	var beltRadValue = getRadioVal( document.getElementById('beltForm'), 'belt' );
var stripesRadValue = getRadioVal( document.getElementById('beltForm'), 'stripes' );

    // display value obtained
    calcBelt(beltRadValue, stripesRadValue);
    // more code here ...
}

function calcBelt(b, s){
	bInt=parseInt(b);
	sInt=parseInt(s);
	beltLevelInt = sInt + 5*bInt;
	setBelt();
	closeModal();
}


// ------------------------------CLOSE MODAL BOX----------------------------
// When the user clicks on <span> (x), close the modal
function closeModal() {
    document.getElementById('myModal').style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}
