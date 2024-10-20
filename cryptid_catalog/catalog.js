fetch('data.json')
  .then(response => response.json())
  .then(data => {

    const cryptids = data.cryptids;
    const container = document.getElementById('content-container');

    let rowHTML = '';  
    cryptids.forEach((page, index) => {
      
      if (index % 3 === 0) {
        if (index !== 0) {
          rowHTML += '</div>';
        }
        rowHTML += '<div class="row">';
      }
      
      rowHTML += `
        <div class="col-md-4 mb-4">
          <div class="card">
              <img src="${page.image}" alt="${page.name}">
              <div class="card-body">
                <h5 class="card-title">${page.name}</h5>
                <p class="card-text">${page.description}</p>
              </div>
          </div>
        </div>
      `;
      
      if (index === cryptids.length - 1) {
        rowHTML += '</div>';
      }
    });

    container.innerHTML = rowHTML;
  })
  .catch(error => console.error('Error loading content:', error));
