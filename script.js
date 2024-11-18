
// copy Address on click copy button
  function copyAddress() {
    const inputField = document.getElementById("input-text");
    const placeholderText = inputField.placeholder;
  
    // Use Clipboard API
    if (navigator.clipboard) {
      navigator.clipboard.writeText(placeholderText).then(
        () => {
          alert("Address copied: " + placeholderText);
        },
        () => {
          alert("Failed to copy the address. Please try again.");
        }
      );
    } else {
      const tempInput = document.createElement("input");
      tempInput.value = placeholderText;
      document.body.appendChild(tempInput);
      tempInput.select();
      document.execCommand("copy");
      document.body.removeChild(tempInput);
      alert("Address copied: " + placeholderText);
    }
  }
  
// table dropdown on click open
  document.addEventListener('DOMContentLoaded', () => {
    // Select all select-menu elements
    const selectMenus = document.querySelectorAll('.select-menu');
  
    selectMenus.forEach((menu) => {
      const selectBtn = menu.querySelector('.select-btn');
      const options = menu.querySelector('.options');
  
      // Toggle the active class for the current dropdown
      selectBtn.addEventListener('click', (event) => {
        event.stopPropagation(); // Prevent the click from propagating
        // Close any other open dropdowns
        selectMenus.forEach((otherMenu) => {
          if (otherMenu !== menu) {
            otherMenu.classList.remove('active');
          }
        });
        // Toggle the current dropdown
        menu.classList.toggle('active');
      });
  
      // Close the dropdown when clicking outside
      document.addEventListener('click', () => {
        menu.classList.remove('active');
      });
    });
  });
  

