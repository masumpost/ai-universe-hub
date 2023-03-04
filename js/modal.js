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

    // modal middle box

    let price1 = document.getElementById('price1');
    price1.innerText = fullData.pricing[0].price !=0 ? fullData.pricing[0].price : 'free of cost';
    let price2 = document.getElementById('price2');
    price2.innerText = fullData.pricing[1].price !=0 ? fullData.pricing[1].price : 'free of cost';
    let price3 = document.getElementById('price3');
    price3.innerText = fullData.pricing[2].price !=0 ? fullData.pricing[2].price : 'free of cost';

// modal footer

    let li1 = document.getElementById('li1');
    li1.innerText = fullData.features[1].feature_name;
    let li2 = document.getElementById('li2');
    li2.innerText = fullData.features[2].feature_name;
    let li3 = document.getElementById('li3');
    li3.innerText = fullData.features[3].feature_name;

    // integration list

    let lis1 = document.getElementById('lis1');
    lis1.innerText = fullData.integrations[0] ? fullData.integrations[0] : 'no data fond';
    let lis2 = document.getElementById('lis2');
    lis2.innerText = fullData.integrations[1] ? fullData.integrations[1] : 'no data fond';
    let lis3 = document.getElementById('lis3');
    lis3.innerText = fullData.integrations[2] ? fullData.integrations[2] : 'no data fond';

    // modal img question 

    let imgH5 = document.getElementById('imgH5');
    imgH5.innerText = fullData.input_output_examples[0].input ? fullData.input_output_examples[0].input : 'Can you give any example?';

    // modal img answers 

    let imgP = document.getElementById('imgP');
    imgP.innerText = fullData.input_output_examples[0].output ? fullData.input_output_examples[0].output : 'No! Not Yet! Take a break!!!'
}