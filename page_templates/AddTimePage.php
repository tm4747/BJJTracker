
<?php
bjj_add_mat_time();



function bjj_add_mat_time(){

?>

<h1>Add Mat Time</h1>
<form>
<select id="selectHours" class="buttons" onchange="addTime();">
  <!-- The initial value must be empty <option value=""> -->
  <option value="0">How long was today's class?</option>
  <option value="15">15 min</option> <option value="30">30 min</option> <option value="45">45 min</option><option value="60">1 hr</option>
  <option value="75">1 hr 15 min</option> <option value="90">1 hr 30 min</option> <option value="105">1 hr 45 min</option> <option value="120">2 hr</option>
  <option value="135">2 hr 15 min</option> <option value="150">2 hr 30 min</option> <option value="165">2 hr 45 min</option> <option value="180">3 hr</option>
<option value="195">3 hr 15 min</option> <option value="210">3 hr 30 min</option> <option value="225">3 hr 45 min</option> <option value="240">4 hr</option>
</select>

</form>

<input type="button" class="buttons" value="BELT PROMOTION" id="beltPromotion" onClick="beltPromotion();" /><br />

<input type="button" class="buttons" value="RESET DATA" id="buttonReset" onClick="resetData();" /><br />

<?php

}

?>
