// список возможных ходов
const choices = ['rock', 'paper', 'scissors'];

// Функция для хода игрока и компьютера
function playGame(playerChoice){
    // Выбор компьютера
    let randomIndex = Math.floor(Math.random() * choices.length);
    let computerChoice = choices[randomIndex];
    
    console.log(`Ты выбрал: ${playerChoice} | Компьютер выбрал: ${computerChoice}`);
// Проверка на ничью
if (playerChoice === computerChoice) {
    return "Ничья";
}
// Проверка на победу
else if (
    (playerChoice === 'rock' && computerChoice === 'scissors') ||
    (playerChoice === 'scissors' && computerChoice === 'paper') ||
    (playerChoice === 'paper' && computerChoice === 'rock')
){
    return "Ты выйграл"
}
// Если поражение
else {
    return "Поражение";
    }
}

//Тест
console.log(playGame('rock'));
console.log(playGame('scissors'));
console.log(playGame('paper'));