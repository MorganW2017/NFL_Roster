function PlayersController() {
    var playerService = new PlayerService(drawPlayerList);
    // var showButton = document.getElementById('show-button')
    this.add = function add(id) {
        console.log(playerId, id)
    }
    function ready(data) {
        updatePlayer(data)
        function updatePlayer(list) {
            var elem = document.getElementById('players')
        }
    }
    function drawPlayerList(photoArr) {
        var playerElem = document.getElementById('player-list')
        var playerTemplate = ''
        for (var i = 0; i < photoArr.length; i++) {
            var player = photoArr[i];
            playerTemplate += `
            <div class="col-sm-6 col-md-4">
            <div class="card">
                <img src="${player.imagePath}">
                <div class="caption">
                    <h3>${player.firstName} ${player.lastName}</h3>
                    <p>${player.position}</p>
                    <p>${player.teamName}</p>
                    <button class="btn-success" id="${player.id}" onclick="app.roster.player-controller.add('${player.id}')">Add to Team</button>
                    
                </div>
            </div>
        </div>
        `
        } playerElem.innerHTML = playerTemplate
    }
}