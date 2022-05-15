<?php
	$Image1 = $_POST['Image1'];
	$Image2 = $_POST['Image2'];
	$Image3 = $_POST['Image3'];
	$Image4 = $_POST['Image4'];
	$Image5 = $_POST['Image5'];
	
    // Database connection
	$conn = new mysqli('localhost','root','','test');
	if($conn->connect_error){
		echo "$conn->connect_error";
		die("Connection Failed : ". $conn->connect_error);
	} else {
		$stmt = $conn->prepare("insert into registration(Image1, Image2, Image3, Image4, Image5) values(?, ?, ?, ?, ?)");
		$stmt->bind_param("sssss", $Image1, $Image2, $Image3, $Image4, $Image5);
		$execval = $stmt->execute();
		echo $execval;
		echo "Answer successfully...";
		$stmt->close();
		$conn->close();
	}
?>