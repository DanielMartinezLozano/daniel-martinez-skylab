let artistName = document.getElementById('artist');
let artistImage = document.getElementById('artist__image');
let button1 = document.getElementById('butons_answer1');
let button2 = document.getElementById('butons_answer2');
let button3 = document.getElementById('butons_answer3');
let button4 = document.getElementById('butons_answer4');
let timerBox = document.getElementById('timer');
let wrongAnswers = ['Paranoid', 'Master of Puppets', 'Ace of Spades', 'Crazy Train', 'The Number of the Beast', 'Highway Star', 'Highway to Hell', 'Cowboys from Hell', 'Rainbow in the Dark', 'Running with the Devil', '2 Minutes to Midnight', 'Bark at the Moon', 'Roots Bloody Roots', 'Cemetery Gates', 'Fear of the Dark', 'Whiplash', 'Symphony of Destruction']
let buttonArray = [button1, button2, button3, button4];
let randomArtistsArray = [];
let randomButtons = [];
let time = 10;
let index = 0;

(async function spoty() {
    await store.getSpotifyData();
    for (let i = 0; i < itemArray.length; i++) {
        artistArray.push([
            itemArray[i].track.artists[0].name,
            itemArray[i].track.name,
            itemArray[i].track.album.images[1].url
        ]);
    }
    console.log(artistArray);
})();

function randomFour (arr) {
    while(arr.length < 4){
        var r = Math.floor(Math.random() * 4);
        if(arr.indexOf(r) === -1) arr.push(r);
    }
}

function randomArtists (arr) {
    while(arr.length < 10){
        var r = Math.floor(Math.random() * 27) + 1;
        if(arr.indexOf(r) === -1) arr.push(r);
    }
}


randomArtists (randomArtistsArray);


function updateDisplay() {
    artistName.innerHTML = artistArray[randomArtistsArray[index]][0];
    artistName.className = artistArray[randomArtistsArray[index]][1];
    artistImage.src = artistArray[randomArtistsArray[index]][2];
    randomButtons = [];
    randomFour (randomButtons);
    buttonArray[randomButtons[0]].innerHTML = artistArray[randomArtistsArray[index]][1];
    for (let i = 1; i < randomButtons.length; i++) {
        buttonArray[randomButtons[i]].innerHTML = wrongAnswers[Math.floor(Math.random() * 17)];
    }
    time = 10;
}

const buttons = document.querySelector('.section__butons');
buttons.addEventListener('click', (event) => {

    if (event.target.innerHTML === artistName.className) {
        console.log('correcto!')
        index ++;
        updateDisplay();
    } else {
        console.log('Fail!')
        index ++;
        updateDisplay();
    }

});



let timer = setInterval (function () {
    time --;
    timerBox.innerHTML = `time: ${time}`;

    if (time === 0) {
        index ++;
        updateDisplay();
    }

}, 1000); 