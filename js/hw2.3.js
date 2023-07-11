// задание 1
// let password = 'пароль';
// let answerPassword = prompt('Введите пароль');

// if (answerPassword == password) {
// 	console.log('Пароль введен верно');
// } else {
// 	console.log('Пароль введен не верно');
// }

// задание 2
// let c = 0;
// if (c > 0 && c < 10) {
// 	console.log('верно');
// } else {
// 	console.log('неверно');
// }

// задание 3
// let d = 10;
// let e = 76;
// (d > 100 || e > 100) ? console.log('верно') : console.log('неверно');

// задание 4
// let a = '2';
// let b = '3';
// alert(Number(a) + Number(b));
// alert(+(a) + +(b));

// задание 5
// let monthNumber = Number(prompt('Укажите номер месяца, чтобы понять к какому сезону он относится'));


// switch (monthNumber) {
// 	case 1:
// 	case 2:
// 	case 12:
// 		console.log('Зимний сезон');
// 		break;
// 	case 3:
// 	case 4:
// 	case 5:
// 		console.log('Весенний сезон');
// 		break;
// 	case 6:
// 	case 7:
// 	case 8:
// 		console.log('Летний сезон');
// 		break;
// 	case 9:
// 	case 10:
// 	case 11:
// 		console.log('Осенний сезон');
// 		break;

// 	default:
// 		console.log('В году всего 12 месяцев');
// 		break;
// }

// Доп практика
// задание 7
// let x = prompt('введите целое число, проверю четное или нет');
// if (isNaN(x)) {
// 	console.log('это не число');
// } else if (x % 2 == 0) {
// 	console.log('число четное');
// } else {
// 	console.log('число нечетное');
// }

// задание 8
// вариант 1
// let clientOS = 1;
// if (clientOS == 0) {
// 	alert('Установите версию приложения для iOS по ссылке...');
// } else {
// 	alert('Установите версию приложения для Android по ссылке...');
// }

// вариант 2
// let clientOS = 1;
// (clientOS == 1) ? alert('Установите версию приложения для iOS по ссылке...') : alert('Установите версию приложения для Android по ссылке...');

// задание 9
// let clientDeviceYear = 2015;
// if (clientDeviceYear <= 2014) {
// 	if (isIOS) {
// 		console.log('Установите облегченную версию приложения для iOS по ссылке...');
// 	} else {
// 		console.log('Установите облегченную версию приложения для Android по ссылке...');
// 	}
// } else {
// 	if (isIOS) {
// 		console.log('Установите версию приложения для iOS по ссылке...');
// 	}
// 	else {
// 		console.log('Установите версию приложения для Android по ссылке...');
// 	}
// }