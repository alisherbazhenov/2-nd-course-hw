// задание 1
// const people = [
// 	{ name: 'Глеб', age: 29 },
// 	{ name: 'Анна', age: 17 },
// 	{ name: 'Олег', age: 7 },
// 	{ name: 'Оксана', age: 47 }
// ];


// let result = people.sort(function (a, b) {
// 	if (a.age < b.age) return -1;
// });

// console.log(result);

// ---------------------------------------------------------------------------------------
// задание 2
// function isPositive(number) {
// 	return number > 0;
// }
// function isMale(genus) {
// 	return genus.gender === 'male';
// }
// function filter(array, ruleFunction) {
// 	let result = [];
// 	for (let i = 0; i < array.length; i++) {
// 		if (ruleFunction(array[i])) {
// 			result.push(array[i])
// 		}
// 	}
// 	return result;
// }

// console.log(filter([3, -4, 1, 9], isPositive)); // Должен выводить [3, 1, 9]

// const people = [
// 	{ name: 'Глеб', gender: 'male' },
// 	{ name: 'Анна', gender: 'female' },
// 	{ name: 'Олег', gender: 'male' },
// 	{ name: 'Оксана', gender: 'female' }
// ];

// console.log(filter(people, isMale)); // Должен выводить [{name: 'Глеб', gender: 'male'},  {name: 'Олег', gender: 'male'}]


// ----------------------------------------------------------
// задание 3

// повторить с интервалом 3 секунды
// let timerId = setInterval(() => console.log(new Date()), 3000);

// остановить вывод через 30 секунд
// setTimeout(() => { clearInterval(timerId); console.log('30 сек прошло'); }, 30000);


// ----------------------------------------------------------
// задание 4
// function delayForSecond(callback) {
// 	Код писать можно только внутри этой функции
// 	setTimeout(callback, 3000);
// }

// delayForSecond(function () {
// 	console.log('Привет, Глеб!');
// })


// ----------------------------------------------------------
// задание 5
// function delayForSecond(cb) {
// 	setTimeout(() => {
// 		console.log('Прошла одна секунда');
// 		if (cb) { cb(); }

// 	}, 1000)
// }

// function sayHi(name) {
// 	console.log(`Привет, ${name}!`);
// }

// delayForSecond(() => sayHi('Глеб'));
