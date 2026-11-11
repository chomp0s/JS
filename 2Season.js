function getSeason(month, temperature){
// проверка на тип данных
if (typeof month !== 'number' || typeof temperature !== 'number'){
    return "Неверный тип данных";
    }
    // проверка диапазона
    if (month < 1 || month >= 12) {
        return "Ошибка: такого месяца нет";
    }
    // Зима
    if (month === 12 || month === 1 || month === 2 && temperature <= 5) {
        return "Зима";
    }
    // Весна
    if (month >= 3 && month  <=5 && temperature < 20 ) {
        return "Весна";
    }
    // Лето
    if (month >= 6 && month <=8 && temperature > 20) {
        return "Лето";
    }
    // Осень
    if ( month >=9 && month <=11 && temperature >= 5 && temperature <= 20) {
        return "Осень"
    }
    else {
        return "Несоответсвие сезона"
    }
}

console.log(getSeason(1, -5));
console.log(getSeason(5, 14));
//Проверка на ошибки
console.log(getSeason(15, 25));
console.log(getSeason(12, 10));
console.log(getSeason("Осень", 18));