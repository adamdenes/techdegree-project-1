/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

// For assistance: 
  // Check the "Project Resources" section of the project instructions
  // Reach out in your Slack community - https://treehouse-fsjs-102.slack.com/app_redirect?channel=chit-chat

// creating quotes array with objects ('quote', 'source', 'citation', 'year')

const quotes = [
  {
    quote: 'Spread love everywhere you go. Let no one ever come to you without leaving happier.',
    source: 'Mother Teresa',
    citation: 'blog.hubspot.com',
    tags: 'Advice'
  },
  {
    quote: 'The way to get started is to quit talking and begin doing.',
    source: 'Walt Disney',
    citation: 'blog.hubspot.com',
    tags: 'Motivation'
  },
  {
    quote: 'Your time is limited, so don\'t waste it living someone else\'s life. Don\'t be trapped by dogma – which is living with the results of other people\'s thinking.',
    source: 'Steve Jobs',
    citation: 'brainyquote.com',
    tags: 'Motivation'
  },
  {
    quote: 'If life were predictable it would cease to be life, and be without flavor.',
    source: 'Eleanor Roosevelt',
    citation: 'Goodreads',
    tags: 'Advice'
  },
  {
    quote: 'If you look at what you have in life, you\'ll always have more. If you look at what you don\'t have in life, you\'ll never have enough.',
    source: 'Oprah Winfrey',
    citation: 'Medium',
    tags: 'Life'
  },
  {
    quote: 'If you set your goals ridiculously high and it\'s a failure, you will fail above everyone else\'s success.',
    source: 'James Cameron',
    citation: 'Due',
    tags: 'Life'
  },
  {
    quote: 'Life is what happens when you\'re busy making other plans.',
    source: 'John Lennon',
    citation: 'Quoteinvestigator',
    tags: 'Life',
    year: 1980
  },
  {
    quote: 'Tell me and I forget. Teach me and I remember. Involve me and I learn.',
    source: 'Benjamin Franklin',
    citation: 'Quoteinvestigator',
    tags: 'Learning'
  },
  {
    quote: 'Do not go where the path may lead, go instead where there is no path and leave a trail.',
    source: 'Ralph Waldo Emerson',
    citation: 'Quoteinvestigator',
    tags: 'Adventure',
    year: 1905
  },
  {
    quote: 'Whoever is happy will make others happy too.',
    source: 'Anne Frank',
    citation: 'Pinterest', 
    tags: 'Life',
    year: 1947
  }
];

// get a random quote from the 'quotes' array and return the inner object
function getRandomQuote() {
  let random = Math.floor(Math.random() * quotes.length);
  return quotes[random];
}
// checking code
//console.log(getRandomQuote());

// create an array with 3 random values 
function getRandomColor() {
  // creating an array 
  const colorArr = [];
  // looping through the array to get random color numbers for rgb
  for (let i = 0; i < 3; i++){
     colorArr.push(Math.floor(Math.random() * 255) + 1);
  }
  //console.log(colorArr)
  return colorArr;
}

// printQuote will manifest the object in the browser
function printQuote() {
  // setting the random quote to a variable
  const randomQuoteObject = getRandomQuote();
  // setting a random color number to ta variable
  const color = getRandomColor();
  //console.log(color)
  // creating HTML string
  let myHTML = `
    <span> ${randomQuoteObject.tags} </span>
    <p class="quote"> ${randomQuoteObject.quote} </p>
    <p class="source"> ${randomQuoteObject.source}
      <span class="citation"> ${randomQuoteObject.citation} </span>
      <span class="year"> ${randomQuoteObject.year ? randomQuoteObject.year : ''} </span>
    </p>
    `;

  // selecting the div with the id of quote-box
  const div = document.querySelector('#quote-box');
  // filling the div with the content of myHTML
  div.innerHTML = myHTML;
  // adding random background color upon click
  document.body.style.backgroundColor = `rgb(${color[0]}, ${color[1]}, ${color[2]})`;
}

//  making page auto refresh every 20 seconds
setInterval(printQuote, 20000);
/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
***/

document.getElementById('load-quote').addEventListener("click", printQuote, false);