$(document).ready(function () {
  console.log("Document ready");

  // Init Isotope
  var $grid = $('.grid').isotope({
    itemSelector: '.grid-item',
    layoutMode: 'fitRows'
  });

  console.log("Isotope initialized");

  // Filtering
  $('.filter-button-group').on('click', 'button', function () {
    var filterValue = $(this).attr('data-filter');
    console.log("Filter clicked:", filterValue);
    $grid.isotope({ filter: filterValue });
  });
});
