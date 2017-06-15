<!DOCTYPE HTML>
<!--
	Telephasic by HTML5 UP
	html5up.net | @n33co
	Free for personal and commercial use under the CCA 3.0 license (html5up.net/license)
-->
<html>
	<head>
		<title>Recinto deportivo</title>
		<meta charset="utf-8" />
		<meta name="viewport" content="width=device-width, initial-scale=1" />
		<!-- Bootstrap Core CSS -->
    <link href="vendor/bootstrap/css/bootstrap.min.css" rel="stylesheet">

    <!-- Theme CSS -->

		<!--[if lte IE 8]><script src="assets/js/ie/html5shiv.js"></script><![endif]-->
		<link rel="stylesheet" href="assets/css/main.css" />
		<!--[if lte IE 8]><link rel="stylesheet" href="assets/css/ie8.css" /><![endif]-->
		<!--[if lte IE 9]><link rel="stylesheet" href="assets/css/ie9.css" /><![endif]-->
	</head>
	<body class="homepage">
		<div id="page-wrapper">

    <!-- Navigation -->
    <nav id="mainNav" class="navbar navbar-default navbar-fixed-top navbar-custom">
        <div class="container">
                <a class="navbar-brand" href="index.html">Recinto Deportivo</a>
        </div>
        <!-- /.container-fluid -->
    </nav>


			<!-- Features 1 -->
	
	<div class="wrapper">
		<div class="container">
			<?php
        		include('/config.php');
        		$query_select_gym = 'SELECT * FROM gym';
        		$query_execute_gym = $mysqli->query($query_select_gym);
        		if($query_execute_gym->num_rows){
        			$var = 2;
            		while ($query_result_gym = $query_execute_gym->fetch_array()) {
            			if($var%2 == 0){
            				echo '
            					<div class="row">
									<section class="6u 12u(narrower) feature">
										<header>
											<h2><a href="';
									if($query_result_gym['id_gym'] == 1){
										echo  "condor.php";
									}
										else if($query_result_gym['id_gym'] == 3){
										echo "massu.php";
									}

							echo '">' . $query_result_gym['Nombre'] . '</a></h2>
										</header>
										<div class="image-wrapper first">
											<a href="';
											if($query_result_gym['id_gym'] == 1){
										echo  "condor.php";
									}
										else if($query_result_gym['id_gym'] == 3){
										echo "massu.php";
									}
							echo'" class="image featured first"><img src="images/img' . $query_result_gym['id_gym'] . '.jpg" alt="" /></a>
										</div>
										<p>' . $query_result_gym['Descripcion'] . '</p>
									</section>
            				';
            			}
            			else{
            				echo '
									<section class="6u 12u(narrower) feature">
										<header>
											<h2><a href="';

											if($query_result_gym['id_gym'] == 2){
												echo  "phelps.php";
											}
											else if($query_result_gym['id_gym'] == 4){
												echo "nba.php";
											}

							echo'">' . $query_result_gym['Nombre'] . '</a></h2>
										</header>
										<div class="image-wrapper">
											<a href="';

										if($query_result_gym['id_gym'] == 2){
											echo  "phelps.php";
											}
										else if($query_result_gym['id_gym'] == 4){
											echo "nba.php";
										}

							echo '" class="image featured"><img src="images/img' . $query_result_gym['id_gym'] . '.jpg" alt="" /></a>
										</div>
										<p>' . $query_result_gym['Descripcion'] . '</p>
									</section>
								</div>
            				';
            			}
            			$var++;
            		}
        		}
        		else{
            		echo 'No se han ingresado gimnasios a la base de datos.';
        		}
        mysqli_close($mysqli);
    		?>
    	</div>
	</div>





		</div>

	</body>
</html>