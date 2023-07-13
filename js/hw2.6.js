// задание 1
// let numbers = [1, 5, 4, 10, 0, 3];

// for (let i = 0; i < numbers.length; i++) {
// 	console.log(numbers[i]);
// 	if (numbers[i] == 10) break;
// }


// --------------------------------------------------------------
// задание 2
// let numbers = [1, 5, 4, 10, 0, 3];
// 1 вариант
// let i = numbers.indexOf(4);
// console.log(i);

// 2 вариант
// numbers.forEach((el, index) => {
// 	if (el == 4)
// 		console.log(`${index}`);
// });


// --------------------------------------------------------------
// задание 3
// const numbers = [1, 3, 5, 10, 20];

// let joinNumbers = numbers.join(' ');
// console.log(joinNumbers);


// --------------------------------------------------------------
// задание 4
// let arr = [];
// for (let i = 0; i <= 2; i++) {
// 	let arr2 = [];
// 	for (let index = 0; index <= 2; index++) {
// 		arr2.push(1);
// 	}
// 	arr.push(arr2);
// }
// console.log((arr));


// --------------------------------------------------------------
// задание 5
// let arr = [1, 1, 1];
// arr.push(2, 2, 2);
// console.log(arr);


// --------------------------------------------------------------
// задание 6
// const arr = [9, 8, 7, 'a', 6, 5];
// arr.sort().pop();
// console.log(arr);


// --------------------------------------------------------------
// задание 7
// Решение: вариант 1
// const array = [9, 8, 7, 6, 5];
// let userAnswer = Number(prompt('Угадайте число'));
// let search = array.includes(userAnswer);

// if (search === true) {
// 	console.log('угадал');
// } else {
// 	console.log('не угадал');
// }

// задание 7
// Решение: вариант 2
// const array = [9, 8, 7, 6, 5];
// let userAnswer = Number(prompt('Угадайте число'));
// if (array.includes(userAnswer)) {
// 	console.log('угадал');
// } else {
// 	console.log('не угадал');
// }


// --------------------------------------------------------------
// задание 8
// let word = 'abcdef';
// let wordRverce = word.split('').reverse().join('');
// console.log(wordRverce);


// --------------------------------------------------------------
// задание 9
// const array = [[1, 2, 3,], [4, 5, 6]];
// const arrayConcat = array[0].concat(array[1]);
// console.log(arrayConcat);


// --------------------------------------------------------------
// задание 10
// const array = [1, 4, 6, 7, 5, 9];
// for (let i = 0; i < array.length - 1; i++) {
// 	console.log(array[i] + array[i + 1]);
// }


// --------------------------------------------------------------
// задание 11
// const arrayNambs = [1, 4, 6, 7, 5, 9, 13, 16];
// let squareNumbs = arrayNambs.map(item => (item ** 2));
// console.log(squareNumbs);


// --------------------------------------------------------------
// задание 12
// let words = ['слово', '', 'слог', 'длинное предложение', 'буква'];
// let result = words.map(item => item.length);
// console.log(result);


// --------------------------------------------------------------
// задание 13
// function filterPositive(array) {
// 	let result = [];
// 	for (let i = 0; i < array.length; i++) {
// 		if (array[i] < 0) {
// 			result.push(array[i])
// 		}
// 	}
// 	return result;
// }

// console.log(filterPositive([-1, 0, 5, -10, 56]));
// console.log(filterPositive([-25, 25, 0, -1000, -2]));


// --------------------------------------------------------------
// Дополнительная часть
// задание 14
// let numbs = [];

// function getRandom() {
// 	for (let i = 0; i < 10; i++) {
// 		numbs.push(Math.floor(Math.random() * 10));
// 	}
// 	return numbs;
// }

// let randomNumbs = getRandom();
// console.log(randomNumbs);

// const getOdd = (randomNumbs) => {
// 	let oddNumbs = [];
// 	for (let index = 0; index < randomNumbs.length; index++) {
// 		if (randomNumbs[index] % 2 == 0) {
// 			oddNumbs.push(randomNumbs[index]);
// 		}
// 	}
// 	return oddNumbs;
// }
// console.log(getOdd(randomNumbs));


// --------------------------------------------------------------
// Дополнительная часть
// задание 15
// let numbs = [];

// function getRandom() {
// 	for (let i = 0; i < 10; i++) {
// 		numbs.push(Math.floor(Math.random() * 10));
// 	}
// 	return numbs;
// }

// let randomNumbs = getRandom();
// console.log(randomNumbs);

// const average = (randomNumbs) => {
// 	let result = randomNumbs.reduce((intermedite, value) => intermedite + value);
// 	return result / randomNumbs.length;
// }
// console.log(average(randomNumbs));