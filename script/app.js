

// Get the issues from api
async function getIssues() {

    const response = await fetch("https://phi-lab-server.vercel.app/api/v1/lab/issues");
    const data = await response.json();
    const apiData = data.data;

    passIssues(apiData);

    document.getElementById("all-tab").addEventListener('load', () =>{
        passIssues(apiData);
    })

    document.getElementById("all-tab").addEventListener('click', () =>{
        passIssues(apiData);
    })

    document.getElementById("open-tab").addEventListener('click', () =>{
       const openList = apiData.filter(issue => issue.status === "open");
        passIssues(openList);
    })

    document.getElementById("close-tab").addEventListener('click', () =>{
       const closeList = apiData.filter(issue => issue.status === "closed");
        passIssues(closeList);
    })
}

// initial Loading
getIssues();


//display issues on card
const passIssues = (issues) => {

    const cardContainer = document.getElementById("cards");
    cardContainer.innerHTML = "";
    // icon pack for labels
    const helpLogo = `<i class="fa-brands fa-hire-a-helper"></i>`;
    const bugLogo = `<i class="fa-solid fa-bug"></i>`;
    const documentsLogo = `<i class="fa-brands fa-readme"></i>`;
    const gooDuseLogo = `<i class="fa-solid fa-clover"></i>`;
    const enhancementLogo = `<i class="fa-solid fa-wand-magic-sparkles"></i>`;


    issues.forEach(issue => {

        const newIssue = document.createElement("div");
        newIssue.className = `w-[80%] md:w-[270px] mx-auto bg-white rounded-sm shadow-md border-t-4 ${(issue.status) == 'open' ? "border-green-600 " : "border-purple-700"}  md:ml-5 my-5`;
        cardContainer.appendChild(newIssue);
        const formattedDate = new Date(issue.createdAt).toLocaleDateString("en-US");
        const priority = issue.priority;




        newIssue.innerHTML = `
            <div class="border-b-2 h-[180px] border-gray-300">
                <div class="w-[85%] mx-auto my-4 flex flex-row justify-between items-center">
                    <div>
                        <img class="w-6 h-6" src="${(issue.status) == 'open' ? './assets/active.png' : './assets/closed.png'}" alt="">
                    </div>
                    <div class="px-4 ${priority == 'high' ? "text-red-700 bg-red-400/20" :
                priority == 'low' ? "text-gray-700 bg-gray-400/20" :
                    "text-yellow-700 bg-yellow-400/20"} font-semibold rounded-xl">
                        <p>${priority.toUpperCase()}</p>
                    </div>
                </div>
                <div class="w-[85%] mx-auto flex flex-col justify-center gap-1">
                    <h1 class="text-black text-[15px] font-semibold text-left">${(issue.title || "").trimStart()}
                    </h1>
                    <p class="line-clamp-2 text-black/50 text-[12px] text-justify">${issue.description}</p>

                </div>
                <div class="labels-container w-[85%]  mx-auto  gap-1">
                </div>
            </div>
            <div class="w-[85%] mx-auto my-2 flex flex-col justify-center items-left ">
                <p class="text-[13px] text-black/50">${"#" + (issue.id) + " by " + (issue.author.replaceAll("_", " "))}</p>
                <p class="text-[13px] text-black/50">${formattedDate}</p>
            </div>
        `
        // labels
        const labelBox = newIssue.querySelector(".labels-container");
        const labels = issue.labels;

        labels.forEach(label => {

            const displayLabel = document.createElement("h4");

            const classLists =
                label === "bug" ? "inline-block flex flex-wrap gap-1 text-[12px] px-1 mr-[2PX] rounded-xl border-2 border-yellow-300 bg-yellow-300/20 text-yellow-400" :
                    label === "enhancement" ? "inline-block flex flex-wrap gap-1 text-[12px] px-1 mb-[2PX] rounded-xl border-2 border-purple-300 bg-purple-300/20 text-purple-400" :
                        label === "good first issue" ? "inline-block flex flex-wrap gap-1 text-[12px] px-1 mb-[2PX] rounded-xl border-2 border-green-300 bg-green-300/20 text-green-400" :
                            label === "documentation" ? "inline-block flex flex-wrap gap-1 text-[12px] px-1 mb-[2PX] rounded-xl border-2 border-pink-300 bg-pink-300/20 text-pink-400" :
                                "inline-block flex flex-wrap gap-1 text-[12px] px-1 mb-[2PX] rounded-xl border-2 border-red-300 bg-red-300/20 text-red-400";

            displayLabel.className = classLists;

            const icon =
                label === "bug" ? bugLogo :
                    label === "enhancement" ? enhancementLogo :
                        label === "good first issue" ? gooDuseLogo :
                            label === "documentation" ? documentsLogo :
                                helpLogo;

            displayLabel.innerHTML = `${icon} ${label.toUpperCase()}`;

            labelBox.appendChild(displayLabel);

            const tabCount = document.getElementById("tab-count");
            const parent = document.getElementById("cards");
            const totalCount = parent.children.length;
            tabCount.textContent = totalCount;
        });


    });

}

