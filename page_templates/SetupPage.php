<?php

bjj_initial_setup();

function bjj_initial_setup(){

?>

<h1>Setup</h1>
<form action="#" method="post" class="beltForm" id="beltForm" style="border-style:ridge;border-color:ghostwhite;padding:15px;">
<fieldset>
  <legend style="color:ghostwhite;">Please indicate your belt level...</legend>

<div style='background-color:white;' class='divBeltSelect'>
  <input type="radio" name="belt" value="White" checked="checked">
  <span class='spanBeltSelect' style="background-color:white;color:black;width:250px;"> White </span>
  <br>
</div>
<div class='bg-primary divBeltSelect'>
  <input type="radio" name="belt" value="Blue">
  <span class='spanBeltSelect' style="color:white;" > Blue</span>
  </br>
</div>
<div style='background-color:purple;' class='divBeltSelect'>
  <input type="radio" name="belt" value="Purple" >
  <span class='spanBeltSelect' style="color:offwhite;"> Purple</span>
  <br />
</div>
<div style='background-color:#654321;' class='divBeltSelect'>
  <input type="radio" name="belt" value="Brown" >
  <span class='spanBeltSelect' style="color:ghostwhite;"> Brown</span>
  <br>
</div>
<div style='background-color:black;border-bottom-style:solid;border-color:white;border-width:1px;border-left-style:solid;border-right-style:solid;' class='divBeltSelect' >
  <input type="radio" name="belt" value="Black">
  <span class='spanBeltSelect' style="color:white;"> Black</span>
  <br>
</div>

<br />

<p>And number of stripes...</p>

<input type="radio" name="stripes" value="0" checked="checked"> None<br>
<input type="radio" name="stripes" value="1"> 1<br>
<input type="radio" name="stripes" value="2"> 2<br>
<input type="radio" name="stripes" value="3"> 3<br />
<input type="radio" name="stripes" value="4"> 4<br>


<p><input type="button" class="buttons" name="getVal" value="SUBMIT" onclick="beltFormSubmit();"></p>

</fieldset>
</form>

<input type="button" class="buttons" value="BELT PROMOTION" id="beltPromotion" onClick="beltPromotion();" /><br />

<input type="button" class="buttons" value="RESET DATA" id="buttonReset" onClick="resetData();" /><br />

<?php

}
