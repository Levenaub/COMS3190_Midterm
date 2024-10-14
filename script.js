// script.js
document.addEventListener("DOMContentLoaded", () => {
    const cryptidInfo = {
      bigfoot: {
        name: "Bigfoot",
        description: "A large, hairy ape-like creature said to inhabit the forests of North America."
        // Add more cryptid data here
      },
      // Add more cryptids here
    };
  
    document.querySelectorAll(".cryptid-marker").forEach(marker => {
      marker.addEventListener("click", function() {
        const cryptidKey = this.getAttribute("data-cryptid");
        const cryptid = cryptidInfo[cryptidKey];
        document.getElementById("cryptidInfo").innerHTML = `
          <div class="card">
            <div class="card-body">
              <h5 class="card-title">${cryptid.name}</h5>
              <p class="card-text">${cryptid.description}</p>
            </div>
          </div>
        `;
        new bootstrap.Modal(document.getElementById('cryptidModal')).show();
      });
    });
  });
  