$.ajax({
  url: 'https://randomuser.me/api/?results=5000',
  dataType: 'json',
  success: function(data) {
    console.log(data);
  }
});
      