// задание 1
// function resReturn(a, b) {
// 	if (a <= b) {
// 		return a;
// 	} else {
// 		return b;
// 	}
// }
// console.log(resReturn(8, 3));

// -----------------------------------
// задание 2
// function evenOdd(a) {
// 	if (a % 2 == 0) {
// 		return `Число ${a} четное`;
// 	} else if (a % 2 > 0) {
// 		return `Число ${a} нечетное`;
// 	} else {
// 		return `Это не число, введите пожалуйста число`
// 	}
// }
// console.log(evenOdd(4));

// -----------------------------------
// задание 3
// 3.1
// const square1 = (a) => {
// 	console.log(a ** 2);
// }
// square1(6);

// 3.2
// const square2 = (b) => {
// 	return b ** 2;
// }
// console.log(square2(7));

// -----------------------------------
// задание 4
// function userAge() {
// 	let age = Number(prompt('Сколько тебе лет?'));

// 	if (age < 0) {
// 		alert('Вы ввели неправильное значение');
// 	} else if (age <= 12) {
// 		alert('Привет друг');
// 	} else if (age >= 13) {
// 		alert('Добро пожаловать');
// 	} else {
// 		alert('Введите возраст в цифрах');
// 	}
// }
// userAge();

// -----------------------------------
// задание 5
// вариант 1
// let a = Number(prompt('Введите первое число'));
// let b = Number(prompt('Введите второе число'));
// function correctNum(a, b) {
// 	let res;
// 	if (isNaN(a) || isNaN(b)) {
// 		return 'Одно или оба значения не являются числом';
// 	} else {
// 		return res = a * b;;
// 	}
// }
// console.log(correctNum(a, b));

// вариант 2
// let a = Number(prompt('Введите первое число'));
// let b = Number(prompt('Введите второе число'));
// function correctNum(a, b) {
// 	let res;
// 	if (a !== Number(a) || b !== Number(b)) {
// 		return 'Одно или оба значения не являются числом';
// 	} else {
// 		return res = a * b;
// 	}
// }
// console.log(correctNum(a, b));

// -----------------------------------
// задание 6
// let a = Number(prompt('Введите число'));
// const correctNum = () => {
// 	if (isNaN(a)) {
// 		return 'Переданный параметр не является числом';
// 	} else {
// 		return `${a} в кубе равняется ${a ** 3}`;
// 	}
// }
// console.log(correctNum(a));

// -----------------------------------
// задание 7
// function circleAreaRadius() {
// 	return 3.14 * (this.radius ** 2);
// }

// function perimeterOfACircle() {
// 	return 2 * 3.14 * this.radius;
// }

// const circle1 = {
// 	radius: 8,
// 	getArea: circleAreaRadius,
// 	getPerimeter: perimeterOfACircle,
// }

// const circle2 = {
// 	radius: 5,
// 	getArea: circleAreaRadius,
// 	getPerimeter: perimeterOfACircle,
// }

// console.log(circle1.getArea());
// console.log(circle2.getArea());
// console.log(circle1.getPerimeter());
// console.log(circle2.getPerimeter());

// -----------------------------------
// задание 8
// function mounthNumber() {
// 	let userAnswer = Number(prompt(`Введите номер месяца, от 1-12`));

// 	if (isNaN(userAnswer)) {
// 		return 'Введите числовое значение';
// 	} else if (userAnswer === 12 || userAnswer >= 1 && userAnswer <= 2) {
// 		return 'Зима';
// 	} else if (userAnswer >= 3 && userAnswer <= 5) {
// 		return 'Весна';
// 	} else if (userAnswer >= 6 && userAnswer <= 8) {
// 		return 'Лето';
// 	} else if (userAnswer >= 9 && userAnswer <= 11) {
// 		return 'Осень';
// 	}
// }
