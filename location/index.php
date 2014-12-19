<!DOCTYPE html>
<html>
<head>
<meta charset=utf-8 />
<title>Layout</title>
<!--[if IE]>
  <script src="http://html5shiv.googlecode.com/svn/trunk/html5.js"></script>
<![endif]-->
<link type="text/css" rel="stylesheet" href="styles.css" />
<link type="text/css" rel="stylesheet" href="menu.css" />
<link type="text/css" rel="stylesheet" href="location-selector.css" />
<script src="jquery-1.11.1.min.js"></script>
<script src="menu.js"></script>
<script src="location-selector.js"></script>
</head>
<body>
	<ul>
		<li data-menuform="#da-form" data-menuicon="">Distribution Area</li>
		<li data-menuform="#products-form">Products</li>
		<li data-menuform="#tools-form">Tools</li>
		<li data-menuform="#account-form">Account</li>
		<li data-menuform="#help-form">Help</li>
	</ul>
	<div id="da-form">
		<h3>Distibution Area</h3>
		<div id="location-selector" />
	</div>
	<div id="products-form"><h3>Products</h3></div>
	<div id="tools-form"><h3>Tools</h3></div>
	<div id="account-form"><h3>Account</h3></div>
	<div id="help-form"><h3>Help</h3></div>
	
	<script>	
		$(document).ready(function() { 
		    $('ul').navigationMenu();
		    $('#location-selector').locationSelector();
		});
	</script>
</body>
</html>