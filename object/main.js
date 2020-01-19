// task: Напишите код, выполнив задание из каждого пункта отдельной строкой:
//
//     Создайте пустой объект user.
//     Добавьте свойство name со значением John.
//     Добавьте свойство surname со значением Smith.
//     Измените значение свойства name на Pete.
//     Удалите свойство name из объекта.

const user = {};
user.name = 'John';
user.surname = 'Smith';
user.name = 'Pete';
delete user.name;

// task: Напишите функцию isEmpty(obj), которая возвращает true, если у объекта нет свойств, иначе false.
function isEmpty(obj) {
    let isEmptyObj = true;

    if (isEmptyObj) {
        for (let key in obj) {
            isEmptyObj = key === undefined;
        }
    }

    return isEmptyObj;
}

// второе решение
function isEmptyObj(obj) {
    for (let key in obj) {
        return false
    }

    return true;
}

// task: Напишите код для суммирования всех зарплат и сохраните результат в переменной sum
let salaries = {
    John: 100,
    Ann: 160,
    Pete: 130
};

function totalAmount(obj) {
    let totalSum = 0;

    for (let key in obj) {
        totalSum += obj[key];
    }

    return totalSum;
}

// task: Создайте функцию multiplyNumeric(obj), которая умножает все числовые свойства объекта obj на 2.

let menu = {
    width: 200,
    height: 300,
    title: "My menu"
};

function multiplyNumeric(obj) {
    for (let key in obj) {
        if(typeof obj[key] === "number") {
            obj[key] *= 2;
        }
    }
}

multiplyNumeric(menu);
