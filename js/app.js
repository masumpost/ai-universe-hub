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
            <div class="card-body items-center text-left">
              <h2 class="card-title font-semibold">Features</h2>
              <p>If a dog chews shoes whose shoes does he choose?</p>
              <div class="card-actions">
               
              </div>
            </div>
          </div>
            `;
            mainContainer.appendChild(div);
        });
     
    }
}