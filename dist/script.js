const shareBtn = document.getElementById("share");
const shareBox = document.getElementById("share-box");


shareBtn.addEventListener("click", () => {
    if (shareBox.style.display === "flex") {
        shareBox.style.display = "none";
        
    } else {
        shareBox.style.display = "flex";
        shareBox.classList.add("fade-in");
    }
});