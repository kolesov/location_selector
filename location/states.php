<?php 
	define( 'SHORTINIT', true );
	require_once( $_SERVER['DOCUMENT_ROOT'] . '/myfoodfinder/wp-load.php' );

	$mydb= new wpdb('root','','myfoodfinder','localhost');
	$rows = $mydb->get_results("select * from wp_location_states");

	$states = array();
	foreach ($rows as $obj) {
		$states[] = array('id' => $obj->id, 'name' => $obj->name);
	}
	echo json_encode(array('states' => $states));
?>