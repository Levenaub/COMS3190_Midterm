fetch('catalog.json')
.then(response => response.json())
.then(data => {
    document.getElementById("jersey_devil").src = data.jersey_devil.image;
})
.catch(error => console.error('Error loading content:', error));