const ruleSection = document.querySelector('.rules-section');
const buttonCloseRules = document.querySelector('.rule__button-close');
const buttonOpenRules = document.querySelector('.button__rules');

buttonOpenRules.addEventListener('click', () => {
    ruleSection.classList.remove('hidden');
});

buttonCloseRules.addEventListener('click', () => {
    ruleSection.classList.add('hidden');
});
