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