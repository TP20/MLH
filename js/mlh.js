var WINDOWWIDTH =  $(window).width();
var WINDOWHEIGHT = $(window).height();
var CURRENTPOSTION = $(window).scrollTop();
var MOBILELOGOWIDTH = 78.6667+"px";
var MOBILELOGOHEIGHT = 78.6667+"px";
var MOBILELOGTOPMARGIN = 10+"px";





$(document).ready(function(){

  $(window).scroll(function (event) {
	var logoOffsetDiffFromTop =$('#logo').offset().top- $(window).scrollTop();
	var aboutSectionOffsetTop =$('#about').offset().top;
  
	SetDisplay.navBar();
	SetDisplay.navBarBG();
	SetDisplay.logo();

	SetDisplay.button();
	SetDisplay.video();
	var ISSECTIONONE = GetWindowDimension.currentPosition() < 222;

	if (ISSECTIONONE)
	{
		var scroll = $(window).scrollTop()/3;
		var scroll2 = $(window).scrollTop()/100;

		var DESKTOPLOGOWIDTH = 150 - (GetWindowDimension.currentPosition()/3) +"px";
		var DESKTOPLOGOHEIGHT = 150 - (GetWindowDimension.currentPosition()/3) + "px";
		var DESKTOPLOGOTOPMARGIN = GetElementDimension.topOffset('#logo')- GetWindowDimension.currentPosition() + 2 +"px";
		
		var ISNOTSCROLLED = GetWindowDimension.currentPosition() <= 2;
		
		
		if (ISNOTSCROLLED)
		{
			document.getElementById('logo').style.top = 50+"px";
		}
        
		else if( logoOffsetDiffFromTop < 50)
		{
			document.getElementById('logo').style.top = DESKTOPLOGOTOPMARGIN;
			document.getElementById('logo').style.height= DESKTOPLOGOHEIGHT;
			document.getElementById('logo').style.width= DESKTOPLOGOWIDTH;
			AlignElements.desktopLogo();
		}
		
		else 
		{
			document.getElementById('logo').style.height= DESKTOPLOGOHEIGHT;//scroll+"px";
			document.getElementById('logo').style.width= DESKTOPLOGOWIDTH;//scroll+"px";
			AlignElements.desktopLogo();
		}
	}
	 
	else if ($(window).scrollTop() > 222 &&  logoOffsetDiffFromTop > 10 )
	{
		document.getElementById('logo').style.top = $('#logo').offset().top- $(window).scrollTop() - 2+"px";
		AlignElements.desktopLogo();
	}
	
  });
});
/////----------------------------------------------- FIX THE FUNCTIONS BELOW AND INTEGRATE WITH THE MODULE PATTERN ---------------------////



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
			//return document.getElementById(element).style.offset().top;
			return $(element).offset().top;
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
			var ISMOBILELOGOVISIBLE = $('#mobileLogoR').is(':visible');
			if (ISMOBILELOGOVISIBLE)
				document.getElementById('mobileLogoR').style.left= mobileLogoLeftMargin+"px";
		},
		
		button: function() {
			document.getElementById('supportB1').style.left= ((GetWindowDimension.width()/2) - 62.2)+"px";
			document.getElementById('supportB1').style.top= GetElementDimension.topOffset('#vid') + GetElementDimension.height('#vid')+ (GetWindowDimension.height() * 0.04424778761061947)+"px"; 		
		},

		video: function() {
		
			var windowW = $(window).width()/2;
			var sloganTop = $('#sloganW').offset().top;
			var sloganHeight = $('#sloganW').height();
			var windowH =$(window).height();
			var posL = windowW - 250;
			
			document.getElementById('vid').style.left= posL+"px";
			document.getElementById('vid').style.top= sloganHeight+sloganTop+ (windowH * 0.04424778761061947)+"px";
		}
	}
})();

var HorizontalAlign = (function(){
	return {
		logo: function() {
			var logoLeftMargin = WINDOWWIDTH - (GetElementDimension.width('#logo')+ (0.05304829770387965*GetWindowDimension.width())+ (GetWindowDimension.width()/2) + (GetElementDimension.width('#sloganW')/2));
			document.getElementById('logo').style.left= logoLeftMargin+"px";
		},
		
		button: function() {
			var buttonLeftMargin = GetWindowDimension.width()-62.2;
			document.getElementById('supportB1').style.left= buttonLeftMargin+"px";
		},
		
		slogan: function()  {
			var w= $('#sloganW').width()/2;
			var windowW= $(window).width()/2;
		    var leftR = (windowW- w) +10;
			document.getElementById('sloganW').style.left= leftR+"px";
		},
		
		video: function(){
			var videoLeftMargin = (GetWindowDimension.width()/2) - 250;
			document.getElementById('vid').style.left= videoLeftMargin+"px";
		
		}
	
	
	}


})();

var SetDisplay = (function(){
	return {

		button: function() {
			 var ISSECTIONONE = GetElementDimension.topOffset('#supportB1') > (GetWindowDimension.height() - 10);
			 if (ISSECTIONONE)
		  	 {
				document.getElementById('supportB1').style.display= "none"; 
			 }
 
			 else 
			 {
				document.getElementById('supportB1').style.display= "block"; 
			 }
		},
		
		navBar: function(){
		
			var splitter= GetWindowDimension.height() - (GetWindowDimension.height() * 0.12389380530973451);
			var NOTSECTIONONE = GetWindowDimension.currentPosition() > splitter && GetWindowDimension.width() > 900;
			var ISSECTIONONE = (GetWindowDimension.currentPosition() < splitter && GetWindowDimension.width() > 900);
  
			if (NOTSECTIONONE)
			{
				document.getElementById('sectionOne').style.display= "block"; 
				document.getElementById('navbar-bg-mobile').style.display= "block";
				document.getElementById('navbarDesktop-two').style.display= "block"; 
			}
 
			else if (ISSECTIONONE)
			{
//			    document.getElementById('sectionOne').style.height=GetWindowDimension.height()+"px";
                document.getElementById('sectionOne').style.height=$(window).height()+"px";
             //   document.getElementById('sectionOne').style.height=GetWindowDimension.width()+"px";

				document.getElementById('sectionOne').style.display= "block"; 
				document.getElementById('navbarDesktop-two').style.display= "none";
				document.getElementById('navbar-bg-mobile').style.display= "none";
				
			}
			
			else 
			{ 
				document.getElementById('sectionOne').style.display= "none"; 
				document.getElementById('navbarDesktop-two').style.display= "none"; 
			}  		
		},
		
		navBarBG: function() {
			var ISDESKTOPSIZE = GetWindowDimension.currentPosition() > (GetWindowDimension.height()-70) && GetWindowDimension.width() >900;
			var ISMOBILESIZE = GetWindowDimension.currentPosition() < (GetWindowDimension.height()-70) && GetWindowDimension.width()>900;

			if (ISDESKTOPSIZE)
			{
				document.getElementById('navbar-bg-desktop').style.display= "block"; 
				
			}
 
			else if (ISMOBILESIZE)
			{
				document.getElementById('navbar-bg-desktop').style.display= "none"; 
				
			}
  
			else 
			{  
				document.getElementById('navbar-bg-desktop').style.display= "none"; 
			}   
		},
		
		video: function(){
			var ISSECTIONONE = GetWindowDimension.currentPosition()< (GetWindowDimension.height()-10);
 
			if (ISSECTIONONE)
			{
				document.getElementById('vid').style.display= "block"; 
				AlignElements.video();
				AlignElements.button();
			}
			
			else
				document.getElementById('vid').style.display= "none"; 
			 
		},
		
		mobile: function() {
			var ISDESKTOPSIZE = GetWindowDimension.width() >900;
			
		    if (ISDESKTOPSIZE){
				document.getElementById('navbarDesktop-one').style.display ="block";
				document.getElementById('navbarDesktop-two').style.display ="none";
				document.getElementById('sloganMobile').style.display ="none";
			}
			else {
				document.getElementById('navbarDesktop-one').style.display ="none";
				document.getElementById('navbarDesktop-two').style.display ="block";
				document.getElementById('sectionOne').style.display ="none";
				document.getElementById('navbar-bg-mobile').style.display ="block";
				document.getElementById('sloganMobile').style.display ="block";

			}
		},
		
		logo: function() {
		
			var ISPOSITIONSECTIONTWO = GetWindowDimension.currentPosition() > 495;

			if (ISPOSITIONSECTIONTWO)
			{   
				document.getElementById('logo').style.height= MOBILELOGOHEIGHT;
				document.getElementById('logo').style.width= MOBILELOGOWIDTH;
				document.getElementById('logo').style.top= MOBILELOGTOPMARGIN;
			}		
		}					 		
	}
})();


var VerticalAlign = (function(){

	//var logoLeftMargin = GetWindowDimension.width() - (GetElementDimension.width('#logo')+ (0.05304829770387965*GetWindowDimension.width())+ (GetWindowDimension.width()/2) + (GetElementDimension.width('#sloganW')/2));
	//var sloganTopMargin = 0.17699115044247787 * GetWindowDimension.height();

	return {
		desktopLogo: function() {
			var logoLeftMargin = GetWindowDimension.width() - (GetElementDimension.width('#logo')+ (0.05304829770387965*GetWindowDimension.width())+ (GetWindowDimension.width()/2) + (GetElementDimension.width('#sloganW')/2));
			document.getElementById('logo').style.left= logoLeftMargin+"px";
		},
		mobileLogo: function() {
		    var logoLeftMargin = GetWindowDimension.width() - (GetElementDimension.width('#logo')+ (0.05304829770387965*GetWindowDimension.width())+ (GetWindowDimension.width()/2) + (GetElementDimension.width('#sloganW')/2));
			document.getElementById('logo').style.left= logoLeftMargin+"px";
		},
		
		slogan: function()  {
			var sloganTopMargin = 0.17699115044247787 * GetWindowDimension.height();
		    document.getElementById('sloganW').style.top= sloganTopMargin+"px";
		},
		
		video: function()  {
			var videoTopMargin = GetElementDimension.height('#sloganW')+GetElementDimension.topOffset('#sloganW')+ (GetWindowDimension.height() * 0.04424778761061947);
			document.getElementById('vid').style.top= videoTopMargin+"px";
		},
		
		button: function() {
		    var buttonTopMargin = GetElementDimension.topOffset('#vid')+GetElementDimension.height('#vid')+ ((GetWindowDimension.width()/2) * 0.04424778761061947);
			document.getElementById('supportB1').style.top= buttonTopMargin+"px"; 		

		} 
	}
})();




////---------------------Functions when resizing window ------------------------////

$(document).ready(function(){
  $( window ).resize(function(){
  
	AlignElements.desktopLogo();
	AlignElements.mobileLogo();

	HorizontalAlign.slogan();
	VerticalAlign.slogan();
	
    //AlignElements.video();
	VerticalAlign.video();
	HorizontalAlign.video();
	
	AlignElements.button();
	//VerticalAlign.button();
	//HorizontalAlign.button();
	
	SetDisplay.mobile();
	SetDisplay.navBar();
      
    SetDisplay.navBarBG();
  });
});

$(document).ready(function(){

	AlignElements.desktopLogo();
	AlignElements.mobileLogo();
	//AlignElements.button();
	
	HorizontalAlign.slogan();
	VerticalAlign.slogan();
	
    //AlignElements.video();
	VerticalAlign.video();
	HorizontalAlign.video();
	
	AlignElements.button();
	//VerticalAlign.button();
	//HorizontalAlign.button();
	
	SetDisplay.mobile();
	SetDisplay.navBar();
    
    SetDisplay.navBarBG();
});
