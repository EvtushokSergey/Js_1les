const DATENOW = 2021;
let firstName = "Sergey";
let secondName = "Irina";
let thirdName = "Anton";
let fourthName = "Evgeny";
let message = "Hello";
// let name = "11serg";
// let 1name = "Ivan-Vasilkov";
// let prompt = "__Pasha";
// let function = "12345";
// let message1 = "qwety";

let userName = prompt("Ваше имя?", "");
alert(`Hello ${userName}`); //Тебя зовут...!

let age = prompt("Укажете ваш год рождения?", "");
alert(`Тебе ${DATENOW - age} лет!`); //Тебе ... лет

let length = prompt("Длинна стороны квадрата?", "");
alert(`Периметр составляет ${4 * length}`); //Периметр квадрата

let r = prompt("Укажите радиус круга", "") //Площадь круга
alert(`Площа круга составляет ${3.14 * (r * r)}`);

let distance = prompt("Укажите растояние между городами в км", "") //Желаемая скорость
let time = prompt("Укажите время в пути в ч.", "");
alert(`Твоя скорость составит ${distance / time}`);

const COURCE = 0.89;
let dolar = prompt("Укажите количество доларов для обмена", ""); //Обменик
alert(`Вы получите ${COURCE * dolar} EUR`);
