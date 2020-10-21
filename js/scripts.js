$(document).ready(function() {
  $("#formOne").submit(function(event) {
    const noun = $("input#noun").val();
    const verb = $("input#verb").val();
    const adjective = $("input#adjective").val();

    $(".noun").text(noun);
    $(".verb").text(verb);
    $(".adjective").text(adjective);

    $('#story').show();

    event.preventDefault();
  });
});




