$("#menu-toggle").click(function(e) {
    e.preventDefault();
    $("#wrapper").toggleClass("toggled");
});


$('#basicTab a').click(function(e){
  e.preventDefault();
  $(this).tab('show');
});

$('#shopTab').click(function(e){
  e.preventDefault();
  console.log('test');
  $('#shops').show();
  $(this).tab('show');
});

$('#people a').click(function(e){
  e.preventDefault();
  $(this).tab('show');
});

$('#quests a').click(function(e){
  e.preventDefault();
  $(this).tab('show');
});
