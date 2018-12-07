function loadGPUS(){
    let xhttp = new XMLHttpRequest();
    xhttp.overrideMimeType('application/json');
    xhttp.onreadystatechange = function(){
        if(this.readyState == 4 && this.status == 200){
            jsonObject = JSON.parse(this.responseText);
            document.getElementById('table-body').innerHTML ='';
            for(let i = 0; i < jsonObject.gpus.length; i++) {
                document.getElementById('table-body').innerHTML += `<tr><td>${jsonObject.gpus[i].name}</td><td>${jsonObject.gpus[i].memory} GB</td><td>$${jsonObject.gpus[i].price}</td></tr>`;
            };
        }
    };
    xhttp.open('GET', 'gpus.json', true);
    xhttp.send();
}