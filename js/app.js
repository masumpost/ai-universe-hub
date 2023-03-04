
let firstApi = ()=> {
    fetch('https://openapi.programming-hero.com/api/ai/tools')
    .then(res=> res.json())
    .then(data => singleCardDetails(data))
    spinner(true);
}
singleCardDetails =(data)=>{
    let singleData = data.data.tools
    singleData.forEach(sData => {
        console.log(sData)
        let id = sData.id;
let cardSection = document.getElementById('cardSection');
let div = document.createElement('div');
div.innerHTML=`
<div class="col p-2">
<div class="card">
  <img style="height:280px;" src=${sData.image} class="card-img-top p-2 w-100 rounded" alt="...">
  <h3 class="p-2">Features</h3>

  <ol>
        <li>${sData.features[0]}</li>
        <li>${sData.features[1]}</li>
        <li>${sData.features[2]}</li>
  </ol>
  <hr class="my-2">
  <div class="d-flex justify-content-between mx-3 align-items-center">
    <div class="text-left">
    <h3 class="p-2">${sData.name}</h3>
    <p class="ms-2"><i class="fa-regular fa-calendar-days"></i> ${sData.published_in}</p>
    </div>
    <div class="">
    <i onclick="modalButton('${id}')" id="modal-button" class="fa-solid fa-arrow-right bg-danger-subtle p-3 rounded-circle" data-bs-toggle="modal" data-bs-target="#aiCardModal"></i>
    </div>
  </div>

</div>
</div>
`;

cardSection.appendChild(div)
    });
spinner(false);
}

// spinner section added

let spinner = isLoading =>{
  let loader = document.getElementById('loader')
if(isLoading){
  loader.classList.remove('d-none')
}
else{
  loader.classList.add('d-none')
}
}
// spinner section end

