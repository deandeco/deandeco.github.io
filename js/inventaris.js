;(function() {
  
  function inventaris(id) {

    // URL of the Search API
    this.API_URL = '/../data/bomeninventaris.json';
    // The results within the JSON-object

    // Initialize App
    this.init = function() {
      console.log('1. Initialize the app');
      this.loadData();
    }

    // Load the data from the API (iTunes)
    this.loadData = function() {
      // Hack --> Closure
      var that = this;
      console.log('2. Load the Data');
      // Define a XMLHttpRequest object in order to load data
      var xhr = new XMLHttpRequest();
      // 2.1. Open a connection to the API
      // get verb: Get the information from the end-point (READ execution)
      // Third option means asynchronous action or not
      xhr.open('get', this.API_URL, true);
      // 2.2. Settings
      xhr.responseType = 'json';
      // 2.3. Listeners
      // 2.3.1. onload: i received something that's not an error
      xhr.onload = function() {
        if (xhr.status == 200){
        // Get the loaded data
        var data = (!xhr.responseType)?JSON.parse(xhr.response):xhr.response;
        // Get the real results from iTunes
        that.results = data.query.results.json.results;
        // Call the updateUI() function
        that.updateUI();
      };
        }
      // 2.3.2. onload: i received an error
      xhr.onerror = function() {
        console.log('Error');
      };
      // 2.4. Send the request
      xhr.send();
    };

    // Update the User Interface (UI)
    this.updateUI = function() {
      console.log('3. Update UI');
      this.generateTableUI();
    };

    // Generate the albums as a table with rows
    this.generateTableUI = function() {
      console.log('4. Generate UI with table-element');
    };

  };

  // Make an instance of the ITunesApp
  var app = new inventaris();
  // Initialize the app
  app.init();

})();

