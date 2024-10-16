fetch('catalog.json')
.then(response => response.json())
.then(data => {

    const cryptids = data.cryptids;
    const container = document.getElementById('content-container');

    cryptids.forEach(page => {
        
        const cardHTML = `
        <div class="row">
          <div class="col-md-4 mb-4">
            <div class="card">
              <div style="text-align: center">"<img src="${page.image}" alt="${page.name}"></div>
              <div class="card-body">
                <h5 class="card-title">${page.name}</h5>
                <p class="card-text">${page.description}</p>
              </div>
            </div>
          </div>
          `;

        container.innerHTML += cardHTML;
    });

})
.catch(error => console.error('Error loading content:', error));