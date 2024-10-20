fetch('data.json')
.then(response => response.json())
.then(data => {

    const authors = data.authors;
    const container = document.getElementById('content-container');
    let cardHTML = '';
    cardHTML += '<div class="row">';

    authors.forEach(element => {
        
        cardHTML += `
            <div class="col-md-6">
                <div class="card border-dark mb-3 p-3">
                    <div class="text-center">
                        <img src="${element.image}" class="card-img-top rounded-circle" alt="${element.name}'s profile picture" style="width: 175px; border: 5px solid #4a5d23;">
                    </div>
                    <div class="card-body text-center">
                        <h5 class="card-title">${element.name}</h5>
                        <p><strong>Email:</strong> ${element.email}</p>
                        <p>${element.description}</p>
                    </div>
                </div>
             </div>
        `;
    });
    cardHTML += '</div>';
    container.innerHTML = cardHTML;
    
})
.catch(error => console.error('Error loading content:', error));