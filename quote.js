const data = [
    {
    "quote": "The only limit to our realization of tomorrow is our doubts of today.",
    "author": "Franklin D. Roosevelt"
  },
  {
    "quote": "Do what you can, with what you have, where you are.",
    "author": "Theodore Roosevelt"
  },
  {
    "quote": "Success is not final, failure is not fatal: it is the courage to continue that counts.",
    "author": "Winston Churchill"
  },
  {
    "quote": "In the middle of every difficulty lies opportunity.",
    "author": "Albert Einstein"
  },
]


// const quote = document.querySelector(".quote");
// const names = document.querySelector(".name"); 
// const newQuote = document.querySelector(".newQuote");


// newQuote.addEventListener("click",()=>{
//   const randomQuote = Math.floor(Math.random() * data.length);

//   const dataQuote = data[randomQuote];

//   quote.innerText = dataQuote.quote;
//   names.innerText = dataQuote.author;
// })

// 

// const data = [
//   {
//     "quote": "The only limit to our realization of tomorrow is our doubts of today.",
//     "author": "Franklin D. Roosevelt"
//   },
//   {
//     "quote": "Do what you can, with what you have, where you are.",
//     "author": "Theodore Roosevelt"
//   },
//   {
//     "quote": "Success is not final, failure is not fatal: it is the courage to continue that counts.",
//     "author": "Winston Churchill"
//   },
//   {
//     "quote": "In the middle of every difficulty lies opportunity.",
//     "author": "Albert Einstein"
//   },
//   {
//     "quote": "Happiness depends upon ourselves.",
//     "author": "Aristotle"
//   },
//   {
//     "quote": "Life is what happens when you're busy making other plans.",
//     "author": "John Lennon"
//   },
//   {
//     "quote": "It is never too late to be what you might have been.",
//     "author": "George Eliot"
//   },
//   {
//     "quote": "You must be the change you wish to see in the world.",
//     "author": "Mahatma Gandhi"
//   },
//   {
//     "quote": "Opportunities don't happen. You create them.",
//     "author": "Chris Grosser"
//   },
//   {
//     "quote": "Act as if what you do makes a difference. It does.",
//     "author": "William James"
//   }
// ]


const newQuote = document.querySelector(".newQuote");
const quote = document.querySelector(".quote");
const names = document.querySelector(".name"); 


newQuote.addEventListener("click",()=>{
  const randomQuote = Math.floor(Math.random() * data.length);

  const dataQuote = data[randomQuote];

  quote.innerText = dataQuote.quote;
  names.innerText = dataQuote.author;
})