function loadGPUS(){
    // $.ajaxSetup({beforeSend: function(xhr){
    //     if(xhr.overrideMimeType){
    //         xhr.overrideMimeType("application/json");
    //     }
    // }});
    let xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function(){
        if(this.readyState == 4 && this.status == 200){
            jsonObject = JSON.parse(this.responseText);
            console.log(jsonObject);
            let body = document.getElementById('table-body').innerHTML;
            body = '';
            jsonObject.forEach((gpu) => {
                body += `<tr><td>${gpu.name}</td><td>${gpu.memory} GB</td><td>$${gpu.price}</td></tr>`;

            })
        }
    };
    xhttp.open('GET', 'gpus.json', true);
    xhttp.send();
}