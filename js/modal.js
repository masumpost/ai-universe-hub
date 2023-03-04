let modalButton = (id) =>{
    fetch(`https://openapi.programming-hero.com/api/ai/tool/${id}`)
    .then(res => res.json())
    .then(data => showModalDetails(data));
}
showModalDetails = (data) =>{
    let modalContainer = document.getElementById('aiCardModal');
    
}