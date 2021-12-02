let quotes = [
'Be yourself; everyone else is already taken. –Oscar Wilde',

'I\'m selfish, impatient and a little insecure. I make mistakes, I am out of control and at times hard to handle. But if you can\'t handle me at my worst, then you sure as hell don\'t deserve me at my best. –Marilyn Monroe',

'Two things are infinite: the universe and human stupidity; and I\'m not sure about the universe. –Albert Einstein',

'Be who you are and say what you feel, because those who mind don\'t matter, and those who matter don\'t mind. –Bernard M. Baruch',

'You know you\'re in love when you can\'t fall asleep because reality is finally better than your dreams. –Dr. Seuss',

'In three words I can sum up everything I\'ve learned about life: it goes on. –Robert Frost',

'If you tell the truth, you don\'t have to remember anything. –Mark Twain',

'The greatest glory in living lies not in never falling, but in rising every time we fall. –Nelson Mandela',

'The way to get started is to quit talking and begin doing. –Walt Disney',

'If life were predictable it would cease to be life, and be without flavor. –Eleanor Roosevelt'
];



document.querySelector('[data-generate-button]').addEventListener('click', () => {

let randomQuote = Math.floor(Math.random() * quotes.length);
const div = document.createElement('div');
const p = document.createElement('p');
const span = document.createElement('span');

let name = quotes[randomQuote].split('–'); 

let rndArry = ['#ffffea', '#ffeaea', '#f4d5ff', '#fff4d5', '#eaeaff'];

const rndColor = Math.floor(Math.random() * rndArry.length)		

div.classList.add('wrapper-child');

p.style.fontFamily = 'Gwendolyn'
p.style.fontSize = '5vw'
span.style.fontSize= '4vw'
p.textContent = name[0];
span.textContent = name[1]

div.appendChild(p);
div.appendChild(span);

document.querySelector('.wrapper').appendChild(div);

})
