let counter = 0;
let selectDate = new Date();
const dateNow = new Date();
const currentDate = document.querySelector('#current-date');
const modifyDate = document.querySelector('#modify-date');
const differenceDate1 = document.querySelector('#difference-date');
const select = document.querySelector('#select-date');
const changeDateButton = document.querySelector('#change-date');
const compareDateButton = document.querySelector('#compare-date');

const dateOptions = {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    hour: 'numeric',
    minute: 'numeric',
    second: 'numeric'
};
const intervals = {
    halfHour: 1800000,
    hour: 3600000,
    day: 86400000,
    week: 604800000,
    halfMonth: 1296000000,
};
const setDate = {
    halfHour: {
        title: 'Half an Hour',
        date: intervals.halfHour,
    },
    hour: {
        title: 'Hour',
        date: intervals.hour,
    },
    day: {
        title: 'Day',
        date: intervals.day,
    },
    week: {
        title: 'Week',
        date: intervals.week,
    },
    halfMonth: {
        title: 'Half an Month',
        date: intervals.halfMonth,
    },
};

currentDate.innerHTML = dateNow.toLocaleDateString('ru', dateOptions);

const getValue = () => select.value;

const calculateDate = () => selectDate = +selectDate + +getValue();

const showModifyDate = () => {
    modifyDate.innerHTML = new Date(calculateDate()).toLocaleDateString('ru', dateOptions);
};

const setOptions = (title) => {
    let select = document.querySelector('#select-date');
    let option = document.createElement('option');

    option.innerText = title;
    option.classList.add('option');
    select.appendChild(option);
};

const setAttribute = (date) => {
    let options = document.querySelectorAll('.option');
    options[counter].setAttribute('value', date);
    counter++;
};

for (let key in setDate) {
    for (let key1 in setDate[key]) {
        if (typeof setDate[key][key1] == "string") {
            setOptions(setDate[key][key1]);
        }
    }
}

for (let key in setDate) {
    for (let key1 in setDate[key]) {
        if (typeof setDate[key][key1] == "number") {
            setAttribute(setDate[key][key1]);
        }
    }
}

changeDateButton.addEventListener('click', showModifyDate);
compareDateButton.addEventListener('click', function () {
    let differenceDate = selectDate - dateNow;
    differenceDate1.innerHTML = `Разница в часах: ${differenceDate / 1000 / 60 / 60}`;
});
