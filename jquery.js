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
        $("tbody tr").sortable();
    });
    
});

   
/*--form-hide-show--*/
$(document).ready(function(){
    $("#add-data").click(function(){
        $("form").toggle();
    });
});
/*--after-submit--*/
var data= `<tr><td>1</td><td>05-07-19</td><td><img src="https:/picsum.photos/30/30" class="rounded-circle mr-2">neru</td><td>aba@gmail.com</td><td>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Assumenda, rem.</td><td><button type="button" class="btn btn-sm dlete " >remove</button></td></tr>`;
var result =$()
$(document).ready(function(){
  $("#add-data").click(function(){
  $("tbody tr:last").after(data);
});
});
  
 

  /*--remove function--*/
  $(document).ready(function(){
    $(".dlete").click(function(){
      $("tbody tr:last").remove();
    });
  });
  $("form").submit(function(){
    var result=$(".value").val();
  console.log(result) ;
  });
  
  