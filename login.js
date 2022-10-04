function getLoginData() {
    login = document.getElementById("username").value;
    pass = document.getElementById("password").value;
    console.log("Username: " + login + ", pass: " + pass)
    eel.loginCheck(login, pass)
    eel.setOnline("true")
}
eel.expose(goto)
function goto(url) {
    window.location.replace(url);
    eel.consolePrint("Redirecting...")
};
eel.expose(loginCheckReport)
function loginCheckReport(text) {
    var report = document.getElementById('loginCheckReport');
    report.innerHTML = "<br>" + text;
}