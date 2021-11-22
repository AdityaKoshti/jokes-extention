fetch('https://icanhazdadjoke.com/slack')
  .then(data => data.json())
  .then(joke => {
    const jokeText = joke.attachments[0].text;
    const jokeElement = document.getElementById('jokeElement');

    jokeElement.innerHTML = "Jokes: "+jokeText;
  })
