// for (let i = 0; i <= 10; i++) {
//     console.log(i);
// }

// for (let i = 10; i >= 0; i--) {
//     console.log(i);
// }

const numbers = [2, 4, 9, 10, 45, 67, 8, 90]

const juft = [];

for (let boshlash = 0; boshlash < numbers.length; boshlash++) 
    if (numbers[boshlash] % 2 === 0) {
        juft.push(numbers[boshlash])
    } 
    console.log(numbers, 'boshlanishdagi array');
    console.log(juft, 'juft sonlarga ajratilgan array');
    