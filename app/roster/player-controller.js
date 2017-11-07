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
        for (var i = 0; i < 30; i++) {
            list;
        }
        var player = list[i];
        playerTemplate += `
            <div class="card">
            <img src="${player.photo}">
            <h3>${player.fullname}</h3>
            <div>
            <button class="btn-success" id="${player.id}" onclick="app.roster.player-controller.add('${player.id}')">Add to Team</button>
            </div>
            <div>
            `
    } playerElem.innerHTML = playerTemplate
}
