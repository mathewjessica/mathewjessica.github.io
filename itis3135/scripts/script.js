// script.js

// Load JSON files and dynamically create header and footer
document.addEventListener("DOMContentLoaded", () => {
    // Fetch and populate the header
    fetch("../data/header.json")
        .then((response) => response.json())
        .then((headerData) => {
            const headerElement = document.querySelector("header");
            const h1 = document.createElement("h1");
            h1.textContent = headerData.h1;
            headerElement.appendChild(h1);
            const nav = document.createElement("nav");
            const ul = document.createElement("ul");

            headerData.navlinks.forEach((link) => {
                const li = document.createElement("li");
                const divider = document.createElement("span");
                const a = document.createElement("a");
                a.textContent = link.name;
                a.href = link.url;
                divider.textContent = " ||";
                li.appendChild(a);
                li.appendChild(divider);
                ul.appendChild(li);

            });

            nav.appendChild(ul);
            headerElement.appendChild(nav);
        })
        .catch((error) => console.error("Error loading header.json:", error));

    // Fetch and populate the footer
    fetch("../data/footer.json")
        .then((response) => response.json())
        .then((footerLinks) => {
            const footerElement = document.querySelector("footer");
            const ul = document.createElement("ul");
            const nav = document.createElement("nav");

            
            footerLinks.navlinks.forEach((link) => {
                const li = document.createElement("li");
                const a = document.createElement("a");
                const divider = document.createElement("span");
                divider.textContent = " ||";
                a.textContent = link.name;
                a.href = link.url;
                a.target = "_blank"; // Open footer links in a new tab
                li.appendChild(a);
                li.appendChild(divider);
                ul.appendChild(li);
            });
            nav.appendChild(ul);
            footerElement.appendChild(nav);
            const p = document.createElement("p");      
            p.innerHTML = `Page Built by <a href="../jmdesigns.com/">J.M. Designs</a> &copy; 2024,
    <em>
        Certified in <a href= "https://www.freecodecamp.org/certification/jessicamathew/responsive-web-design" target="_new">Responsive Web Design</a>
    </em> 
    , 
    <em>
        Certified in <a href= "https://www.freecodecamp.org/certification/jessicamathew/javascript-algorithms-and-data-structures-v8" target="_new">JS</a>
    </em>
`; 
            footerElement.appendChild(p);
        })

        .catch((error) => console.error("Error loading footer.json:", error));
});
