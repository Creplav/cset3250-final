function writeCookies(){
    writeUserNameCookie();
    writeEmailCookie();
    writeAcquisitionCookie();
    writeLoggedInCookie();
    getAllCookies();
}

function writeUserNameCookie() {
    document.cookie = "username=" + escape(document.loginForm.username.value) + ";";
}

function writeEmailCookie() {
    document.cookie = "email=" + escape(document.loginForm.email.value) + ";";
}

function writeAcquisitionCookie() {
    document.cookie = "acquisition=" + escape(document.getElementById('acquisitionType').value) + ";";
}

function writeLoggedInCookie(){
    document.cookie = "loggedIn=true;";
}

function getAllCookies(){
    alert(document.cookie);
}

