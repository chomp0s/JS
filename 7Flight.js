let flights = []

// Функция добавления рейса
function addFlight(flightNumber, destination, departureTime, capacity) {
    let newFlight = {
        flightNumber: flightNumber,
        destination: destination,
        departureTime: departureTime,
        capacity: capacity,
        status: "Active",
        passengers: []
    }
    flights.push(newFlight)

    console.log(`Рейс ${flightNumber} добавлен`);
}

// Функция отмена рейса
function cancelFlight(flightNumber) {
    for (let i= 0; i < flights.length; i++) {
       if (flights[i].flightNumber === flightNumber) {
            
            flights[i].status = "Cancelled";

            console.log(`Рейс ${flightNumber} отменен.`);

            return; 
        }
    }
    
    console.log(`Рейс ${flightNumber} не найден.`);      
    }

    // Функция Регистрации
function registerPassenger(flightNumber, passengerName) {
    for (let i = 0; i < flights.length; i++) {
        if (flights[i].flightNumber === flightNumber) {
            
            
            if (flights[i].status === "Cancelled") {

                console.log(`Ошибка: Рейс ${flightNumber} отменен.`);

                return;
            }
            
            
            if (flights[i].passengers.length >= flights[i].capacity) {

                console.log(`Ошибка: На рейсе ${flightNumber} нет мест.`);

                return;
            }
            
            flights[i].passengers.push(passengerName);

            console.log(`Пассажир ${passengerName} добавлен на рейс ${flightNumber}.`);

            return;
        }
    }
    console.log(`Ошибка: Рейс ${flightNumber} не найден.`);
}

// Функция поиска рейса
function findFlightByNumber(flightNumber) {
    for (let i = 0; i < flights.length; i++) {
        if (flights[i].flightNumber === flightNumber) {
            console.log(`данные рейса ${flightNumber}`);
            console.log(`Куда: ${flights[i].destination}`);
            console.log(`Время: ${flights[i].departureTime}`);
            console.log(`Мест: ${flights[i].capacity}, Занято: ${flights[i].passengers.length}`);
            console.log(`Статус: ${flights[i].status}`);
            return;
        }
    }
    console.log("Рейс не найден.");
}

// Функция список всех рейсов
function showAllFlights() {
    if (flights.length === 0) {

        console.log("Рейсов пока нет.");

        return;
    }
    
    console.log(" Список рейсов");
    for (let i = 0; i < flights.length; i++) {

        console.log(`${flights[i].flightNumber} в ${flights[i].destination}, вылет: ${flights[i].departureTime}, статус: ${flights[i].status}`);
    }
}

// Функция вывод пассажиров
function showPassenger(flightNumber) {
    for (let i = 0; i < flights.length; i++) {
        if (flights[i].flightNumber === flightNumber) {
            console.log(`Пассажиры рейса ${flightNumber}`)

            if (flights[i].passengers.length === 0){
                console.log ("Нет пассажиров");
            } else {
                for (let p = 0; p < flights[p].passengers.length; p++) {
                    console.log(`${flights[p].passengers[p]}`);
                }
            }
            return
        }
    }
    console.log("Рейс не найден");
}

//Тест
addFlight("123", "Москва", "12:00", 35);
addFlight("456", "Нью-Йорк", "15:30", 30);
addFlight("789", "Стокгольм", "01:45", 2)

showAllFlights();

registerPassenger("789", "Иван");
registerPassenger("789", "Мария");
registerPassenger("789", "Петр");
registerPassenger("123", "Джон");
registerPassenger("456", "Александр");

cancelFlight("123");

showPassenger("789");

findFlightByNumber("456")
