const HAND_ROCK = "ROCK";
const HAND_PAPER = "PAPER";
const HAND_SCISSOR = "SCISSOR";
const IMG_ROCK = "./assets/images/rock.png";
const IMG_PAPER = "./assets/images/paper.png";
const IMG_SCISSOR = "./assets/images/scissor.png";
const PLAYER1 = "PLAYER1";
const PLAYER2 = "PLAYER2";

let spinInterval;
let pl1;
let pl2;
let isSpining;

spinBtn.addEventListener('click', spin);
stopBtn.addEventListener('click', stopSpin );

function setPlayer1(val) {
    pl1 = val;
    switch (val) {
        case 1: // rock
            imgPl1.src = IMG_ROCK;
            handPl1.innerHTML = HAND_ROCK;
            break;
        case 2: // paper
            imgPl1.src = IMG_PAPER;
            handPl1.innerHTML = HAND_PAPER;
            break;
        case 3: // scissor
            imgPl1.src = IMG_SCISSOR;
            handPl1.innerHTML = HAND_SCISSOR;
            break;
    }
}

function setPlayer2(val) {
    pl2 = val;
       switch (val) {
        case 1: // rock
            imgPl2.src = IMG_ROCK;
            handPl2.innerHTML = HAND_ROCK;
            break;
        case 2: // paper
            imgPl2.src = IMG_PAPER;
            handPl2.innerHTML = HAND_PAPER;
            break;
        case 3: // scissor
            imgPl2.src = IMG_SCISSOR;
            handPl2.innerHTML = HAND_SCISSOR;
            break;
    }
}

function rand_num(min=1, max=4) {
    return Math.floor(Math.random() * (max - min) + min);
}

function spin() {
    let i = 0;
    isspining = false;
    if(!isSpining){
        spinInterval = setInterval(() => {
            isSpining = true;
            setPlayer1(rand_num());
            setPlayer2(rand_num());
            i++;
        }, 10);
    }

}

function stopSpin() {
    clearInterval(spinInterval);
    isSpining = false;
    winner();
}

function setDashboard(player) {
    if (player === PLAYER1){
        scorePl1.innerHTML = +scorePl1.innerHTML + 1;
        winPl1.innerHTML = +winPl1.innerHTML + 1;
        losePl2.innerHTML = +losePl2.innerHTML + 1;
        cardPl1.className = 'winner';
        cardPl2.className = 'loser';
    } else if (player === PLAYER2) {
        scorePl2.innerHTML = +scorePl2.innerHTML + 1
        winPl2.innerHTML = +winPl2.innerHTML + 1;
        losePl1.innerHTML = +losePl1.innerHTML + 1; ;
        cardPl1.className = 'loser';
        cardPl2.className = 'winner';
    } else {
        drawScore.innerHTML = +drawScore.innerHTML + 1;
        cardPl1.className = 'draw';
        cardPl2.className = 'draw';
    }
    totalMatch.innerHTML = +totalMatch.innerHTML + 1;
}

function winner() {
    let player;
    if(pl1 == pl2){
        player = null;
    } else if(pl1==1 && pl2==3 || pl1==2 && pl2==1 || pl1==3 && pl2==2) {
        player = PLAYER1;
    } else {
        player = PLAYER2;
    }
    setDashboard(player);
}
