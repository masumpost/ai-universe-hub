let modalButton = (id) =>{
    fetch(`https://openapi.programming-hero.com/api/ai/tool/${id}`)
    .then(res => res.json())
    .then(data => showModalDetails(data));
}
showModalDetails = (data) =>{
    let fullData = data.data
    console.log(fullData);
    let cardDetail = document.getElementById('Mdtl');
    cardDetail.innerText = fullData.description;
    let image = document.getElementById('divImage');
    image.src=fullData.image_link[0];
}