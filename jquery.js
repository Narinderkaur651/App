function getData(url, successCallback) {
  $.ajax({
    url: url,
    success: successCallback
  });
}
$(document).ready(function () {
  getData("https://jsonplaceholder.typicode.com/posts", function (response) {
    $(response).each(function (i, response) {
      let datahtml = `<tr><td>${response.userId}</td><td>${response.id}</td><td>${response.title}</td><td>${response.body}</td><td><button type="button" class="btn btn-sm dlete" >remove</button></td></tr>`;
      $("tbody").append(datahtml);
    });
  });
  /*-- user-input data--*/
  $("#submit-data").click(function (e) {
    e.preventDefault();
    let userId1 = $('input[name="uid"]').val();
    let date1 = $('input[name="date"]').val();
    let title1 = $('input[name="title"]').val();
    let body1 = $('input[name="body"]').val();
    const dataHtml1 = '<tr><td>' + userId1 + '</td><td>' + date1 + '</td><td>' + title1 + '</td><td>' + body1 + '</td><td><button type="button" class="btn btn-sm dlete" >remove</button></td></tr>';
    if (userId1 !== "" || date1 !== "" || title1 !== "" || body1 !== "") {
      $('tbody').append(dataHtml1);
    }
    $('input[name="uid"]').val("");
    $('input[name="date"]').val("");
    $('input[name="title"]').val("");
    $('input[name="body"]').val("");
  });
  $(document).on('click', '.dlete', function () {
    $(this).closest('tr').remove();
  })
  $("#search-data").on("keyup", function () {
    let value = $(this).val().toLowerCase();
    $("#tableData tr").filter(function () {
      $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
    });
  });
  $("form").hide(function () {
    $("#add-data").click(function () {
      $("form").toggle();
    });
  });
});


