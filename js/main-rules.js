function botMoveGenerator(player1, botPlay) {
    player1 = player1.toLowerCase();
    botPlay = botPlay.toLowerCase();
    
    if (player1 === botPlay) {
        return "draw";
    }
    
    if ((player1 === "rock" && botPlay === "scissors") ||
    (player1 === "paper" && botPlay === "rock") ||
    (player1 === "scissors" && botPlay === "paper")) {
        return true;
    } else {
        return false;
    }
}

export default botMoveGenerator;