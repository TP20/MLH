<!doctype html>

<html>

<head>
<title> Maple Leaf Harvest </title>

<link rel="icon" href="favicon.ico" type="../image/x-icon" /> 
<link rel="stylesheet" href="../css/dist/css/bootstrap.min.css">

<link rel ="stylesheet" href ="../css/main.css">
<link rel ="stylesheet" href ="../css/team.css">
<link rel ="stylesheet" href ="../css/flip.css">
<link href='http://fonts.googleapis.com/css?family=Roboto:400,300italic,300' rel='stylesheet' type='text/css'>
<meta charset="utf-8">
<link href="//vjs.zencdn.net/4.10/video-js/css" rel="stylesheet">
<script src="//vjs.zencdn.net/4.10/video.js"></script>
<meta name="viewport" content="width=device-width, initial-scale=1, user-scalable=no">
<link href="//maxcdn.bootstrapcdn.com/font-awesome/4.2.0/css/font-awesome.min.css" rel="stylesheet">
<script  type="text/javascript"src="http://code.jquery.com/jquery-2.1.0.min.js"></script>	
<link rel="stylesheet" href="http://code.jquery.com/mobile/1.2.1/jquery.mobile-1.2.1.min.css" />
<script type="text/javascript" src="https://ajax.googleapis.com/ajax/libs/jquery/1.11.1/jquery.min.js"></script>  
<script type="text/javascript" src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.1/js/bootstrap.min.js"></script>
<script type="text/javascript"src="../js/team.js"></script>
<script type="text/json"src="../js/member.json"></script>
<noscript> Javascript Must be enabled on your browser! </noscript>
<style type="text/css">
  section.module.parallax {
  height: 589px;
  background-position: 100% 50%;
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-size: cover;
  position:relative;
  z-index:1;
}

  section.module.parallax2 {
  height: 200px;
  background-position: 100% 50%;
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-size: cover;
  position:relative;
  z-index:1;
}
section.module.parallax-1 {
  background-image: url("../css/cakes.jpg");
}

section.module.parallax-2 {
  background-image: url("../css/leafs.jpg");
}
</style>
</head>


<body>


<nav class="navbar navbar-nav" role="navigation">
	<div id="mobileLogo" class= "dropdown" style="position:fixed; display:none; z-index:10;">
	
		<ul id="mobileSocial" class="navbar-nav pull-right" style=" z-index:7; position:fixed; z-index:10; top:10px; display:none;">
			<li style="display:inline;">  <a class="btn btn-social-icon btn-twitter" href="https://twitter.com/officialmlh"><i class="fa fa-twitter fa-lg"></i></a> </li>
			<li style="display:inline">  <a href="https://www.facebook.com/pages/Maple-Leaf-Harvest/1484540601804916" class="btn btn-social-icon btn-twitter"><i class="fa fa-facebook fa-lg"></i></a> </li>
			<li style="display:inline">  <a href="https://www.linkedin.com/company/maple-leaf-harvest" class="btn btn-social-icon btn-twitter"><i class="fa fa-linkedin fa-lg"></i></a> </li>
		</ul>

		<div id="mobileLogoR" style ="height:70px; width:70px; background-image: url('../css/logo.jpg'); background-size:100%;  display: none; position:fixed; top:10px; z-index:10;"> 
		</div> 

		<button id="dLabel" type="button" data-toggle="dropdown" aria-haspopup="true" role="button" aria-expanded="false" style="background-color:transparent;color:white; border:none; position:fixed; top:25px; left:25px;">    
			<span class="glyphicon glyphicon-th"></span>
		</button>
		<ul style="position:fixed; top:70px; z-index:6; border-radius:0px; background-color:rgba(0,0,0,0.8)" aria-labelledby="dLabel" role="menu" class="dropdown-menu">
			<li><a href="../index.html" class = "whiteMenuText"> <span class="glyphicon glyphicon-home" style="margin-right:5px;">  </span>  Home </a> </li>
			<li role="presentation" class="divider"></li>
			<li role="presentation" class="dropdown-header whiteMenuText"> <span class="glyphicon glyphicon-star-empty" style="margin-right:5px;" >  </span> About Us</li>
			<li><a href="../index.html#about" class = "greenMenuText" >Who we are</a></li>
			<li><a href="../blog/whatmakes.html" class = "greenMenuText">What Makes us Different</a></li>
			<li><a href="../blog/foodis.html" class = "greenMenuText">Food is Available</a></li>
			<li class = "greenMenuText"></li>
			<li><a href="../blog/people.html" class = "greenMenuText" >People are in Need</a></li>
			<li><a href="../team/helen.html" class = "greenMenuText" >Our Founder</a></li>
			<li role="presentation" class="divider"></li>
			<li> </li>
			<li><a class = "whiteMenuText" href="../blog/index.html#blog"> <span class="glyphicon glyphicon-book" style="margin-right:5px;" >  </span> Blog </a></li>
			<li><a class = "whiteMenuText" href="../blog/index.html#support"> <span class="glyphicon glyphicon-thumbs-up" style="margin-right:5px;">  </span>  Support Us </a></li>
			<li><a class = "whiteMenuText" href="team.php"> <span class="glyphicon glyphicon-user" style="margin-right:5px;">  </span> Team </a></li>
			<li><a class = "whiteMenuText" href="../contact.html"><span class="glyphicon glyphicon-phone-alt" style="margin-right:5px;" >  </span> Contact  </a> </li>
		</ul>
  </div>
</nav>



<!--- nav bar after passing headline -->
<nav id="navbarDesktop-two" class="navbar-nav navbar-fixed-top" role="navigation">
	<!--<nav class="navbar-nav navbar-fixed-top" role="navigation"> -->
	<ul class="nav navbar-nav" style="margin-top:10px;"> 
		<div id="mobileLogoR" style ="height:70px; width:70px; margin-left:40px; background-image: url('../css/logo.jpg'); background-size:100%; position:fixed; top:10px; z-index:10;"> 
		</div>
	</ul>
    <ul class="nav navbar-nav navbar-right" id="navbarSecondary">
		<li><a class = "whiteMenuText" href="../index.html"> Home </a> </li>
		<li class="dropdown"> <a href="#" class="dropdown-toggle navBarFont whiteMenuText" data-toggle="dropdown" role="button" aria-expanded="true">About us <span class="caret"></span></a>
        <ul class="dropdown-menu" role="menu" id="bg-dropDown">
			<li><a href="../index.html#about" class = "greenMenuText">Who we are</a></li>
            <li><a href="../blog/whatmakes.html" class = "greenMenuText">What Makes us Different</a></li>
            <li><a href="../blog/foodis.html"  class = "greenMenuText">Food is Available</a></li>
            <li class = "greenMenuText" ></li>
            <li><a href="../blog/people.html" class = "greenMenuText" >People are in Need</a></li>
			<li><a href="../team/helen.html"  class = "greenMenuText" >Our Founder</a></li>
        </ul>
		<!-- WTF? -->
        </li>
        <li><a class = "whiteMenuText" href="../index.html#blog"> Blog </a></li>
		<li><a class = "whiteMenuText" href="../index.html#support"> Support Us </a></li>
		<li><a class = "whiteMenuText" href="team.php"> Team </a></li>
		<li><a class = "whiteMenuText" href="../contact.html"> Contact </a></li>
		<li style="display:inline;">  <a class="btn btn-social-icon btn-twitter" href="https://twitter.com/officialmlh"><i class="fa fa-twitter fa-lg"></i></a> </li>
        <li style="display:inline">  <a href="https://www.facebook.com/pages/Maple-Leaf-Harvest/1484540601804916" class="btn btn-social-icon btn-twitter"><i class="fa fa-facebook fa-lg"></i></a> </li>
        <li style="display:inline">  <a href="https://www.linkedin.com/company/maple-leaf-harvest" class="btn btn-social-icon btn-twitter"><i class="fa fa-linkedin fa-lg"></i></a> </li>
	</ul>
</nav>
<!-- </div> -->
<nav id="navbar-bg-mobile"></nav> 


	<div id="team">
		<img src="../css/fade.png" id="fader" style="opacity:0.6;" height="80 px" width="100%">
		<div class="row">
			<div class="col-sm-12">	
				<div class="container">
					<div class=" topRibbon">
						<p class="headingWord">Team</p>
						<p class="teamGroup"> Board Members </p>
					</div>
					<div class=" topRibbon2">
						<p class="headingWord">Team</p>
						<p class="teamGroup"> Board Members </p>
					</div>

					<img style="left: 55.8987px;" src="../css/page-header.png" id="headR"><br>
				</div>
					

<?php
$str = file_get_contents('../js/member.json');
$json =json_decode($str, true);
 
	 for ($counter=0; $counter<6; $counter++){
	 echo  "<div class='clearfix col-sm-12 col-xs-12'>
				<div class=' clearfix  col-sm-5 col-xs-12'>
					<div class='memberPic".$json['execMembers'][$counter]['firstName']."'> </div> 
					</div>
				<div class=' clearfix  col-sm-7 col-xs-12 paragraphT '>
					<p class='nameT'>".$json['execMembers'][$counter]['fullName']."<br></p>
					<p class='positionT'>".$json['execMembers'][$counter]['title']." <br> <span style='color: #00C3FF; font-size:15px; top:-5px; position:relative;'>".$json['execMembers'][$counter]['email']."  </span></p>
					<p class='pLettersT'> ".$json['execMembers'][$counter]['memberDescription']."  <a style='color:green' href=".$json['execMembers'][$counter]['firstName'].".html> ...Read More </a> <br> <br><br></p>
				</div>
            </div>
			<br><br>";
	}
    
?>
				<img class="leafs" src="../css/maple2.png">
			</div>
		</div>
	</div>
  
	<section class="module parallax parallax-1 container-fluid" style="background-position:0px -60px;" id="originalVolunteers">
		<div class="col-sm-12" style="padding-bottom:20px;">   
			<p class="teamGroup " style="text-align:center"> Volunteers </p> 
		</div>
		<br>

 
		<div class="col-sm-12" style="padding-bottom:40px;">

<?php

$str = file_get_contents('../js/member.json');
$json =json_decode($str, true);

for ($counter=0; $counter<10; $counter++){

echo "<div class='col-sm-2' style='padding-bottom:30px; text-align:center;'>
	  <div class=\"flip-container  col-sm-2\" onclick=\"this.classList.toggle('hover');\">
		<div class='flipper'>
			<div class='front col-sm-2 col-xs-12'>
				<p class='pLettersT' style='z-index:10; font-size:14px; text-align:center; position:relative; top:110px; left: 12px; height:20px; width:!00%; color:white'>".$json['volunteers'][$counter]['fullName']." </p>
				<img class='volunteerImage' src='../css/logoV.jpg' style=' z-index:9; position:relativetext-decoration:none; margin-top:-30px; ' height='150px' width='150px'>	 	
			</div>
			<div class='back col-sm-2 col-xs-12' style='margin-left: -29px;'>
				<div style='text-decoration:none; height:150px; width:150px; background-color:#9bd450;'>	<p class='volunteerText'>".$json['volunteers'][$counter]['memberDescription']." </p> 
				</div>	
			</div>
		</div>
	</div>
</div>

";
}

?>


			<div class="col-sm-12">
				<p style="text-align:center; color:white; position:relative; top:100px; font-size:12px;" class="pLetters"> Maple Leaf Harvest <span class="glyphicon glyphicon-copyright-mark"> </span><br> Web Design by Thujan Paramsothy </p>
			</div>
		</div>
	</section>

	<div id="mobileVolunteers">
	    <p class="teamGroup" style="text-align: center; font-size:40px; margin-top:-20px;"> Volunteers </p> 
		<br>
 
 <?php

$str = file_get_contents('../js/member.json');
$json =json_decode($str, true);

for ($counter=0; $counter<10; $counter++){
echo "<div class='col-sm-2 col-xs-12'>
		<div class=\"flip-container\" onclick=\"this.classList.toggle('hover');\" style=\"margin:0px auto; margin-bottom:15px;\">
			<div class='flipper'>
				<div class='front '>
					<p class='pLettersT' style='z-index:10; font-size:14px; text-align:center; position:relative; top:140px;  height:20px; width:!00%; color:white'>".$json['volunteers'][$counter]['fullName']."</p>
					<img class='volunteerImage' src='../css/logoV.jpg' style='text-decoration:none; ' height='150px' width='150px'>		
				</div>
				<div class='back' style='top:35px;'>
					<div style='text-decoration:none; height:150px; width:150px; background-color:#9bd450;'><p class='volunteerText'>".$json['volunteers'][$counter]['memberDescription']." </p>	 
					</div>	
				</div>
			</div>
		</div> 
		</div> 
	

";
}

?>

	<div class= 'col-sm-12 col-xs-12'>
	<p style="font-size:12px;" class="pLetters" id="teamFoot"> Maple Leaf Harvest <span class="glyphicon glyphicon-copyright-mark"> </span><br> Web Design by Thujan Paramsothy  </p>
	</div>
</div>
 

        
   


		


		
</body>


</html>