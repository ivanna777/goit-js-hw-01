const ADMIN_PASSWORD = 'jqueryismyjam';
let message;

let password = prompt('Введите пароль');

if (password === ADMIN_PASSWORD) {
    message = 'Добро пожаловать!';
} else if (password === null) {
    message = 'Отменено пользователем!';
} else {
    alert('Доступ запрещен, неверный пароль!');
}

alert (message);