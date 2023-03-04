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

    let price1 = document.getElementById('price1');
    price1.innerText = fullData.pricing[0].price !=0 ? fullData.pricing[0].price : 'free of cost';
    let price2 = document.getElementById('price2');
    price2.innerText = fullData.pricing[1].price !=0 ? fullData.pricing[1].price : 'free of cost';
    let price3 = document.getElementById('price3');
    price3.innerText = fullData.pricing[2].price !=0 ? fullData.pricing[2].price : 'free of cost';
}