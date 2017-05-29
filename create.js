(function($) {
  $("#create-desire").on('click', function(e) {
    e.preventDefault();
    var desireName = $('#desire').val();
    var data = {
      desire: {
	name: desireName
      }
    }
    post(data);
  });

  var post = function post(requestData) {
    var requestParams = JSON.stringify(requestData);
    var url = 'https://desire-api.herokuapp.com/desires';
    $.ajax({
      type: 'POST',
      url: url,
      dataType: 'json',
      contentType: 'application/json',
      data: requestParams
    }).done(function(data) {
      console.log(data);
    });
  }
})(jQuery)
