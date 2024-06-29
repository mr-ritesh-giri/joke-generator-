document.addEventListener("DOMContentLoaded", function () {
  const button = document.getElementById("getJokeButton");
  const jokeElement = document.getElementById("jokeText");
  const categoryInput = document.getElementById("categoryInput");

  button.addEventListener("click", getJoke);

  async function getJoke() {
    let jokeResult;
    const category = categoryInput.value.toLowerCase();
    let jokeFound = false;

    while (!jokeFound) {
      const response = await fetch(
        "https://official-joke-api.appspot.com/jokes/random"
      );

      jokeResult = await response.json();
      console.log(jokeResult);

      const jokeType = jokeResult.type.toLowerCase();

      if (jokeType === category) {
        jokeFound = true;
      }
    }

    jokeElement.textContent = `Setup: ${jokeResult.setup} Punchline: ${jokeResult.punchline}`;
  }
});
