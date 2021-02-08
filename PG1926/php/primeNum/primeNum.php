<?
	$num = $_POST['number'];
	for ($i=2; $i <$num ; $i++) { 
		if ($num%$i==0) {
			echo "not a prime number";
		}
		else {
			echo "This is a prime number";
		}
	}

?>