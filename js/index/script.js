$(document).ready(function() {
  $('.page-header .title').fitText(.9);
  $('.page-header .subtitle').fitText(1.3);
  $('a.inactive').click(function (e) {
    e.preventDefault();
    swal("Coming soon!");
  });
});