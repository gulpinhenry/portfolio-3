const collapseBtn = document.getElementById("collapse-btn");
const mobileMenu = document.getElementById("offcanvas-nav");


collapseBtn.addEventListener("click", (event)=>{
    UIkit.offcanvas(mobileMenu).show();
})