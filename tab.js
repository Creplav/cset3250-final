$(document).ready(() => {
    openDefaultTab();
});

function openDefaultTab(){
    let tabContent = document.getElementsByClassName('tabcontent');
    for(let i = 0; i < tabContent.length; i++)
        tabContent[i].style.display = "none";

    document.getElementById('ethereum-wallet').style.display = "block";
}

function openTab(event, tabName){

    let tabContent = document.getElementsByClassName('tabcontent');
    for(let i = 0; i < tabContent.length; i++)
        tabContent[i].style.display = "none";

    document.getElementById(tabName).style.display = "block";
}