let imageList = [];

$(document).ready(() => {
    console.log('Loaded');
    // Grab the images from the JSON file
    let xhttp = new XMLHttpRequest();
    xhttp.overrideMimeType('application/json');
    xhttp.onreadystatechange = function(){
        if(this.readyState == 4 && this.status == 200){
            let jsonObject = JSON.parse(this.responseText);
            console.log(jsonObject);
            let run = 0;
            jsonObject.images.forEach((imageObj) => {
                imageList.push(imageObj);
                createThumbnail(imageObj.imageLocation);
                if(run === 0) setInitialItems(imageObj);
                run++;
            });
            console.log(imageList);
        }
    };
    xhttp.open('GET', 'images.json', true);
    xhttp.send();

    $(document).on('click', '.thumbnail', (event) => {
        console.log('clicky')
        let image = findImageByPath('./images/tutorial/' + /tutorial\d.jpg/.exec(event.target.src));
        viewImage(image.imageLocation);
        updateDescriptionText(image.description);
        updateImageNumber(image.id);
    })
});

function setInitialItems(image){
    viewImage(image.imageLocation);
    updateDescriptionText(image.description);
    updateImageNumber(image.id)
}

function createThumbnail(imagePath){
    $('.thumbnails').append(`<img src=${imagePath} class="thumbnail">`);
}

function viewImage(imagePath){
    $('.viewer').attr('src', imagePath)
}

function findImageByPath(path){
    for(let i = 0; i < imageList.length; i++){
        let obj = imageList[i];
        if(path === obj.imageLocation){
            return obj;
        }
    }
    return null;
}

function updateDescriptionText(imageDescription){
    $('#description').text(imageDescription);
}

function updateImageNumber(imageID){
    $('#image-id').text(`${imageID}/8`)
}
