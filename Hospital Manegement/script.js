document.addEventListener("ContentLoaded", function () {

    const learnMoreButton = document.querySelector(".btn.btn-white");
    if (learnMoreButton) {
        learnMoreButton.addEventListener("click", function (event) {
            event.preventDefault();
            alert("Learn More button clicked!");
            
        });
    }

 
    const form = document.querySelector("form");
    if (form) {
        form.addEventListener("submit", function (event) {
            event.preventDefault();

      
            const nameInput = document.querySelector('input[name="name"]');
            const emailInput = document.querySelector('input[name="email"]');
            const messageTextarea = document.querySelector('textarea[name="message"]');

            const name = nameInput.value;
            const email = emailInput.value;
            const message = messageTextarea.value;


            console.log("Name: " + name);
            console.log("Email: " + email);
            console.log("Message: " + message);

            nameInput.value = "";
            emailInput.value = "";
            messageTextarea.value = "";

            alert("Message sent successfully!");
        });
    }
});

