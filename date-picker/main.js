let selectDate = new Date();
let modifyDate = new Date();
const dateNow = new Date();
const currentDateElement = document.querySelector('#current-date');
const modifyDateElement = document.querySelector('#modify-date');
const differenceDateElement = document.querySelector('#difference-date');
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

const optionsList = [
    {
        name: 'Half an Hour',
        date: intervals.halfHour,
    },
    {
        name: 'Hour',
        date: intervals.hour,
    },
    {
        name: 'Day',
        date: intervals.day,
    },
    {
        name: 'Week',
        date: intervals.week,
    },
    {
        name: 'Half an Month',
        date: intervals.halfMonth,
    },
];

currentDateElement.innerHTML = dateNow.toLocaleDateString('ru', dateOptions);

const getSelectedDate = () => select.value;
const calculateModifyDate = () => selectDate = +selectDate + +getSelectedDate();
const showModifyDate = () => {
    modifyDate = new Date(calculateModifyDate());
    modifyDateElement.innerHTML = modifyDate.toLocaleDateString('ru', dateOptions);
};

const convertToDay = (milliseconds) => milliseconds / 1000 / 60 / 60 / 24;
const convertToHour = (milliseconds) => milliseconds / 1000 / 60 / 60;
const convertToMinute = (hours) => hours * 6;

const getDifferenceDate = () => +modifyDate - +dateNow;

const showDifferenceDate = () => {
    let differenceDateArray = (" " + convertToDay(getDifferenceDate())).split(".");

    differenceDateElement.innerHTML = differenceDateArray[1];
    // let differenceDateMilliseconds = selectDate - dateNow;
    // let differenceDateArray = (" " + convertToHour(differenceDateMilliseconds)).split(".");
    // let remainderHour = differenceDateToArray[1];
    //
    // if (remainderHour) {
    //     differenceDate.innerHTML = `Разница часов: ${differenceDateToArray[0]}, минут ${convertToMinute(+remainderHour)}`;
    // } else {
    //     differenceDate.innerHTML = `Разница в часах: ${convertToHour(differenceDateMilliseconds)}`;
    // }
};

const createOptions = () => {
    optionsList.forEach((item) => {
        let option = document.createElement('option');
        option.innerText = item.name;
        option.setAttribute('value', item.date);
        select.appendChild(option);
    });
};

createOptions();

changeDateButton.addEventListener('click', showModifyDate);
compareDateButton.addEventListener('click', showDifferenceDate);
