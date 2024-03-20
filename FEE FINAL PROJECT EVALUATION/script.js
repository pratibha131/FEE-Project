alert("Ready to take a Flight to create your ideas into reality");

let achieve = document.querySelectorAll(".achievement-total");
achieve.forEach((item) => {
    item.addEventListener("click", () => {
        let count = parseInt(item.innerText);
        count++;
        item.innerText = count + `+`;
        // console.log("button clicked");
        item.style.cursor = "pointer";
    });
});

