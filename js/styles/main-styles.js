const buttonsAction = document.querySelectorAll('.main__label');
const main = document.querySelector('.main');
const mainBoxBottom = document.querySelector('.main__box-bottom');
const labelMachine = document.querySelector('.main__box-top > .main__label:nth-child(2)');
const buttonMachine = document.querySelector('.main__box-top > .main__label:nth-child(2) > button');
const imageMachine = document.querySelector('.main__box-top > .main__label:nth-child(2) > button > img');

buttonsAction.forEach((buttonAction) => {
    buttonAction.addEventListener('click', () => {
        main.style.background = 'none';
        mainBoxBottom.classList.add('hidden');
        labelMachine.style.background = 'none';
        labelMachine.style.boxShadow = 'none';
        buttonMachine.style.background = 'hsl(0deg 0% 0% / 3%);';
        buttonMachine.style.boxShadow = 'none';
        imageMachine.style.opacity = '0%';
    });
});