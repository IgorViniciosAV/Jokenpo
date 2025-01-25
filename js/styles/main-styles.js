import styleButtons from "./main-static.js";
import botMoveGenerator from "../main-rules.js";
import botGenerate from "../bot-generate.js";

const buttonsAction = document.querySelectorAll('.main__label');
const main = document.querySelector('.main');
const mainBoxBottom = document.querySelector('.main__box-bottom');
const labelMachine = document.querySelector('.label-machine');
const labelMachineBtn = document.querySelector('.label-machine button');
const playersIdentifier = document.querySelectorAll('.player-identifier');
const labelHighlight = document.querySelector('.label-highlight');
const buttonHighlight = document.querySelector('.label-highlight button');
const gameFinalySection = document.querySelector('.game-finaly');
const gameResultText = document.querySelector('.game-result');
const playAgainButton = document.querySelector('.play-again');
const playerScore = document.querySelector('.header__score p');
const transformations = {
    paper: 0,
    scissors: 1,
    rock: 2
};

playerScore.textContent = 0;

let buttonActive = true;

buttonsAction.forEach((buttonAction, index) => {
    buttonAction.addEventListener('click', () => {
        if (buttonActive) {
            main.classList.add('bg-hidden');
            mainBoxBottom.classList.add('hidden');
            labelMachine.classList.add('bot');
            labelMachineBtn.style.background = 'rgba(0, 0, 0, 0.26)'
            playersIdentifier[0].classList.remove('hidden');
            setTimeout(() => {
                playersIdentifier[1].classList.remove('hidden');
            }, 2000);

            //============================================

            const botMove = botGenerate();
            const botMoveFormatted = botMoveFormatter(botMove);
            const gameResult = botMoveGenerator(styleButtons[index].key, botMove);
            buttonActiveEfect(buttonAction, index);
            labelHighlightEfect(index);

            setTimeout(() => {
                labelMachine.classList.remove('bot');
                labelMachine.classList.add('bot-animated');
                labelMachine.style.background = styleButtons[botMoveFormatted].bgColor;
                labelMachine.style.boxShadow = styleButtons[botMoveFormatted].boxShadow;

                labelMachineBtn.style.background = styleButtons[botMoveFormatted].bgUrl;
                labelMachineBtn.style.backgroundColor = 'white'

                gameFinalySection.classList.remove('hidden');


                console.log(gameResult);
                if (gameResult === 'draw') {
                    gameResultText.textContent = 'Empate!';

                } else if (!gameResult) {
                    gameResultText.textContent = 'You Lose!';
                    if (playerScore.textContent > 0) {
                        playerScore.textContent -= 1;
                        playerScore -= 1;
                    }

                } else {
                    gameResultText.textContent = 'You Win!';
                    playerScore.textContent++;

                }
            }, 1500)
        }
        buttonActive = false;
    });
});

playAgainButton.addEventListener('click', () => {
    location.reload();
});

function labelHighlightEfect(index) {
    labelHighlight.style.background = styleButtons[index].bgColor;
    labelHighlight.style.boxShadow = styleButtons[index].boxShadow;
    buttonHighlight.style.background = styleButtons[index].bgUrl;
    buttonHighlight.style.backgroundColor = 'white';
}

function buttonActiveEfect(buttonAction, index) {
    for (let i = 0; i <= 2; i++) {
        if (index == i) {
            buttonAction.classList.add('main__label-pressed');
            buttonAction.classList.remove(`label-${i}`);

            setTimeout(() => {
                buttonAction.classList.remove('main__label-pressed');
                buttonAction.classList.add(`label-${i}`);
            }, 350)
        }
    }
}

function botMoveFormatter(botMove) {
    if (transformations.hasOwnProperty(botMove)) {
        return transformations[botMove];
    }
}









function desativar() {
    main.classList.remove('bg-hidden');
    mainBoxBottom.classList.remove('hidden');
    labelMachine.classList.remove('bot');
    playersIdentifier.forEach((playerIdentifier) => {
        playerIdentifier.classList.add('hidden');
    });
}

