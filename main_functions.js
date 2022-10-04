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
    elem.innerHTML = data["username"];


    document.getElementById("avatar").innerHTML="<img class='useravatar' src='https://127games.ml/profile/uploads/avatars/"+data["id"]+".png?u=" + makeid(8) + "'>";
    eel.consolePrint("<img class='useravatar' src='https://127games.ml/profile/uploads/avatars/"+data["id"]+".png?u=" + makeid(8) + "'>")
});

eel.expose(goto)
function goto(url) {
    document.location.replace(url);
    eel.consolePrint("Redirecting...")
};

function logout() {
    eel.logout()
    goto("/login.html")
};

function openInBrowser(link) {
    document.open(link)
}

function getOnline(value) {
    if(value == "false") {
        eel.setOnline("true");
    }
    else {
        eel.setOnline("false");
    }
    eel.setOnline(value)
}