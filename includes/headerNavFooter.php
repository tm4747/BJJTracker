
<?php
function getHeader(){
  ?>
  <div class='results'></div>
  <nav class="navbar navbar-inverse">
  <div class="container-fluid">
    <div class="navbar-header">
      <button type="button" class="navbar-toggle" data-toggle="collapse" data-target="#myNavbar">
        <span class="icon-bar"></span>
        <span class="icon-bar"></span>
        <span class="icon-bar"></span>
      </button>
      <a class="navbar-brand" href="#">Logo</a>
    </div>
    <div class="collapse navbar-collapse" id="myNavbar">
      <ul class="nav navbar-nav">
        <li class="active"><a href="#" class="mainNav" id="mainNavSetup">Setup</a></li>
        <li><a href="#" class="mainNav" id="mainNavAddTime">Add Mat Time</a></li>
        <li><a href="#" class="mainNav" id="mainNavStats">Your Stats</a></li>
        <li><a href="#" class="mainNav" id="mainNavSocialMedia">Social Media</a></li>
      </ul>
      <ul class="nav navbar-nav navbar-right">
        <li><a href="#"><span class="glyphicon glyphicon-log-in"></span> Login</a></li>
      </ul>
    </div>
  </div>
  </nav>
  <?php
}


function getLeftNav(){
  ?>
  <p><a href="#">Link</a></p>
  <p><a href="#">Link</a></p>
  <p><a href="#">Link</a></p>
  <?php
}



function getRightNav(){
  ?>
  <div class="well">
    <p>ADS</p>
  </div>
  <div class="well">
    <p>ADS</p>
  </div>
  <?php

}

function getFooter(){
  ?>
  <footer class="container-fluid text-center">
    <p>Footer Text</p>
  </footer>
  <?php
}



?>
