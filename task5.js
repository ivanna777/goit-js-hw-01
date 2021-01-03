let deliveryCountry = prompt('Delivery country').toLowerCase();
let deliveryCost;
const China = 'китай';
const Chili = 'чили';
const Australia = 'австралия';
const India = 'индия';
const Yamajka = 'ямайка';

switch (deliveryCountry) {
    case China:
    deliveryCost = 100;
    break;

    case Chili:
    deliveryCost = 250;
    break;

    case Australia:
    deliveryCost = 170;
    break;

    case India:
    deliveryCost = 80;
    break;

    case Yamajka:
    deliveryCost = 120;
    break;

    default:
        alert('В вашей стране доставка не доступна');
}

alert(`Доставка в ${deliveryCountry} будет стоить ${deliveryCost} кредитов`);