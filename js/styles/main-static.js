const labelButtons = document.querySelectorAll('.main__label button');
const styleButtons = [
    {
        key: 'paper',
        order: '0',
        bgUrl: 'url(./images/icon-paper.svg) no-repeat center',
        bgColor: 'linear-gradient(180deg, var(--paper-gradient))',
        boxShadow: '0px 5px hsl(230, 54%, 47%)',
    },
    {
        key: 'scissors',
        order: '1',
        bgUrl: 'url(./images/icon-scissors.svg) no-repeat center',
        bgColor: 'linear-gradient(180deg, var(--scissors-gradient))',
        boxShadow: '0px 5px hsl(39, 97%, 38%)',
    },
    {
        key: 'rock',
        order: '2',
        bgUrl: 'url(./images/icon-rock.svg) no-repeat center',
        bgColor: 'linear-gradient(180deg, var(--rock-gradient))',
        boxShadow: '0px 5px hsl(349, 65%, 38%)',
    },
];

labelButtons.forEach((labelButton, index) => {
    labelButton.style.background = styleButtons[index].bgUrl;
    labelButton.style.backgroundColor = 'white';
    
});

export default styleButtons;