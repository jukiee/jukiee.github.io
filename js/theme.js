document.addEventListener("DOMContentLoaded",(function(){const e=document.getElementById("themeToggle"),t=e.querySelector(".material-symbols-outlined"),o=document.documentElement,r=localStorage.getItem("theme")||"light";function l(e){"dark"===e?(t.textContent="light_mode",t.className="material-symbols-outlined"):(t.textContent="dark_mode",t.className="material-symbols-outlined")}function a(e){setTimeout((()=>{document.querySelectorAll(".dropdown-menu").forEach((t=>{"dark"===e?t.classList.add("dropdown-menu-dark"):t.classList.remove("dropdown-menu-dark")})),document.querySelectorAll("label, .form-label").forEach((e=>{e.style.transition="color 0.3s ease"})),document.querySelectorAll("span:not(.material-symbols-outlined)").forEach((t=>{t.closest(".badge, .btn, .alert, .nav-link, .dropdown-item")||(t.style.transition="color 0.3s ease",t.closest(".card, form, .modal")&&(t.style.color="dark"===e?"#e0e0e0":""))})),document.querySelectorAll("strong, b").forEach((t=>{t.style.transition="color 0.3s ease",t.closest(".alert, .badge, .btn")||(t.style.color="dark"===e?"#ffffff":"")})),document.querySelectorAll("div").forEach((t=>{if(t.closest(".alert, .badge, .btn, .card-title, .card-subtitle"))return;if(!t.textContent||""===t.textContent.trim())return;let o=!1;for(let e of t.childNodes)if(e.nodeType===Node.TEXT_NODE&&""!==e.textContent.trim()){o=!0;break}o&&(t.style.transition="color 0.3s ease",t.style.color="dark"===e?"#ffffff":""),t.closest(".card-body, form, .modal-body, .form-group, .input-group")&&t.querySelectorAll(":scope > *:not(h1, h2, h3, h4, h5, h6, span, strong, b)").forEach((t=>{t.nodeType===Node.ELEMENT_NODE&&(t.style.transition="color 0.3s ease",t.style.color="dark"===e?"#e0e0e0":"")}))})),document.querySelectorAll("table.table").forEach((t=>{"dark"===e?(t.style.backgroundColor="#1a1a1a",t.style.color="#ffffff",t.style.borderColor="rgba(255, 255, 255, 0.2)",t.classList.add("table-dark-custom"),t.querySelectorAll("th, td").forEach((e=>{e.style.backgroundColor="#1a1a1a",e.style.color="#ffffff",e.style.borderColor="rgba(255, 255, 255, 0.2)"})),t.querySelectorAll("thead th").forEach((e=>{e.style.backgroundColor="#222222",e.style.color="#ffffff",e.style.borderColor="rgba(255, 255, 255, 0.2)"})),t.classList.contains("table-striped")&&t.querySelectorAll("tbody tr:nth-child(odd) td").forEach((e=>{e.style.backgroundColor="#282828"}))):(t.classList.remove("table-dark-custom"),t.style.backgroundColor="",t.style.color="",t.style.borderColor="",t.querySelectorAll("th, td").forEach((e=>{e.style.backgroundColor="",e.style.color="",e.style.borderColor=""})),t.querySelectorAll("thead th").forEach((e=>{e.style.backgroundColor="",e.style.color="",e.style.borderColor=""})))})),document.querySelectorAll("input, select, textarea").forEach((t=>{"dark"===e?(t.style.backgroundColor="#2d2d2d",t.style.color="#ffffff",t.style.borderColor="#000000"):(t.style.backgroundColor="",t.style.color="",t.style.borderColor="")})),document.querySelectorAll(".card.bg-light").forEach((t=>{"dark"===e?(t.style.backgroundColor="#2d2d2d",t.style.borderColor="rgba(255, 255, 255, 0.1)",t.querySelectorAll(".card-title, .card-subtitle, .card-text, .display-4, p").forEach((e=>{e.style.color="#ffffff"})),t.querySelectorAll(".bg-light").forEach((e=>{e.style.backgroundColor="#2d2d2d !important"}))):(t.style.backgroundColor="",t.style.borderColor="",t.querySelectorAll(".card-title, .card-subtitle, .card-text, .display-4, p").forEach((e=>{e.style.color=""})),t.querySelectorAll(".bg-light").forEach((e=>{e.style.backgroundColor=""})))}))}),0)}o.setAttribute("data-theme",r),l(r),a(r),e.addEventListener("click",(function(){const e="light"===o.getAttribute("data-theme")?"dark":"light";o.setAttribute("data-theme",e),localStorage.setItem("theme",e),l(e),a(e)}));new MutationObserver((e=>{a(o.getAttribute("data-theme"))})).observe(document.body,{childList:!0,subtree:!0})}));