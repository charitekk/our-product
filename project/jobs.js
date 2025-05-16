function DropDown() {
  document.getElementById("dropdownMenu").classList.toggle("show");
}

// Close dropdown if clicked outside
window.onclick = function (event) {
  if (!event.target.matches(".dropdown-btn")) {
    const dropdowns = document.getElementsByClassName("dropdown-content");
    for (let i = 0; i < dropdowns.length; i++) {
      if (dropdowns[i].classList.contains("show")) {
        dropdowns[i].classList.remove("show");
      }
    }
  }
};
