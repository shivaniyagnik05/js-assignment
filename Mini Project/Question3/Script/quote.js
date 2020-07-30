console.log("Quote");

const arrayOfQuotes = [
    {
        'author':'Mark Twain',
        'quote' :'To success in life,you need two things:ignorance and confidence.'
    },
    {
        'author':'Michael Jordan',
        'quote':'The key to success is faliure'
    },
    {
        'author':'Ben Sweetland',
        'quote':'Success is a journey not a destination.'
    },
    {
        'author': 'Nelson Mandela', 
        'quote': 'Resentment is like drinking poison and waiting for your enemies to die.'
   },
   {
       'author': 'Elbert Hubbard', 
       'quote': 'Do not take life too seriously. You will not get out alive.'
   },
    
];

function generateQuote(){
    const random = Number.parseInt(Math.random()*arrayOfQuotes.length + 1);
    document.querySelector('#quoteOutput').textContent=`\"${arrayOfQuotes[random].quote}\"`;
    document.querySelector('#authorOutput').textContent=`\-${arrayOfQuotes[random].author}`;
}