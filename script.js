document.addEventListener("DOMContentLoaded", () => {
    const searchBox = document.querySelector(".search-box");
    const searchInput = document.getElementById("search-input");

    
    searchInput.style.display = "none";

    
    searchBox.addEventListener("click", () => {
        if (searchInput.style.display === "none" || searchInput.style.display === "") {
            searchInput.style.display = "block";
            searchInput.focus();
        } else {
            searchInput.style.display = "none";
            searchInput.value = ""; 
        }
    });

   
    searchInput.addEventListener("keypress", (e) => {
        if (e.key === "Enter") {
            const query = searchInput.value.trim();
            if (query !== "") {
                const encontrado = window.find(query, false, false, true);
                if (!encontrado) {
                    alert(`No se encontró ningún resultado para: "${query}"`);
                }
            }
        }
    });
});


document.querySelectorAll('.menu-temas .tema-boton').forEach((boton) => {
    boton.addEventListener('click', () => {
        const item = boton.closest('.tema-item');
        const estabaAbierto = item.classList.contains('abierto');

        document.querySelectorAll('.menu-temas .tema-item.abierto').forEach((otro) => {
            otro.classList.remove('abierto');
            otro.querySelector('.tema-boton').setAttribute('aria-expanded', 'false');
        });

        if (!estabaAbierto) {
            item.classList.add('abierto');
            boton.setAttribute('aria-expanded', 'true');
        }
    });
});
