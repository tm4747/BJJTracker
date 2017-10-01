<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
  <meta name="viewport" content="width=device-width,initial-scale=1,maximum-scale=1,user-scalable=0">
  <meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />

  <title>Brazilian Jiu Jitsu Tracker</title>

  <!-------------  STYLES --------------->
  <link type="text/css" rel="stylesheet" href="./styles/bootstrap.min.css" />
  <link type="text/css" rel="stylesheet" href="./styles/styles.css" />

  <!-------------  SCRIPTS --------------->
  <script type="text/javascript" src="./scripts/jquery-3.2.1.min.js"></script>
  <script type="text/javascript" src="./scripts/bootstrap.min.js"></script>
  <script type="text/javascript" src="./scripts/scripts.js"></script>

</head>


<!---------------------BODY----------------------->
<body id="bodyIndex">


  <!---------------------NAVBAR SECTION----------------------->
  <?php
    include_once './includes/headerNavFooter.php';
    getHeader();
  ?>


  <!---------------------CONTENTS SECTION----------------------->

  <div class="container-fluid text-center">
    <div class="row content">

      <!--------------lEFT SIDE NAV ----------------->
      <div class="col-md-2 hidden-sm hidden-xs sidenav">
        <?php getLeftNav(); ?>
      </div>


      <!-------------------- CENTER-CONTENTS SECTION----------------------->
      <div class="col-md-8 col-sm-12 text-left" id="divMainContents">

          <?php include_once './includes/functions.php'; ?>

          <div id="divDynamicContents">
            <?php  include_once './page_templates/SetupPage.php'; ?>
          </div>
      </div>


      <!--------------RIGHT SIDE NAV ----------------->
      <div class="col-md-2 hidden-sm hidden-xs sidenav">
        <?php getRightNav(); ?>
      </div>
    </div>
  </div>
  <!---------------------END CONTENTS SECTION----------------------->


  <!---------------------FOOTER----------------------->
  <?php getFooter(); ?>

</body>
</html>
