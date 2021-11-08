const collapseBtn = document.getElementById("collapse-btn");
const mobileMenu = document.getElementById("offcanvas-nav");
const test = document.getElementById("offcanvas-sd");

collapseBtn.addEventListener("click", (event)=>{
    UIkit.offcanvas(mobileMenu).show();
})