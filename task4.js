const credits = 23580;
const pricePerDroid = 3000;
let message = 'Отменено пользователем!';

let quantity = prompt('Какое количество дроидов Ви желаете купить?');

let totalPrice = quantity*pricePerDroid;

if(quantity === null) {
    alert (message);
} else {
    alert (totalPrice);
}

let amount = credits - totalPrice;

const message2 = totalPrice > credits 
   ? 'Недостаточно средств на счету!'
   :`Вы купили ${quantity} дроидов, на счету осталось ${amount} кредитов.`;

if(quantity === null) {
    alert (0);
} else {
    alert (message2);
}