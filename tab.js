$(window).on('load', () => {
    openTab(event, 'ethereum-wallet');
})


function openTab(event, tabName){

    let tabContent = document.getElementsByClassName('tabcontent');
    for(let i = 0; i < tabContent.length; i++)
        tabContent[i].style.display = "none";

    document.getElementById(tabName).style.display = "block";
}