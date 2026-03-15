const tabs = document.querySelectorAll(".tab-btn");

tabs.forEach(tab => {
    tab.addEventListener("click", function () {

        tabs.forEach(t => {
            t.classList.remove("bg-blue-800", "text-white");
        });

        this.classList.add("bg-blue-800", "text-white");

    });
});