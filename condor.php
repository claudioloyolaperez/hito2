

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
                <!-- Brand and toggle get grouped for better mobile display -->
                <div class="navbar-header page-scroll">
                    <button type="button" class="navbar-toggle" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1">
                        <span class="sr-only">Toggle navigation</span> Menu <i class="fa fa-bars"></i>
                    </button>
                    <a class="navbar-brand" href="index.html">Recinto Deportivo</a>
                </div>
                <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                    <ul class="nav navbar-nav navbar-right">
                        <li class="hidden">
                            <a href="#page-top"></a>
                        </li>
                        <li class="page-scroll">
                            <a href="phelps.php">Phelps</a>
                        </li>
                        <li class="page-scroll">
                            <a href="massu.php">Massu</a>
                        </li>
                        <li class="page-scroll">
                            <a href="nba.php">NBA</a>
                        </li>
                    </ul>
                </div>
            </div>
            <!-- /.container-fluid -->
        </nav>
    <div class="wrapper">
                    <div class="container">
                        <div class="row">
                            <section class="6u 12u(narrower) feature">
                                <header>
                                    <h2>Cóndor rojas Norte</h2>
                                </header>
                            </section>
                        </div>
                    </div>
    </div>
    <!-- Ya que es una entrega no funcional no icluimos los algoritmos para que el calendario se llene.
        al hacer click en un dia se mostrará en la tabla la informcaion respecto al dia seleccionado
        consultanto a la base de datos mediante ajax para crear la conexion en segundo plano.
        
    -->
    <?php
        include('/config.php');
        $query_select_canchas = 'SELECT * FROM canchas';
        $query_execute_gym = $mysqli->query($query_select_canchas);
    ?>
    <div class="calendario">
        <table class="calendario">
                <tr class="back">
                    <td class="cabecera">
                        Nombre
                    </td>
                    <td class="cabecera">
                        Precio
                    </td>
                </tr>
                <?php
                    if($query_execute_gym->num_rows){
                        while ($query_result_gym = $query_execute_gym->fetch_array()) {
                            if($query_result_gym['id_gym'] == 1){
                                echo '<tr>';
                                    echo '<td class="horario">';
                                        echo $query_result_gym['Nombre'];
                                    echo '</td>'; 
                                    echo '<td class="horario">';
                                        echo $query_result_gym['Precio'];
                                    echo '</td>';  
                                echo '</tr>';
                            }
                        }

                    }
                    else{
                        echo 'No se han ingresado datos de los gimnasios en la base de datos.';
                    }
                ?>
        </table>

    </div>
    
    
</div>
<script src="vendor/jquery/jquery.min.js"></script>

    <!-- Bootstrap Core JavaScript -->
    <script src="vendor/bootstrap/js/bootstrap.min.js"></script>

    <!-- Plugin JavaScript -->
    <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery-easing/1.3/jquery.easing.min.js"></script>

    <!-- Contact Form JavaScript -->
    <script src="js/jqBootstrapValidation.js"></script>
    <script src="js/contact_me.js"></script>

    <!-- Theme JavaScript -->
    <script src="js/freelancer.min.js"></script>
</body>
</html>