const toggleBtn = document.querySelector(".sidebar-toggle");
const closeBtn = document.querySelector(".close-btn");
const sidebar = document.querySelector(".sidebar");

//event listener for the toggleBtn variable
toggleBtn.addEventListener("click", function () {
  // if sidebar contains the classList 'show-sidebar', remove it, else add it
  //   if (sidebar.classList.contains("show-sidebar")) {
  //     sidebar.classList.remove("show-sidebar");
  //   } else {
  //     sidebar.classList.add("show-sidebar");
  //   }
  //shorter version of the if/else script on top
  sidebar.classList.toggle("show-sidebar");
});

//event listenr for the closeBtn variable
closeBtn.addEventListener("click", function () {
  //remove "show-sidebar" classList if the closeBtn is clicked
  sidebar.classList.remove("show-sidebar");
});
