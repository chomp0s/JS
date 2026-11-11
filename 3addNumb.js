// массив
let NumbersArray = [];
// функция добавления числа
function addNumber(number){
    NumbersArray.push(number);
    console.log(`Число ${number} добавлено в массив`);
}
// функция анализа
function analyzeNumbers() {
    let positiveCount = 0;
    let negativeCount = 0;
    let zeroCount = 0;
// тяжело пришлось помогать лучшему помошнику ГУГЛЕ :)
    for (let i = 0; i < NumbersArray.length; i++) {
        let currentNumbers = NumbersArray[i];
        
        if (currentNumbers > 0) {
            positiveCount++;
        } else if (currentNumbers < 0) {
            negativeCount++;
        } else if (currentNumbers === 0) {
            zeroCount++;
        }
    }
    // обратная ковычка для чтения ${}
    console.log(`Результат анализа: положительных: ${positiveCount}, отрицательных: ${negativeCount}, нулей: ${zeroCount}`);
}
// Добавляем числа для анализа
addNumber(7);
addNumber(-6);
addNumber(0);
addNumber(-12);
addNumber(0);
addNumber(-146);
analyzeNumbers();
