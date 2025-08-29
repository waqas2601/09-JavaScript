const quote = document.getElementById("quote");
const author = document.getElementById("author");
const newQuoteBtn = document.getElementById("new-quote");
const tweetQuoteBtn = document.getElementById("tweet-quote");

async function getQuote() {
  try {
    const response = await fetch("https://dummyjson.com/quotes/random");
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    console.log(data);
    displayQuote(data);
  } catch (error) {
    console.error(error);
  }
}

function displayQuote(data) {
  quote.textContent = data.quote;
  author.textContent = `- ${data.author}`;
}

tweetQuoteBtn.addEventListener("click", () => {
  const tweetUrl = `https://twitter.com/intent/tweet?text=${quote.textContent} ${author.textContent}`;
  window.open(tweetUrl, "_blank");
});

newQuoteBtn.addEventListener("click", getQuote);


// getQuote();
