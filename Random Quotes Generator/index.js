var quotes = [
    {
        quote: 'If you hear a voice within you say you cannot paint, then by all means paint and that voice will be silenced.',
        author: 'Vincent Van Gogh'
    },
    {
        quote: 'In the long run, the sharpest weapon of all is a kind and gentle spirit.',
        author: 'Anne Frank'
    },
    {
        quote: 'It is the time you have wasted for your rose that makes your rose so important.',
        author: 'Antoine de Saint-Exupéry'
    },
    {
        quote: 'And now here is my secret, a very simple secret: It is only with the heart that one can see rightly; what is essential is invisible to the eye.',
        author: 'Antoine de Saint-Exupéry'
    },
    {
        quote: 'My dear, here we must run as fast as we can, just to stay in place. And if you wish to go anywhere you must run twice as fast as that.',
        author: 'Lewis Carroll'
    },
    {
        quote: 'If everybody minded their own business, the world would go around a great deal faster than it does.',
        author: 'Lewis Carroll'
    },
    {
        quote: 'You must be filled with expectancy. You must be awash in hope. You must wonder who will love you, whom you will love next.',
        author: 'Kate DiCamillo'
    },
    {
        quote: 'Be clearly aware of the stars and infinity on high. Then life seems almost enchanted after all.',
        author: 'Vincent Van Gogh'
    },
];

document.querySelector("button").addEventListener("click", changeQuote);
function changeQuote(){
  const i = randomQuote();
  document.querySelector("q").innerHTML = quotes[i].quote;
  document.querySelector("span").innerHTML = quotes[i].author;
}

function randomQuote(){
  return Math.round(Math.random()*7);
}
