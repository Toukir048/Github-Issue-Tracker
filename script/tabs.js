const tabs = document.querySelectorAll(".tab-btn");

tabs.forEach(tab => {
    tab.addEventListener("click", () => {

        tabs.forEach(t => {
            t.classList.remove("bg-blue-800", "text-white");
        });

        tab.classList.add("bg-blue-800", "text-white");

    });
});