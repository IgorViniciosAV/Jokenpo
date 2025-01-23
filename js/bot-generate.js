function botGenerate() {
    const options = ['rock', 'paper', 'scissors'];
    const index = (Math.random() * 2).toFixed(0);

    return options[index];
}

export default botGenerate;