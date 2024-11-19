// copy Address on click copy button
function copyAddress() {
  const inputField = document.getElementById("input-text");
  const placeholderText = inputField.placeholder;

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
document.addEventListener("DOMContentLoaded", () => {
  const selectMenus = document.querySelectorAll(".select-menu");

  selectMenus.forEach((menu) => {
    const selectBtn = menu.querySelector(".select-btn");
    const options = menu.querySelector(".options");

    selectBtn.addEventListener("click", (event) => {
      event.stopPropagation();
      selectMenus.forEach((otherMenu) => {
        if (otherMenu !== menu) {
          otherMenu.classList.remove("active");
        }
      });
      menu.classList.toggle("active");
    });

    document.addEventListener("click", () => {
      menu.classList.remove("active");
    });
  });
});



// matrix mobile screen automatic center on 
window.addEventListener("load", function () {
  const tableContainer = document.querySelector(".table-container");
  const table = document.querySelector("table");

  if (tableContainer && table) {
    setTimeout(() => {
      const scrollPosition =
        (table.scrollWidth - tableContainer.clientWidth) / 2;
      tableContainer.scrollTo({
        left: scrollPosition,
        behavior: "smooth",
      });
    }, 100);
  } else {
    console.error("Table or container not found!");
  }
});

document.addEventListener("DOMContentLoaded", () => {
  const sidebar = document.getElementById("sidebar");
  const toggleButton = document.getElementById("sidebarToggle");

  toggleButton.addEventListener("click", () => {
    sidebar.classList.toggle("collapsed");
    if (window.innerWidth <= 990) {
      sidebar.classList.toggle("active");
    }
  });
});



// change theme day/Night 
document.querySelector(".layout-setting").addEventListener("click", () => {
  const body = document.body;
  const currentTheme = body.getAttribute("data-theme-mode");

  if (currentTheme === "light") {
    body.setAttribute("data-theme-mode", "dark");
    localStorage.setItem("theme", "dark");
  } else {
    body.setAttribute("data-theme-mode", "light");
    localStorage.setItem("theme", "light");
  }
});

function chantheme() {
  let local = localStorage.getItem("theme");
  const body = document.body;
  if (local == "light") {
    body.setAttribute("data-theme-mode", "light");
  } else {
    body.setAttribute("data-theme-mode", "dark");
  }
}

window.onload = () => {
  chantheme();
};



// sidebar open and close functionality on desktop screen
function isCollapsed() {
  const d = document.getElementById("m-content");
  const side = document.getElementById("sidebar");
  const subMenu = document.getElementsByClassName("side-menu__label");
  const logout = document.getElementsByClassName("logout-btn");

  if (d.style.marginLeft == "5rem") {
    d.style.marginLeft = "15rem";
    side.style.width = "15rem";
    Array.from(logout).forEach((button) => {
      button.style.display = "block";
    });
    const hiddenSubMenu = Array.from(subMenu).map((it) => {
      it.style.display = "block";
    });
  } else if ((d.style.marginLeft = "15rem")) {
    d.style.marginLeft = "5rem";
    side.style.width = "5rem";
    Array.from(logout).forEach((button) => {
      button.style.display = "none";
    });
    const hiddenSubMenu = Array.from(subMenu).map((it) => {
      it.style.display = "none";
    });
  }else if(window.innerWidth <= 990){
    d.style.marginLeft = "0rem";
    side.style.width = "0rem";
  }
}

