// Задание 1
// let str = 'привет мир';
// console.log(str.toLocaleUpperCase());

// ------------------------------------------
// Задание 2
// Решение: вариант 1
// const animals = ['Кошка', 'Кит', 'Комар', 'Носорог'];
// const search = 'ко';

// function animalA(animals, search) {
// 	let animal = [];
// 	for (let index = 0; index < animals.length - 1; index++) {
// 		if (animals[index].toLowerCase().includes(search.toLowerCase())) {
// 			animal.push(animals[index]);
// 		}
// 	}
// 	return animal;
// }
// console.log(animalA(animals, search));


// Решение: вариант 2
// const animals = ['Кошка', 'Кит', 'Комар', 'Носорог'];
// const search = 'ко';
// animals.forEach((animal) => {
// 	if (animal.toLowerCase().includes(search.toLowerCase())) {
// 		console.log(animal);
// 	}
// });


// ------------------------------------------
// Задание 3
// let num = 32.58884;
// console.log(Math.floor(num));
// console.log(Math.ceil(num));
// console.log(Math.round(num));


// ------------------------------------------
// Задание 4
// Решение 1
// let max = Math.max(52, 53, 49, 77, 21, 32);
// let min = Math.min(52, 53, 49, 77, 21, 32);
// console.log(`Максимальное число: ${max}, минимальное: ${min}`);

// решение 2 / через массив
// let numbs = [52, 53, 49, 77, 21, 32];
// let maxNum = Math.max(...numbs);
// console.log(maxNum);
// let minNum = Math.min(...numbs);
// console.log(minNum);

// решение 3 / через массив
// let numbs = [52, 53, 49, 77, 21, 32];
// function maxNumb(numbs) {
// 	return Math.max(...numbs);
// }
// console.log(maxNumb(numbs));

// function minNumb(numbs) {
// 	return Math.min(...numbs);
// }
// console.log(minNumb(numbs));


// ------------------------------------------
// Задание 5
// const numbRandom = () => {
// 	return Math.ceil(Math.random() * 10);
// }
// console.log(numbRandom());


// ------------------------------------------
// Задание 6
// function getRandomArrNumbers(num) {
// 	let array = [];
// 	let halfArray = Math.floor(num / 2);
// 	for (let i = 0; i < halfArray; i++) {
// 		array.push(Math.ceil(Math.random(num) * num));
// 	}
// 	return array;
// };
// console.log(getRandomArrNumbers(9));


// ------------------------------------------
// Задание 7
// function getRandom(a, b) {
// 	let res;
// 	if (a > b) {
// 		return Math.round(Math.random() * (a - b)) + b;
// 	} else if (a < b) {
// 		return Math.round(Math.random() * (b - a)) + a;
// 	}
// }
// console.log(getRandom(4, 9));


// ------------------------------------------
// Задание 8
// let currentDate = new Date();
// console.log(currentDate);

// let myDate = new Date(2023, 6, 12, 17, 09);
// console.log(myDate);


// ------------------------------------------
// Задание 9
// let myDate = new Date();
// console.log(myDate);
// myDate.setDate(myDate.getDate() + 72);
// console.log(myDate);


// ------------------------------------------
// Задание 10
// const days = ["Воскресенье", "Понедельник", "Вторник", "Среда", "Четверг", "Пятница", "Суббота"];
// const months = ["Январь", "Февраль", "Март", "Апрель", "Май", "Июнь",
// 	"Июль", "Август", "Сентябрь", "Октябрь", "Ноябрь", "Декабрь"];

// let myDate = new Date();
// let fullDate = myDate.getDate() +
// 	" " + months[myDate.getMonth()] +
// 	" " + myDate.getFullYear() +
// 	"- это " + days[myDate.getDay()] +
// 	" " + myDate.getHours() + ":" + myDate.getMinutes() + ":" + myDate.getSeconds();

// console.log(fullDate);


// ------------------------------------------
// Задание 11
// образец с урока
// let list = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// list = list.sort(() => Math.random() - 0.5);
// console.log(list);
// console.log(list[list.length - 1]);


// ------------------------------------------
// Задание 11
// свое решение
// let fruits = ['Яблоко', 'Груша', 'Дыня', 'Виноград', 'Персик', 'Апельсин', 'Мандарин'];

// function userAnswer() {

// 	fruits = fruits.sort(() => Math.random() - 0.5).join(' ');
// 	alert(`Запомните слова: \n${fruits}`);
// 	fruits = fruits.toLowerCase().split(' ');

// 	let twoFruits = [];
// 	twoFruits.push(fruits[0], fruits[fruits.length - 1]);

// 	let task1 = twoFruits[0];
// 	let task2 = twoFruits[1];

// 	let answer1 = prompt('Какое слово было первым?');
// 	let answer2 = prompt('Какое слово было последним?');
// 	answer1 = answer1.toLowerCase();
// 	answer2 = answer2.toLowerCase();

// 	for (let i = 0; i < twoFruits.length; i++) {
// 		if ((answer1 == task1 || answer1 == task2) && (answer2 == task1 || answer2 == task2)) {
// 			alert('Ура, ты угадал целых 2 слова!');
// 			break;
// 		} else if ((answer1 == task1 || answer1 == task2) || (answer2 == task2 || answer2 == task1)) {
// 			alert('Угадано 1 слово, ты можешь стать лучше!');
// 			break;
// 		} else {
// 			alert('Отгадано слов: 0, не отчаивайся, попробуй сыграть еще раз!');
// 			break;
// 		}
// 	}
// }


// ВАРИНАТ от НАСТАВНИКА
// let fruits = ['Яблоко', 'Груша', 'Дыня', 'Виноград', 'Персик', 'Апельсин', 'Мандарин'];
//добавили массив

  //  let shuffleFruits = fruits.sort(() => Math.random() - 0.5);
//добавили другой массив, где перемешали фрукты

  //  alert(shuffleFruits);
//показали пользователю

// let answer1 = prompt('Какое слово было первым?').toLowerCase(); 
//спросили у пользователя первый фрукт
// let answer2 = prompt('Какое слово было последним?').toLowerCase(); 
//теперь второй

  //  if (answer1 === shuffleFruits[0].toLowerCase() && answer2 === shuffleFruits[fruits.length - 1].toLowerCase()) {
//если первый ответ пользователя равен первому фрукту && второй ответ пользователя равен второму
      // alert('Ура, ты угадал целых 2 слова!');

  //  } else if (answer1 === shuffleFruits[0].toLowerCase() || answer2 === shuffleFruits[fruits.length - 1].toLowerCase()) {
//если первый ответ пользователя равен первому фрукту || второй ответ пользователя равен второму

      // alert('Угадано 1 слово, ты можешь стать лучше!');
  //  } else {
      // alert('Отгадано слов: 0, не отчаивайся, попробуй сыграть еще раз!');
  //  }




