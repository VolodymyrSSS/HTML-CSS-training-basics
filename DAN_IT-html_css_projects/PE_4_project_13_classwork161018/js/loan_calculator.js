/*Написать ипотечный калькулятор, который спрашивает у пользователя три вещи - сумма кредита, количество лет, процентная ставка и выдает ему три сообщения - итоговая сумма платежа, переплата и платеж в месяц*/
// 1. Спросить сумму кредита
// 2. Спросить насколько лет кредит
// 3. Спросить процентную ставку
// 4. Высчитать итоговую сумму платежа
// 5. Высчитать переплату
// 6. Высчитать платеж в месяц


// минимальная, максимальная сумма кредита
// если ввел не число
// минимальное, максимальное число лет
// проверить конвертируестся ли 12,5 в число
// форма заявки на кредит - возраст, ФИО, телефон, мейл, идентификационный код
// дать на выбор тип платежей
// сумма первого взноса

// let creditSum = prompt("Введите сумму кредита");
// if(creditSum) {
//     creditSum = prompt("Сумма кердита должна быть числом без пробелов и запятых");
// }
// if(creditSum == 0) {
//     creditSum = prompt ("Введите сумму кредита");


// function checkValue (value)
//     value = Number (prompt )
//     }
//     return value
// }



let creditPeriod = prompt("Введите количество лет");
let creditInterest = prompt("Укажите процентную ставку");
let monthCreditInterest = creditInterest/100/12;
let monthPayment = Math.ceil(creditSum*(monthCreditInterest+(monthCreditInterest/(Math.pow((1+monthCreditInterest),(creditPeriod*12))-1))));
console.log(monthPayment);
alert("Ежемесячная сумма платежа" + monthPayment);
let paymentSum = monthPayment*creditPeriod*12;
alert("Итоговая сумма платежка" + paymentSum);
let paymentDifferent = paymentSum - creditSum;
alert("Переплата составит" + paymentDifferent);