function PlayerService(callback) {
    var players = [];
    var myPlayers = [];
    var playersData = [];
    this.getPlayersByTeam = function (teamName) {
        // ...
    }
    this.getPlayersByPosition = function (position) {
        // ...
    }
    function loadPlayersData() {
        //Lets check the localstorage for the data before making the call.
        //Ideally if a user has already used your site 
        //we can cut down on the load time by saving and pulling from localstorage 
        var localData = localStorage.getItem('playersData');
        if (localData) {
            playersData = JSON.parse(localData);
            console.log(playersData)
            return callback(playersData);
            //return will short-circuit the loadPlayersData function
            //this will prevent the code below from ever executing
        }
        var baseurl = "https://bcw-getter.herokuapp.com/?url=";
        var endpointUri = "http://api.cbssports.com/fantasy/players/list?version=3.0&SPORT=football&response_format=json";
        var apiUrl = baseurl + encodeURIComponent(endpointUri);
        $.getJSON(apiUrl, function (data) {
            playersData = data.body.players;
            console.log('Player Data Ready')
            console.log('Writing Player Data to localStorage')
            localStorage.setItem('playersData', JSON.stringify(playersData))
            console.log('Finished Writing Player Data to localStorage')
            callback(playersData)
        });
    }
    loadPlayersData(); //call the function above every time we create a new service
}
    // this.getPlayers = function(callWhenDone){
    //     //Use &offset=Number to add pagination
    //     $.get(baseUrl + 'players' + endpointUri, function(response){
    //       players = response.data.results;
    //       callWhenDone(players)
    //     })
    //   }

