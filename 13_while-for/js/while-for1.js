/* Выведите чётные числа
1) При помощи цикла for выведите чётные числа от 2 до 10.
2) Перепишите код, заменив цикл for на while, без изменения поведения цикла.
*/
'use strict';
// 1 Задание
// for (let i = 2; i <= 10; i++) {
//     alert(i);
// }

// 2 Задание
let i = 2;
while (i <= 10) {
    alert(`number ${i}!`);
    i++;
}