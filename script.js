const words = document.getElementById("buttons");

words.addEventListener("click", function (event) {
  let textareaValue = document.getElementById("search-word").value;
  let apiUrl =
    "https://api.dictionaryapi.dev/api/v2/entries/en/" + textareaValue;

  fetch(apiUrl)
    .then((response) => response.json())
    .then((data) => {
      console.log(data);

      data.forEach((element) => {
        const meanings = element.meanings[0].definitions[0].definition;
        console.log(meanings);
        document.getElementById("results").innerHTML = "";

        const addition = document.createElement("div");
        addition.id = "add";

        addition.innerHTML = meanings;

        document.getElementById("results").appendChild(addition);

        var input = document.getElementById("search-word");

        // Execute a function when the user presses a key on the keyboard
        input.addEventListener("keypress", function (event) {
          // If the user presses the "Enter" key on the keyboard
          if (event.key === "Enter") {
            // Cancel the default action, if needed
            event.preventDefault();
            // Trigger the button element with a click
            document.getElementById("buttons").click();
          }
        });
      });
    });
});
