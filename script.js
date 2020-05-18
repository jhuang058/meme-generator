const form = document.querySelector('form');
const image = document.querySelector('#imageurl');
const text = document.querySelector('#text');
const textSize = document.querySelector('#textsize');
const meme = document.querySelector('.results');

form.addEventListener('submit', (e) => {
    e.preventDefault();
    const newMeme = generateMeme(
        image.value, 
        text.value, 
        textsize.value);
})

function generateMeme(img, txt, fsize) {
    meme.style.backgroundImage = 'url(' + img + ")" ;
    meme.innerText = txt;
    meme.style.fontSize = fsize +'px';
    return meme;
}