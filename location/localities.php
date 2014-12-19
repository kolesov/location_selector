<?php 
	define( 'SHORTINIT', true );
	require_once( $_SERVER['DOCUMENT_ROOT'] . '/myfoodfinder/wp-load.php' );

	$mydb= new wpdb('root','','myfoodfinder','localhost');
	$rows = $mydb->get_results("select * from wp_location_localities where region_id=".$_GET['region']);

	$localities = array();
	foreach ($rows as $obj) {
		$localities[] = array('id' => $obj->id, 'name' => $obj->name, 'postcode' => $obj->postcode);
	}
	echo json_encode(array('localities' => $localities));
?>