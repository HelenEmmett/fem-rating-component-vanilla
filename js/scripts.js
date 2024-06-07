const rating = document.getElementById("rating-state");
const thankyou = document.getElementById("thankyou-state");
const ratingText = document.getElementById("rating-score");
const button = document.querySelector(".btn");

function submitForm() {
    const ratingValue = document.querySelector('input[name="rating"]:checked').value;
    ratingText.innerText = `You selected ${ratingValue} out of 5`;
    rating.style.display = "none";
    thankyou.style.display = "flex";
    thankyou.style.visibility = "visible";
}

button.addEventListener("click", submitForm);