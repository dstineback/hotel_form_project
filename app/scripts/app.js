
$(document).ready(function(){
  $('#bedroomCondition').hide();
  $("#brClean").("button").click(function moveBRCL(){
    $("#bathClean").hide();
});
  $('select').change(function updateSum(){
    var sum = 0;
      $('select :selected').each(function() {
        sum += Number($(this).val());
      });
       $("#sum").html(sum);
  });
});
