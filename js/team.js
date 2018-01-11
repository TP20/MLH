var MOBILELOGOWIDTH = 78.6667+"px";
var MOBILELOGOHEIGHT = 78.6667+"px";

$(document).ready(function(){
    SetDisplay.mobile();
    AlignElements.mobileLogo();
    SetDisplay.navBarBG();
    SetDisplay.navBar();
    $(window).scroll(function (event) {
        AlignElements.mobileLogo();
    });
});


function videoH(){
    var pos = $(window).scrollTop();

    if ( pos > 495){
        document.getElementById('vid').style.display= "none"; 
    }
 
    else if ( pos< 495)
        document.getElementById('vid').style.display= "block"; 
}

function videoPos(){
    var windowW = $(window).width()/2;
    var posL = windowW - 250;
    document.getElementById('vid').style.left= posL+"px";
}

function displayMobile(){
    var windowW = $(window).width();
    
    if ( windowW <900 )
        document.getElementById('originalNav').style.display ="none";
    else if (windowW > 900)
        document.getElementById('originalNav').style.display ="block";
}

function centerMobileLogo(){
    var windowW= $(window).width();
    var offsetL = (windowW/2) -35;

    if ($('#mobileLogoR').is(':visible'))
        document.getElementById('mobileLogoR').style.left= offsetL+"px";
}

var SetDisplay = (function(){
	return {	
		navBar: function(){
				document.getElementById('navbar-bg-mobile').style.display= "block"; 				
		}, 
		
		navBarBG: function() {
			var ISDESKTOPSIZE = GetWindowDimension.width()>900;//GetWindowDimension.currentPosition() > (GetWindowDimension.height()-70) && GetWindowDimension.width() >900;
			var ISMOBILESIZE = GetWindowDimension.width()<900;//GetWindowDimension.currentPosition() < (GetWindowDimension.height()-70) && GetWindowDimension.width()>900;

			if (ISDESKTOPSIZE)
			{
				document.getElementById('navbarDesktop-two').style.display= "block"; 
				document.getElementById('navbar-bg-mobile').style.display= "block";
			}
 
			else if (ISMOBILESIZE)
			{
				document.getElementById('navbarDesktop-two').style.display= "none"; 
				document.getElementById('navbar-bg-mobile').style.display= "block";
			}
  
			else 
			{  
				document.getElementById('navbarSecondary').style.display= "none";
			}   
		},
		
		mobile: function() {
				document.getElementById('navbarDesktop-two').style.display ="block";
		}					 		
	}
})();

var AlignElements = (function(){
	return {
		desktopLogo: function() {
			var logoLeft = GetWindowDimension.width() - (GetElementDimension.width('#logo')+ (0.05304829770387965*GetWindowDimension.width())+ (GetWindowDimension.width()/2) + (GetElementDimension.width('#sloganW')/2));
			document.getElementById('logo').style.left= logoLeft+"px";
		},
		mobileLogo: function() {
			var mobileLogoLeftMargin = (GetWindowDimension.width()/2) -35;
			var ISDESKTOPSIZE = $('#navbarDesktop-two').is(':visible');
            
			if (!(ISDESKTOPSIZE))
				document.getElementById('mobileLogoR').style.left= mobileLogoLeftMargin+"px";
			else {
				document.getElementById('mobileLogoR').style.left= 40+"px";
				document.getElementById('mobileLogoR').style.top= 10+"px";
				document.getElementById('mobileLogoR').style.width= MOBILELOGOWIDTH;
				document.getElementById('mobileLogoR').style.height= MOBILELOGOHEIGHT;
			}
		}
	}
})();

var GetWindowDimension = (function () {	
	return {
		height: function () {
		    return $(window).height();
		},
		width: function () {
			return $(window).width();
		},
		currentPosition: function() {
			return $(window).scrollTop();
		}	
	}
  
})();

var GetElementDimension = (function() {
	return  {
		height: function(element) {
		   return $(element).height();	
		},
		width: function(element) {
			return $(element).width();
		},
		leftOffset: function(element) {
			return document.getElementById(element).style.offset().left;
			//return $(element).offset().left;
		},	
		topOffset: function(element) {
			return $(element).offset().top;
		}		
	}
})();

$(document).ready(function(){
    $( window ).resize(function() {
        AlignElements.mobileLogo();
        SetDisplay.mobile();
        SetDisplay.navBar();
        SetDisplay.navBarBG();
    });
});