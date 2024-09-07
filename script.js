const quoteContainer = document.getElementById('quote-container');
const quoteText = document.getElementById('quote');
const authorText = document.getElementById('author');
const XBtn = document.getElementById('X');
const newQuoteBtn = document.getElementById('new-quote');


// Show new Quote
function newQuote() {
    // Pick a random quote from apiQuotes array
    const quote = localQuotes[Math.floor(Math.random() * localQuotes.length)];
    // Check if the author field is blank and replace it with 'Unknown'
    if(!quote.author) {
        authorText.textContent = 'Unknown'
    } else {
        authorText.textContent = quote.author; 
    }

    // Check quote length to Determine styling 
    if(quote.text.length > 120) {
        quoteText.classList.add('long-quote')
    } else {
        quoteText.classList.remove('long-quote')
    }

    quoteText.textContent = quote.text;
}

// Tweet Quote
function tweetQuote() {
    const twitterUrl = `https://twitter.com/intent/tweet?text=${quoteText.textContent} - ${authorText.textContent}`;
    window.open(twitterUrl,'_blank');
}


// Event Listeners
newQuoteBtn.addEventListener('click', newQuote);
XBtn.addEventListener('click', tweetQuote);


newQuote();