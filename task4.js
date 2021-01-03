const credits = 23580;
const pricePerDroid = 3000;
const input = prompt('DROID_Quantity');
let message;
let totalPrice;
let amount;

if (input === null) {
    message = 'Отменено пользователем!';
} else {
    totalPrice = pricePerDroid * input;
    amount = credits - totalPrice;
    message = totalPrice > credits 
    ?'Недостаточно средств на счету!' 
    :`Вы купили ${input} дроидов, на счету осталось ${amount} кредитов.`;
}
alert(message);