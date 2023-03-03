allCards=()=>{
    const url=` https://openapi.programming-hero.com/api/ai/tools`
    fetch(url).then(res=> res.json()).then(data=> singleCards(data));

    singleCards=(data)=>{
      data.data.tools.forEach(singleDetails => {
            console.log(singleDetails);
            
            let mainContainer = document.getElementById('main-container');
            let div = document.createElement('div');
            div.innerHTML=`
            <div class="card w-96 bg-base-100 shadow-xl">
            <figure class="px-10 pt-10">
              <img src= ${singleDetails.image} alt="Shoes" class="rounded-xl h-56 w-full" />
            </figure>
            <div class="card-body text-left">
              <h2 class="card-title font-bold">Features</h2>
              <ol id="features-ol">
              <li>1. ${singleDetails.features[0]}</li>
              <li>2. ${singleDetails.features[1]}</li>
              <li>3. ${singleDetails.features[2]}</li>
              </ol>
              <hr class="my-2">
              <div class="card-actions justify-between">
              <div>
              <h2 class="font-bold">${singleDetails.name}</h2>
              <i class="fa-solid fa-calendar-days"></i> ${singleDetails.published_in}
              </div>
              <div>
              <i class="fa-solid fa-arrow-right bg-red-100 p-4 text-red-700 rounded-3xl"></i>
              </div>
              </div>
            </div>
          </div>
            `;
           
           
            mainContainer.appendChild(div);
        });
     
    }
}