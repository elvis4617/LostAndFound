$(document).ready ( function(){

var height = $(window).height;
var x = $("#body").height;
if(height > 836)
  $("#body").height(766 + height - 836);
}
)
