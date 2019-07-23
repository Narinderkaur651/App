/**
 * 
 * @param {string} url API url
 * @param {callback} successCallback Success callback for function
 */
function getData(url, successCallback) {
  $.ajax({
    url: url,
    success: successCallback
  });
}

$(document).ready(function () {
  getData("https://jsonplaceholder.typicode.com/posts", function (response) {
    $(response).each(function (i, response) {
      let datahtml = `<tr><td>${response.userId}</td><td>${response.id}</td><td>${response.title}</td><td>${response.body}</td><td><button type="button" class="btn btn-sm dlete" >Remove</button></td></tr>`;
      $("tbody").append(datahtml);
    });
  });
  /*-- user-input data--*/
  $("#submit-data").click(function (e) {
    e.preventDefault();
    let personid = $('input[name="uid"]').val();
    let date = $('input[name="date"]').val();
    let title = $('input[name="title"]').val();
    let body = $('input[name="body"]').val();
    const Datahtml = '<tr><td>' + personid + '</td><td>' + date + '</td><td>' + title + '</td><td>' + body + '</td><td><button type="button" class="btn btn-sm dlete" >Remove</button></td></tr>';
    if (personid !== "" || date !== "" || title !== "" || body !== "") {
      $('tbody').append(Datahtml);
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


