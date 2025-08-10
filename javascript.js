$(document).ready(function(){
  // init Isotope
  var $grid = $('.grid').isotope({
    itemSelector: '.grid-item',
    layoutMode: 'fitRows'
  });

  // store filter for each group
  var filters = {};

  $('.filter-button-group').on('click', 'button', function(){
    var $this = $(this);
    var filterGroup = $this.closest('.filter-button-group').attr('data-filter-group');
    filters[filterGroup] = $this.attr('data-filter');

    // combine filters
    var filterValue = concatValues(filters);
    $grid.isotope({ filter: filterValue });

    // update checked class
    $this.addClass('is-checked').siblings().removeClass('is-checked');
  });

  function concatValues(obj) {
    return Object.values(obj).join('');
  }
});