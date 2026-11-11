// массив
let numberArray = []
// Функция занесения в массив
function addNumber(number) {
    numberArray.push(number);
    console.log(`Число ${number} занесено в массив`);

}

// Функция считывания среднего значения
function calculateAverage (){
// Проверяем массив чтобы был не пустой
    if (numberArray.length === 0) {
        console.log('Массив пуст');
        return;
    }
// Считаем сумму всех чисел
    let sum = 0;
    for (let i = 0; i < numberArray.length; i++) {
        sum = sum + numberArray[i];        
    }

// Вычисляем среднюю сумму
let average = sum / numberArray.length;

// Вывод результата
console.log(`Среднее значение: ${average.toFixed(2)}`);

}

addNumber(30);
addNumber(24);
addNumber(192);
addNumber(20);

calculateAverage();