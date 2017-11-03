var PlayersService = function(){
    var playersData = [];
    
    this.getPlayersByTeam = function(teamName){
      return playersData.filter(function(player){
        if(player.team == teamName){
          return true;
      });
    }
    
    this.getPlayersByPosition = function(position){
      //return an array of all players who match the given position.
    }
  } 

  var PlayersService = function(){
    var playersData = [];
    
    this.getPlayersByTeam = function(teamName){
      //return an array of all players who match the given teamName.
    }
    
    this.getPlayersByPosition = function(position){
      //return an array of all players who match the given position.
    }
  } 

var PlayersService = function (callback) {
    var endpointUri = "http://api.cbssports.com/fantasy/players/list?version=3.0&SPORT=football&response_format=json";
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
            return callback();
            //return will short-circuit the loadPlayersData function
            //this will prevent the code below from ever executing
        }

        var url = "https://bcw-getter.herokuapp.com/?url=";
        var endpointUri = "http://api.cbssports.com/fantasy/players/list?version=3.0&SPORT=football&response_format=json";
        var apiUrl = url + encodeURIComponent(endpointUri);

        $.getJSON(apiUrl, function (data) {
            playersData = data.body.players;
            console.log('Player Data Ready');
            console.log('Writing Player Data to localStorage');
            localStorage.setItem('playersData', JSON.stringify(playersData));
            console.log('Finished Writing Player Data to localStorage');
            callback();
        });
    }
    loadPlayersData(); //call the function above every time we create a new service
}


var loading = true; //Start the spinner
var playerService = new PlayerService(ready);

function ready() {
    loading = false; //stop the spinner

    //Now that all of our player data is back we can safely setup our bindings for the rest of the view.

    $('some-button').on('click', function () {
        var teamSF = playerService.getPlayersByTeam("SF");
    }
}


var playersData = [] //Assume this is a large collection of players.

var filteredPlayers = playersData.filter(function(player){ //replace forEach with filter.
    if(player.team === "SF"){ //check to see if they are on the team SF
      return true; //instead of adding it to an array, just return true.
    }
});

console.log(filteredPlayers); //this should be all players that are on SF.

var playersData = [] //Assume this is a large collection of players.
var filteredPlayers = [];
playersData.forEach(function (player) {    //on a for each, it takes in a function that's parameter is an single item from the array
    if (player.team === "SF") { //check to see if they are on the team SF
        filteredPlayers.push(player); //if they are, add them to the array.
    }
});

console.log(filteredPlayers); //this should be all players that are on SF.