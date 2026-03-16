const tabs = document.querySelectorAll(".tab-btn");
const loader = document.getElementById("loading-spinner");

tabs.forEach(tab => {
    tab.addEventListener("click", () => {

        if (tab.classList.contains("bg-blue-800")) return;

        tabs.forEach(t => {
            t.classList.remove("bg-blue-800", "text-white");
        });

        tab.classList.add("bg-blue-800", "text-white");


    });
});