

//Switch case 
const dayOfweek = 6;

switch (dayOfweek) {
    case 1:
        console.log("Понедельник");
        break;
    case 2:
        console.log("Вторник");
        break;
    case 3:
        console.log("Среда");
        break;
    case 4:
        console.log("Четверг");
        break;
    case 5:
        console.log("Пятница"); 
        break; 
    case 6:
        console.log("Суббота");
        break;
    case 7:
        console.log("Воскресенье");
        break;
    default:
        console.log("Введите день недели");
}

const month = 6;
switch (month) {
    case 1:
        console.log("Январь");
        break;
    case 2:
        console.log("Февраль");
        break;    
    case 3:
        console.log("Март");
        break;
    case 4:
        console.log("Апрель");
        break;
    case 5:
        console.log("Май");
        break;
    case 6:
        console.log("Июнь");
        break;       
    case 7:
        console.log("Июль");
        break;
        default:
            console.log("Нет такого месяца");

}

// Тернарный оператор 

const isRaining = "Идет дождь"
const decission = isRaining == "Идет дождь"? "Идет дождь":"Сухо";
console.log(decission);

const score = 81;
const result = score > 80?"A": "B"; 
console.log(result);

// Булевая логика 

const hasManey = 1000;
const isHungry = true;
console.log(`${hasManey>=1000 && isHungry &&"Идем в ресторан"}`);

// 

const hasPartyInvitation = dayOfweek == 6;
const isWeekend = true;
console.log(`${hasPartyInvitation && isWeekend && "Мы идем на вечеринку"}`);

// Нулевое слияние

const userName = "IT_spez" 
console.log(userName ?? "Гость");

const userAge = null ?? 18 
console.log(userAge);

// Смешанные задачи 

const grade = "C"
switch (grade) {
  case "A":
  console.log(5);
  break;
case "B":
    console.log(4);
    break;
case "C":
    console.log(3);
    break;
case "D":
    console.log(2);       
    break;
case "F":
    console.log(1);
    break;
    default:
        console.log("Введите оценку");
}

// 2 Задача

const num1 = 1000;
const num2 = 1000 ;
console.log(num1>=num2 ?"Достаточно средств":"Недостаточно средств");

// 3 Задача 

const isMorning = true ;
console.log(isMorning ?"Утро":"Ночь");

// 4 Задача 

const isAdult = true; 
console.log(isAdult ?"Вам разрешено":"Вам запрещено");

// 5 Задача 


const temperature = 3

switch (temperature) {
    case 1:
        console.log("Зима");
        break;
    case 2:
        console.log("Весна");
        break;
    case 3:
        console.log("Лето");
        break;
    case 4:
        console.log("Осень");
        break;
    default:
        console.log("Введите номер времени года");            
}   

// 6 Задача 

const LoggedIn = "Пользователь вошел" ?? "гость" 
console.log(LoggedIn);

// 7 Задача 

const isEvening = true;
const hasGuests = true;
console.log(isEvening&&hasGuests&&"Останусь дома");

// 8 Задача 

const hasPermission = true;
const isPaid = true;
console.log( hasPermission || isPaid ?"Доступ разрешен":"Доступ запрещен")

//  9 Задача 

const userRole = null;
const isAdmin = false;

switch (userRole){
    case "Пользователь":
        console.log(userRole&&!isAdmin&&"Пользователь");
        break;
    case "Модератор":
        console.log(userRole&&!isAdmin&&"Модератор");
        break;
    default:
        console.log(isAdmin?"Администратор":"Войдите в систему");
}

//  10 Задача 


const isMorning1 = true;
const isWeekend1 = true;
console.log(`${isMorning1&&!isWeekend1?"Нужно встовать !":"Можно отдохнуть"}`);


// 11 задача 


const isAllowed = false;
const isExpired = true;
console.log(`${isAllowed&&isExpired ?"Можно":"Нельзя"}`);