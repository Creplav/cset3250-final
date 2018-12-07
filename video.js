function toggleVideo(){
    var video = document.getElementById('video');
    if(video.style.display != "none"){
        video.style.display = "none";
        return;
    }
    video.style.display = "inline";
}

