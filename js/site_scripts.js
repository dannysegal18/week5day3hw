// Create an array of partner information
const partners = [
    { name: "Partner Bus Tour", imageSrc: "images/partner-bustour.png" },
    { name: "Partner Cabin Rental", imageSrc: "images/partner-cabinrental.png" },
    { name: "Partner Camping Adventure", imageSrc: "images/partner-campingadv.png" },
    { name: "Partner College Tour", imageSrc: "images/partner-collegetours.png" },
    { name: "Partner Bike Rentals", imageSrc:"images/partner-rentalbike.png" },
    { name: "Partner Tour Group", imageSrc:"images/partner-tourgroup.png" }
  ];
  
  // Function to create the partner list
  function createPartnerList() {
    const partnersContainer = document.getElementById("partners");
  
    // Create an unordered list element
    const partnerList = document.createElement("ul");
  
    // Loop through the partners and create list items with images
    partners.forEach((partner) => {
      const listItem = document.createElement("li");
      listItem.classList.add("partner");
  
      const img = document.createElement("img");
      img.src = partner.imageSrc;
      img.alt = partner.name;
  
      listItem.appendChild(img);
      partnerList.appendChild(listItem);
    });
  
    // Append the created list to the partners container
    partnersContainer.appendChild(partnerList);
  }
  
  // Call the function to create the partner list when the page loads
  window.addEventListener("load", createPartnerList);
  