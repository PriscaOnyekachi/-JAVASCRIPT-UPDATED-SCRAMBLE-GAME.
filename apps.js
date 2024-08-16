const wordText = document.querySelector('.headword'),
 hintText = document.querySelector('hint, .span1'),
 getTimer = document.querySelector('.b'),
 inputField = document.querySelector('.input'),
 refreshBtn = document.querySelector('.refresh-button'),
 checkBtn = document.querySelector('.check-button');

let checkWord,timer;


const timeLeft = maxTime =>{
    clearInterval(timer);

    timer = setInterval(() => {
        if(maxTime >  0){
            maxTime --;
            return getTimer.innerText = maxTime;

        }else if(maxTime == 0){
            alert(`Your time is up, ${checkWord.toUpperCase()} was the Correct word.`)
        }
        initgame()
        
    },1000);
}


const initgame = () => {
     timeLeft(31);
    let randomobj = words[ Math.floor(Math.random() * words.length)];
    let wordArray = randomobj.word.split('')

    for(let i = wordArray.length; i > 0; i--){
        let j = Math.floor(Math.random() * (i + 1));
        
       [wordArray[i],wordArray[j]] = [wordArray[j],wordArray[i]]

    }
    wordText.innerText = wordArray.join('');
    hintText.innerText = randomobj.hint;
    checkWord = randomobj.word.toLowerCase();
    inputField.value = '';
    inputField.setAttribute('maxlength',checkWord.length);
    console.log(randomobj);
}
initgame()

const correctWord = () => {
    let userWord = inputField.value.toLowerCase()

    if(!userWord){
        alert('Please Enter Word Check.')
    }else if(userWord !== checkWord){
        alert(`Oops!${userWord} is not a correct word.`)
    }else{
        alert(`${userWord.toUpperCase()} is a correct word.`)
        initgame()
    }

}

refreshBtn.addEventListener('click', initgame);
checkBtn.addEventListener('click', correctWord);