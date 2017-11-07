function PlayersController() {
    var playerService = new PlayerService(drawPlayerList);
    var showButton = document.getElementById('show-button')
    this.add = function add(id) {
        console.log(playerId, id)
    }
    // playerService.getPlayers(ready)
    function ready(data) {
        updatePlayer(data)
        function updatePlayer(list) {
            var elem = document.getElementById('players')
        }
    }
    function drawPlayerList(list) {
        var playerElem = document.getElementById('player-list')
        var playerTemplate = ''
        for (var i in list) {
            var player = list[i];
            player.photo.path = player.photo.path
            playerTemplate += `
            <div class="card">
            <img src="${player.photo.path}.${player.photo.extension}" width="100">
            <h3>${player.fullname}{/h3}
            <div>
            <button class="btn-success" id="${player.id}" onclick="app.roster.player-controller.add('${player.id}')">Add to Team</button>
            </div>
            <div>
            `
        } playerElem.innerHTML = playerTemplate
    }
}