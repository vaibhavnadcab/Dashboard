let o=function(e){var t=new FileReader;t.onload=function(){var l=document.getElementById("profile-img");e.target.files[0].type.match("image.*")?l.src=t.result:(e.target.value="",alert("please select a valid image"))},t.readAsDataURL(e.target.files[0])},r=document.querySelector("#profile-change");r.addEventListener("change",o);new Choices("#choices-multiple-remove-button1",{allowHTML:!0,removeItemButton:!0});new Choices("#choices-multiple-remove-button2",{allowHTML:!0,removeItemButton:!0});new Choices("#choices-multiple-remove-button3",{allowHTML:!0,removeItemButton:!0});let i=document.querySelectorAll(".contact-delete");i.forEach(e=>{e.onclick=()=>{e.closest(".crm-contact").remove()}});let c=document.querySelector(".check-all");c.addEventListener("click",a);function a(){c.checked?document.querySelectorAll(".leads-checkbox input").forEach(function(e){e.closest(".leads-list").classList.add("selected"),e.checked=!0}):document.querySelectorAll(".leads-checkbox input").forEach(function(e){e.closest(".leads-list").classList.remove("selected"),e.checked=!1})}