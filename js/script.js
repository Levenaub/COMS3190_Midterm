$(document).ready(function() {
    // Load cryptid data from JSON
    $.getJSON('data.json', function(cryptidInfo) {

        // Initialize the vector map
        $('#map').vectorMap({
            map: 'usa_en',
            backgroundColor: '#ffffff',
            borderColor: '#ffffff',
            borderOpacity: 0,
            borderWidth: 1,
            color: '#e9ecef',
            enableZoom: false,
            hoverColor: '#0E1B48',
            hoverOpacity: null,
            normalizeFunction: 'linear',
            scaleColors: ['#b6d6ff', '#005ace'],
            selectedColor: '#0E1B48',
            selectedRegions: null,
            showTooltip: true,
            onRegionOver: function(event, code) {
                const stateName = this.get(code);
                console.log(stateName);
            },
            onRegionClick: function(event, code) {
                // Handle click events if necessary
            }
        });

        // Attach event listeners to cryptid markers
        document.querySelectorAll(".cryptid-marker").forEach(marker => {
            marker.addEventListener("mouseenter", function(event) {
                const cryptidKey = this.getAttribute("data-cryptid");
                const cryptid = cryptidInfo[cryptidKey];
                
                if (cryptid) {
                    // Update the card with the cryptid information
                    document.getElementById("cryptidTitle").innerText = cryptid.name;
                    document.getElementById("cryptidDescription").innerText = cryptid.description;
                    document.getElementById("cryptidImage").src = cryptid.image; // Set the image source

                    // Position the card and show it
                    const card = document.getElementById("cryptidCard");
                    card.style.display = "block"; // Show the card
                    card.style.left = `${event.pageX}px`; // Position the card based on mouse coordinates
                    card.style.top = `${event.pageY + 20}px`; // Position slightly below the cursor
                }
            });

            marker.addEventListener("mouseleave", function() {
                const card = document.getElementById("cryptidCard");
                card.style.display = "none"; // Hide the card
            });
        });
    });
});
