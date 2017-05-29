(function($) {
  $('#load-desires').on('click', function(e) {
    e.preventDefault();
    
    var url = 'https://desire-api.herokuapp.com/desires';
    get(url)
  });

  var get = function get(url) {
    $.ajax({
      type: 'GET',
      url: url,
      dataType: 'json',
      contentType: 'application/json',
    }).done(function(data) {
      $('#desires').text(JSON.stringify(data));
    });
  }

})(jQuery);
