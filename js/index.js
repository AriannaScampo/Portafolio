//togle en el menu 
document.addEventListener("DOMContentLoaded", () => {
    let menuIcon = document.querySelector("#icono-menu");
    let navbar = document.querySelector(".navbar");

    menuIcon.onclick = () => {
        menuIcon.classList.toggle("fa-xmark");
        navbar.classList.toggle("active");
    };

    // Scroll
    let sections = document.querySelectorAll("section");
    let navLinks = document.querySelectorAll("header nav a");

    window.onscroll = () => {
        sections.forEach(sec => {
            let top = window.scrollY;
            let offset = sec.offsetTop; // Cambié esto de offsetHeight a offsetTop
            let height = sec.offsetHeight;
            let id = sec.getAttribute("id");

            if (top >= offset && top < offset + height) {
                navLinks.forEach(link => {
                    link.classList.remove("active");
                    document.querySelector(`header nav a[href*="${id}"]`).classList.add("active");
                });
            }
        });

        // Sticky navbar
        let header = document.querySelector("header");
        header.classList.toggle("sticky", window.scrollY > 100);
        
        // Quitar toggle, ícono y navbar
        if (navbar.classList.contains("active")) {
            menuIcon.classList.remove("fa-xmark");
            navbar.classList.remove("active");
        }
    };
});

// Scroll
ScrollReveal({ 
    distance: "80px",
    duration: 2000,
    delay:200,
 });

 ScrollReveal().reveal('.inicio-content, h2-sobre', { origin: "top" });
 ScrollReveal().reveal('.inicio-img, .habilidades, .proyecto-porta, .contacto form', { origin: "buttom" });
 ScrollReveal().reveal('.inicio-content h1, .img-sobre-mi', { origin: "left" });
 ScrollReveal().reveal('.inicio-content h3, .sobre-mi-content', { origin: "right" });

//  type js
document.addEventListener("DOMContentLoaded", () => {
    const typed = new Typed (".multiple.text", {
        strings: ["Estudiante de Ingeniería de Software", "Estudiante de Full Stack Developer"],
        typeSpeed: 70,
        backSpeed: 70,
        backDelay: 1000,
        loop: true,
    });
});


