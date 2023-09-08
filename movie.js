// For Collapsible button

function toggleCollapsible(buttonId, contentId) {
    const button = document.getElementById(buttonId);
    const content = document.getElementById(contentId);

    button.addEventListener("click", function() {
        content.style.display = content.style.display === "block" ? "none" : "block";
        button.querySelector(".arrow").classList.toggle("down-arrow");
        button.querySelector(".arrow").classList.toggle("up-arrow");

        button.classList.toggle("clicked");
    });
}

// Attach the toggle functionality to each collapsible button
toggleCollapsible("collapsibleButton1", "content1");
toggleCollapsible("collapsibleButton2", "content2");
toggleCollapsible("collapsibleButton3", "content3");