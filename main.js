function readTextFile(file, callback) {
    var rawFile = new XMLHttpRequest();
    rawFile.overrideMimeType("application/json");
    rawFile.open("GET", file, true);
    rawFile.onreadystatechange = function() {
        if (rawFile.readyState === 4 && rawFile.status == "200") {
            callback(rawFile.responseText);
        }
    }
    rawFile.send(null);
}

function makeid(length) {
    var result           = '';
    var characters       = '123456789';
    var charactersLength = characters.length;
    for ( var i = 0; i < length; i++ ) {
      result += characters.charAt(Math.floor(Math.random() * 
 charactersLength));
   }
   return result;
}

//usage:
readTextFile("userdata.json", function(text){
    var data = JSON.parse(text);
    console.log(data["username"] + ", " + data["id"]);
    var elem = document.getElementById('username');
    var elemid = document.getElementById('userid');
    elem.innerHTML = data["username"];
    elemid.innerHTML = data["id"];


    var isGameStyleFull = data["setting_isFullGames"]

    document.getElementById("avatar").innerHTML="<img class='useravatar' src='https://127games.ml/profile/uploads/avatars/"+data["id"]+".png?u=" + makeid(8) + "'>";
    eel.consolePrint("<img class='useravatar' src='https://127games.ml/profile/uploads/avatars/"+data["id"]+".png?u=" + makeid(8) + "'>")

    var styleGame = document.getElementById('setting_game');
    if(isGameStyleFull == "true") {
        styleGame.className = "game-full";
        document.getElementById('setting_game_app1').className = "game-full";
        document.getElementById('setting_game_app2').className = "game-full";
        document.getElementById('setting_game_app3').className = "game-full";
    }
    else {
        // nothing to do
    }
    eel.expose(set_rpc_settings);
    function set_rpc_settings(state, details, largeImage, smallImage, smallImageText) {
        state = data["username"] + " customizes everything";
        details = "Settings";
        largeImage = "127launcher";
        smallImage = "launcher_settings";
        smallImageText = "Settings Page";
        eel.rpc_settings(state, details, largeImage, smallImage, smallImageText)
    }


});

function appsVersions(file, callback) {
    var rawFile = new XMLHttpRequest();
    rawFile.overrideMimeType("application/json");
    rawFile.open("GET", file, true);
    rawFile.onreadystatechange = function() {
        if (rawFile.readyState === 4 && rawFile.status == "200") {
            callback(rawFile.responseText);
        }
    }
    rawFile.send(null);
}

appsVersions("appsver.json", function(text){
    var data = JSON.parse(text);
    console.log("app1ver: " + data["app1"])
    var app1 = document.getElementById('app1');
    var app2 = document.getElementById('app2');
    var app3 = document.getElementById('app3');
    app1.innerHTML = data["app1"];
    app2.innerHTML = data["app2"];
    app3.innerHTML = data["app3"];
});


function downloadGame(gameid) {
    eel.download_game("Downloading the '" + gameid + "' game", gameid)
    var element = document.getElementById("appStart");
    element.classList.add("appStartVis");
}

eel.expose(gameStarted)
function gameStarted(gswTitle, gwsDesc) {
    var title = document.getElementById('appStartTitle');
    var desc = document.getElementById('appStartDesc');
    title.innerHTML = gswTitle
    desc.innerHTML = gwsDesc
    var element = document.getElementById("loadCircle");
    element.classList.add("loadCircleHide");
    appsVersions("appsver.json", function(text){
        var data = JSON.parse(text);
        console.log("app1ver: " + data["app1"])
        var app1 = document.getElementById('app1');
        var app2 = document.getElementById('app2');
        var app3 = document.getElementById('app3');
        app1.innerHTML = data["app1"];
        app2.innerHTML = data["app2"];
        app3.innerHTML = data["app3"];
    });
}

eel.expose(gameEnded)
function gameEnded() {
    var element = document.getElementById("appStart");
    element.classList.add("appStartHide");
}

eel.expose(goto)
function goto(url) {
    window.location.replace(url);
    eel.consolePrint("Redirecting...")
};

function logout() {
  eel.logout()
  goto("/login.html")
}

eel.expose(lr)
function lr() {
    location.reload(true)
    eel.consolePrint("lr() function is started.")
}

function openInBrowser(link) {
    window.open(link)
}

function RedirToFriends() {
    goto("friends.html");
}

function RedirToStudio() {
    goto("studio.html");
}

