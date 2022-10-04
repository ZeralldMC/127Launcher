function getFile(file, callback) {
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

function theme(theme) {
    var themeObject = document.getElementById("theme")
    if(theme == "Amiac") {
        themeObject.className = "theme-amiac"
    }
    if(theme == "LifeStyle") {
        themeObject.className = "theme-lifestyle"
    }
    if(theme == "GreenApple") {
        themeObject.className = "theme-greenapple"
    }
    if(theme == "LightPurple") {
        themeObject.className = "theme-lightpurple"
    }
    if(theme == "SpaceEngine") {
        themeObject.className = "theme-spaceengine"
    }
    if(theme == "EarthPerspective") {
        themeObject.className = "theme-earthperspective"
    }
    if(theme == "Fauna") {
        themeObject.className = "theme-fauna"
    }
    if(theme == "MoonSide") {
        themeObject.className = "theme-moonside"
    }
}

getFile("userdata.json", function(text){
    var data = JSON.parse(text);
    var currentTheme = data["apptheme"];
    console.log("Current theme: " + currentTheme);
    theme(currentTheme);
});