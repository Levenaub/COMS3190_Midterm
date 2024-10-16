// script.js
$(document).ready(function() {
    const cryptidInfo = {
      bigfoot: {
        name: "Bigfoot",
        description: "A large, hairy ape-like creature said to inhabit the forests of North America.",
        image: "path_to_bigfoot_image.jpg" // Add the correct path to your image
      },
      chupacabra: {
        name: "Chupacabra",
        description: "A legendary creature in folklore that is said to attack livestock and drain their blood.",
        image: "path_to_chupacabra_image.jpg" // Add the correct path to your image
      },
      mothman: {
        name: "Mothman",
        description: "A winged creature reportedly seen in Point Pleasant, West Virginia, often associated with disaster.",
        image: "path_to_mothman_image.jpg" // Add the correct path to your image
    },
    wendigo: {
        name: "Wendigo",
        description: "A mythical creature from Algonquian folklore that is said to possess human beings and cause them to become cannibalistic.",
        image: "path_to_wendigo_image.jpg" // Add the correct path to your image
    },
    champ: {
        name: "Champ",
        description: "A cryptid said to inhabit Lake Champlain, often likened to the Loch Ness Monster.",
        image: "path_to_champ_image.jpg" // Add the correct path to your image
    },
    "dover-demon": {
        name: "Dover Demon",
        description: "A creature reported in Dover, Massachusetts, said to have a small body and large eyes.",
        image: "path_to_dover_demon_image.jpg" // Add the correct path to your image
    },
    "jersey-devil": {
        name: "Jersey Devil",
        description: "A legendary creature said to inhabit the Pine Barrens of New Jersey, often described as a flying biped.",
        image: "path_to_jersey_devil_image.jpg" // Add the correct path to your image
    },
    skinwalkers: {
        name: "Skinwalkers",
        description: "A type of witch in Navajo culture that can transform into different animals.",
        image: "path_to_skinwalker_image.jpg" // Add the correct path to your image
    },
    "tennessee-wildman": {
        name: "Tennessee Wildman",
        description: "A legendary creature similar to Bigfoot, said to roam the woods of Tennessee.",
        image: "path_to_tennessee_wildman_image.jpg" // Add the correct path to your image
    },
    "skunk-ape": {
        name: "Skunk Ape",
        description: "A cryptid said to inhabit the swamps of Florida, often described as a large, ape-like creature.",
        image: "path_to_skunk_ape_image.jpg" // Add the correct path to your image
    }
      // Add more cryptids here if needed
    };
  
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
        // Show the state name on hover
        const stateName = this.get(code);
        console.log(stateName);
      },
      onRegionClick: function(event, code) {
        // Handle click events if necessary
      },
    });
  
    document.querySelectorAll(".cryptid-marker").forEach(marker => {
      marker.addEventListener("mouseenter", function(event) {
        const cryptidKey = this.getAttribute("data-cryptid");
        const cryptid = cryptidInfo[cryptidKey];
  
        // Update the card with the cryptid information
        document.getElementById("cryptidTitle").innerText = cryptid.name;
        document.getElementById("cryptidDescription").innerText = cryptid.description;
        document.getElementById("cryptidImage").src = cryptid.image; // Set the image source
  
        // Position the card and show it
        const card = document.getElementById("cryptidCard");
        card.style.display = "block"; // Show the card
        card.style.left = `${event.pageX}px`; // Position the card based on mouse coordinates
        card.style.top = `${event.pageY + 20}px`; // Position slightly below the cursor
      });
  
      marker.addEventListener("mouseleave", function() {
        const card = document.getElementById("cryptidCard");
        card.style.display = "none"; // Hide the card
      });
    });
  });
  