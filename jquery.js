/*--search functionality--*/
$(document).ready(function(){
  $("#search-data").on("keyup", function() {
    var value = $(this).val().toLowerCase();
    $("#mydata tr").filter(function() {
      $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
    });
  });
});
/*--sort functionality--*/
$(document).ready(function(){
    $("#sort").click(function(){
        $("#mydata").sort();
    });
    
});
/*--form-hide-show--*/
$(document).ready(function(){
    $("#add-data").click(function(){
        $("form").toggle();
    });
});
/*--after-submit--*/
$(document).ready(function(){
    $("#submit-data").click(function(){
     var value1= $(".value").val().toLowerCase();
     document.write(value1);
   
    });
});
