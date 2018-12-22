let dateNow = new Date();
let currentDate = document.querySelector('#current-date');
let dateOptions = {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    hour: 'numeric',
    minute: 'numeric',
    second: 'numeric'
};

let setDate = {
  halfDay: {
      title: 'Half Day',
      date: 12
  },
  day: {
      title: 'Day',
      date: 24
  },
};

function createOptions(title) {
    let select = document.querySelector('#select-date');
    let option = document.createElement('option');

    option.innerText = title;
    option.classList.add('option');
    select.appendChild(option);
}

function setAttribute(date) {
    let options = document.querySelectorAll('.option');
    options.setAttribute('value', date);
}

for(let key in setDate) {
    for (let key1 in setDate[key]) {
        if (typeof setDate[key][key1] == "string") {
            createOptions(setDate[key][key1]);
        }
    }
}

for(let key in setDate) {
    for (let key1 in setDate[key]) {
        if (typeof setDate[key][key1] == "number") {
            createOptions(setDate[key][key1]);
        }
    }
}

currentDate.innerHTML = dateNow.toLocaleDateString('ru', dateOptions);

function calculetDate(dateNow) {
    +dateNow
}