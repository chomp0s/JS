// Функция калькулятора
function calculator(a,b,operator){
    // делаем чтобы читалось только число
    if (typeof a !== 'number' || typeof b !== 'number')
        {
        return "Ошибка: параметры должны быть числами"
    }
    // добавляем === для строгого чтения определённого символа
    if (operator === '+')
        {
        return a + b;
    } else if (operator === '-')
        {
            return a - b;
    } else if (operator === '*') 
        {
        return a * b;
    } else if (operator === '/')
        if (b === 0)
            {
            return "Ошибка: на ноль делить нелья";
        } 
        {
            return a / b;
    } {
        return "Ошибка: неизвестный оператор";
    }
    
}
// Тест
console.log(calculator(5,5, '+'));
console.log(calculator(15,8,'*'));
console.log(calculator(24,7,'-'));
console.log(calculator(10,2,'/'));