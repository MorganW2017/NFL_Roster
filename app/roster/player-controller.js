function PlayersController() {
    var playerService = new PlayerService(drawPlayerList);
    var playerElem = document.getElementById('player-list')
    var showButton = document.getElementById('show-button')
    this.add = function add(id) {
        console.log(playerId, id)
    }
    function drawPlayerList(list) {
        elem.innerHTML = ''
        var playerTemplate = ''
        for (var i in list) {
            var player = list[i];
            player.thumbnail.path = player.thumbnail.path.replace('http:', '')
            marvelTemplate += `
            <div class="card">
            <img src="${player.thumbnail.path}.${player.thumbnail.extension}" wdith="100">
            <h3>${player.name}{/h3}
            <div>
            <button class="btn-success" id="${player.id}" onclick="app.roster.player-controller.add('${player.id}')">Add to Team</button>
          </div>
        <div>
            `
        }
    }
    // playerService.getPlayers(ready)
    function ready(data) {
        updatePlayer(data)
        function updatePlayer(list) {
            var elem = document.getElementById('players')
        }
    }
}