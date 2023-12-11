document.addEventListener("DOMContentLoaded", function () {
    
    var toggleButton = document.getElementById("toggleButton");
    var additionalContent = document.getElementById("additionalContent");

   
    additionalContent.style.display = "none";

    toggleButton.addEventListener("click", function () {
      
        if (additionalContent.style.display === "none") {
            additionalContent.style.display = "block";
            // Change button text to "Show Less" when showing additional content
            toggleButton.textContent = "Show Less";
        } else {
            additionalContent.style.display = "none";
            // Change button text to "Show More" when hiding additional content
            toggleButton.textContent = "Show More";
        }
    });
});