let mainTitle = document.getElementById("main_title");
let titleInput = document.getElementById("title_input");
let noun = document.getElementById("noun");
let verb = document.getElementById("verb");
let adjective = document.getElementById("adjective");
let submitButton = document.getElementById("submit_button");
let formContainer = document.querySelector(".form_container");
let storyResult = document.getElementById("story_result");

titleInput.addEventListener("change", event => {
    mainTitle.innerHTML = event.target.value;
});

noun.addEventListener("change", event => {
    noun.innerHTML = event.target.value;
});

verb.addEventListener("change", event => {
    verb.innerHTML = event.target.value;
});

adjective.addEventListener("change", event => {
    adjective.innerHTML = event.target.value;
});

submitButton.addEventListener("click", event => {
    event.preventDefault();
    if (titleInput.value == "" || noun.value == "" ||
    verb.value == "" || adjective.value == "")
    {
        alert("Please fill in all fields");
    }
    else
    {
        formContainer.style.display = "none";
        storyResult.innerHTML = "Last night I ate a " + noun.value + ", and today I just had to " + verb.value + ". What a " + adjective.value + " day!";
    }
});