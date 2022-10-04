function get_register(getRegisterDate, getMedals, getBalance, getItems) {
    console.log("RegDate: " + getRegisterDate + ", Medals: " + getMedals + ", Balance: " + getBalance + "$, items: " + getItems)
    var regdateHTML = document.getElementById('regdate');
    regdateHTML.innerHTML = getRegisterDate;
}