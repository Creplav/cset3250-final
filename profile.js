document.addEventListener('DOMContentLoaded', function() {
    console.log("Document is ready!");
    if(checkIfLoggedIn()){
        console.log('User is logged in');
        replaceLoginWithProfile();
        loadCookies();
        return;
    }
    replaceProfileWithLogin();
    redirectToLogin();
}, false);

// function checkIfLoggedIn(){
//     if (document.cookie.split(';').filter(function(item) {
//         return item.indexOf('loggedIn=') >= 0
//     }).length) {
//         console.log('The cookie exists')
//         return true;
//     }
//     return false;
// }

function replaceLoginWithProfile(){
    document.getElementById('login').innerHTML = '<a href="profile.html">Profile</a>'
}

function loadCookies(){
    document.getElementById('username').innerHTML = loadUsernameCookie();
    document.getElementById('email').innerHTML = loadEmailCookie();
    document.getElementById('acquisitionType').innerHTML = loadAcquisitionCookie();
    document.getElementById('loggedIn').innerHTML = loadLoggedInCookie();
}

function loadUsernameCookie(){
    return document.cookie.replace(/(?:(?:^|.*;\s*)username\s*\=\s*([^;]*).*$)|^.*$/, "$1");
}

function loadEmailCookie(){
    return document.cookie.replace(/(?:(?:^|.*;\s*)email\s*\=\s*([^;]*).*$)|^.*$/, "$1");
}

function loadAcquisitionCookie(){
    return document.cookie.replace(/(?:(?:^|.*;\s*)acquisition\s*\=\s*([^;]*).*$)|^.*$/, "$1");
}

function loadLoggedInCookie(){
    return document.cookie.replace(/(?:(?:^|.*;\s*)loggedIn\s*\=\s*([^;]*).*$)|^.*$/, "$1");
}

function replaceProfileWithLogin(){
    document.getElementById('login').innerHTML = '<a href="login.html">Login</a>'
}

function redirectToLogin(){
    console.log('User is not logged in. Redirecting to login...');
    window.location.replace('./login.html');
}

function deleteAllCookies(){
    document.cookie = "username=; expires=Thu, 01 Jan 1970 00:00:00 UTC;";
    document.cookie = "email=; expires=Thu, 01 Jan 1970 00:00:00 UTC;";
    document.cookie = "acquisition=; expires=Thu, 01 Jan 1970 00:00:00 UTC;";
    document.cookie = "loggedIn=; expires=Thu, 01 Jan 1970 00:00:00 UTC;";
    alert('You are now logged out. All cookies have been deleted.');
    redirectToLogin();
}
