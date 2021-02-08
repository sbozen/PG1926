<?
	$num = $_POST['number'];
	$sum=0;
	for ($i=0; $i <$num ; $i++) { 
		
		if ($num%$i==0) {
			$sum+=$i
			if ($sum==$num) {
				$msg= "<script>alert('This number a perfect number')</script>";
				echo msg;
			}

		}
	}

?>