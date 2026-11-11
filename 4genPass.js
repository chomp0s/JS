// Добавляем строку со всеми возможными символами
const charset = ["abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_+"];
// Создаём функцию генерирования пароля
function generatePassword (length){
    let password = "";

for (let i = 0; i < length; i++) {
    let randomIndex = Math.floor (Math.random() * charset.length);
    password += charset[randomIndex];
}
return password;
}
//Тестируем
console.log(generatePassword(4));
console.log(generatePassword(128));
console.log(generatePassword(256));