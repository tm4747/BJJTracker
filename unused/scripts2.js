// JavaScript Document


var dt = new Date(); // creates date object
var minutes = 0.0, timeSave = 0.0;  // float/doubles
var image;
var beltLevelInt = 0, beltSave = 0, screenWidth= 0; // integers
var buttonHalf = false;







// ----------------BASIC LOAD FUNCTIONS-----------------------



// Continually reloads the page every time the window-width is resized
function reLoad(){
	if(window.innerWidth != screenWidth)
		{location.assign("contents.html");}}


// resizes body margin as window is resized and header changes height/size so that body fits header 
function loadThePage(){
	 document.getElementById('divBody').style.marginTop = (window.innerWidth / 5) + "px";	
	  if (window.innerWidth < 1024){document.getElementById("divTest1").innerHTML += "Mobile stylesheet"; } // this is for test DIV to display whether app is in mobile or desktop mode
else
	{document.getElementById("divTest1").innerHTML += "Desktop stylesheet";  }
	 }
	 

// load vert/horiz splash screen image depending on screen-size / landscape or portrait orientation, then loads contents.html
function loadSplash(){
var imge = document.getElementById('imgSplashScreen');
if (window.innerWidth > window.innerHeight){ // if window inner-width is greater than inner-height
   imge.src = "images/sScreenHoriz.jpg";  }
else
	{ imge.src = "images/sScreenVert.jpg";}
	setTimeout(function(){location.assign("contents.html");}, 6000); // after 6 seconds loads contents.html
	}


// reloads page after 1.1 second
function reloadPage(){
setTimeout(function(){location.reload();}, 1100);		}


// ONLOAD - INDEX/BODY - if there is no hoursBanked key in local storage, prompts for user estimate of total mat hours to date, and belt status
// if there is an hoursBanked, there will have to be a belt status, so both will be loaded.  This is persistent, and user can utilize app over time
function loadPage(){
	screenWidth = window.innerWidth;
	document.getElementById("divTest1").innerHTML+=" the page is loaded";
	loadValues();
}







// ---------------------LOAD VALUES FROM LOCALSTORAGE---------------

function loadValues(){ // Loads all values at startup - hours banked, belt level
	loadThePage();  loadHours();  loadBelts();	}
// if there is no 'hoursBanked' in localStorage, will prompt for initial values, and send through addMins function to log initial hours
function loadHours(){
	if(localStorage.getItem("hoursBanked") == null){
		 var hours = prompt("Please estimate your current total mat hours to date", "0");
		addMins(hours * 60);	
		newDate(); // sets a new data
		localStorage.setItem("dateLastAdded", dt.toString());
		localStorage.setItem("beltLevel", "0");}   // records date last added to localStorage
	else{
		addMins(localStorage.getItem("hoursBanked")); // get from localStorage 'hoursBanked'
		loadDate();
		loadBelt();}		
} 		

function loadBelt(){
	beltLevelInt = parseInt(localStorage.getItem("beltLevel"));
	setBelt();	}
	
function loadDate(){
	var d = new Date(localStorage.getItem("dateLastAdded"));
	dt = d;
	document.getElementById("divDate").innerHTML += dt.toDateString();		}
		


function storeStatus(){
if(typeof(Storage) !== "undefined")  //if there is localstorage capability 
		{ localStorage.setItem("hoursBanked", minutes.toString());	} 
else // If no localstorage capability	
		{ alert("Sorry, no local storage. ");	}  
}






storeStatus();


// ------------------------BUTTON FUNCTIONS-------------------------

// ------------------------ADD TIME-------------------------

function oldAddTime(){

		if(minutes > timeSave)newDate(); // if mat time was added, date is updated
		timeSave=minutes; // Lock has been re-locked, resetting to backup of minutes is no longer possible
		setTimeout(function(){  document.getElementById("spanLock").innerHTML="- Mat Time Saved." }, 500)
		setTimeout(function(){  document.getElementById("spanLock").innerHTML="" }, 2500);		
}

// gets minutes entered (seen by user as combination of hours and minutes (1:30ex), displays - YOU HAVE ENTERED *** TIME BANKED, passes amount of minutes to addMins
function addBungTimes(){
	
	setTimeout(function(){  document.getElementById("divTest").innerHTML="you have chosen a value" }, 100);
	var selectBox = document.getElementById("selectHours");
	var selectedLabel = selectBox.options[selectBox.selectedIndex].label;
	document.getElementById("divTest1").innerHTML = "Congratulations. You have added " + selectedLabel + " !";

	var selectedValue = selectBox.options[selectBox.selectedIndex].value;
		setTimeout(function(){  document.getElementById("divTest1").innerHTML="you have chosen " + selectedValue }, 500);
	if(parseInt(selectedValue) >0)
		{	
			if(alert("- Click Confirm to Save Mat Time.")){
				document.getElementById("divTest1").innerHTML="You have entered mat time";
				addMins(selectedValue);
			}}
	else{
		document.getElementById("divTest").innerHTML="You have entered 0"}	}
	
// changes String minutes into an int, then adds to minutes, passes total minutes logged to calcTime
function addMins(val){
	minutes += parseInt(val);
	calcTime(minutes); 	}
	
// changes minutes (ex-250 min) to hours and minutes and passes these to new value for 'textShowHours'
function calcTime(n){
	var mins = n%60;
 	var hours = (n - mins) / 60;
	console.log(hours + ":" + mins);
	document.getElementById("textShowHours").value = hours + ":" + mins ;
	
}





	
// --------------------------------DATE CHANGES-------------------------
function newDate(){
	d = new Date();
	dt=d;
	setDateDiv();
	}
	
function setDateDiv(){
	document.getElementById("divDate").innerHTML =  dt.toDateString();
	localStorage.setItem("dateLastAdded", dt.toString());
	}





//-----------------------------FUNCTION RESET --------------------------
function resetData(){
	if (confirm('Are you sure you want to delete all data?')) {
    	localStorage.removeItem("dateLastAdded");
		localStorage.removeItem("hoursBanked");
		localStorage.removeItem("beltLevel");
		minutes = 0;
		document.getElementById("divYouHaveAdded").innerHTML = "You have reset all data.";
		document.getElementById("textShowHours").value = 0;
		level = 0; 
		reloadPage();
} }

	
	
	
	// UNUSED FOR BELT PROMOTION ??? 
// belt functions --- beltSave = beltLevelInt;  // save point for belt level ---   beltSave = level;
// 	localStorage.setItem("beltLevel", toString(beltLevelInt)); 



	
// ------------------------- BELT PROMOTION ----------------------------
// increments global variable level which keeps track of belt level, triggers 
// setBelt function to set belt image to match


function promotion2(){
	if (confirm('You got a stripe or new belt? Good job!')) 
	{
		beltLevelInt++;
		setBelt();	
	}
	document.getElementById("buttonPromotion").style.backgroundColor = null;
	document.getElementById("buttonPromotion").style.fontWeight = null;
	document.getElementById("buttonPromotion").value = "BELT PROMOTION";
	buttonHalf = false;
}



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
}




/*------------------UNUSED FUNCTIONS-----------------------

*/