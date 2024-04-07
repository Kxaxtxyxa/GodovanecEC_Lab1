let number = prompt("Введите значение:");

if (number = parseInt(number)) {
  console.log(`Количество разрядов в числе ${number} : ${number.toString().length}`);
  console.log(`Первая цифра: ${number.toString()[0]}`);
} else {
  console.log("Введенное значение не является числом");
}