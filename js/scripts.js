const rating = document.getElementById("rating-state");
const thankyou = document.getElementById("thankyou-state");
const ratingText = document.getElementById("rating-score");
const button = document.querySelector(".btn");

function submitForm() {
    
    if (document.querySelector('input[name="rating"]:checked')) {
        const ratingValue = document.querySelector('input[name="rating"]:checked').value;
        ratingText.innerText = `You selected ${ratingValue} out of 5`;
        rating.classList.toggle("flip");
        thankyou.classList.toggle("flip");
    } else {
        document.querySelector(".error").style.display = "block";
    }
}

button.addEventListener("click", submitForm);