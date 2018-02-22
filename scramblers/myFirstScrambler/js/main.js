var userArray  = [],
    decryptedArr = [],
    wrapEncoder = document.querySelector('.container'),
    popupTooltip  = document.querySelector('.wrapp_popup');


function scrambler() {
    userArray  = [];
    for (var i = 0; i < userString.value.length; i++) {
        var scrambler = userString.value.charCodeAt(i);
        userArray.push(scrambler);
    };
}

function decrypted() {
    decryptedArr = [];
    for (var i = 0; i < userArray.length; i++) {
        var unicode = String.fromCharCode(userArray[i]);
        decryptedArr.push(unicode);
    }
}

function createElement(tag) {
    return document.createElement(tag);
}

function addClass(element,name) {
    element.classList.add(name);
}

function removeClass(element,name) {
    element.classList.remove(name);
}

function deleteHtml(parent) {
    parent.removeChild(element)
}

function insertElement(parent, el ) {
    parent.appendChild(el);
}

function addContent(element,content) {
    element.innerHTML = content;
}

function isCorrectString() {
    return userString.value.length;
}

function addCloseBtn(parent) {
    var closeBtn = createElement('div');
    addClass(closeBtn, 'close_btn');
    insertElement(parent, closeBtn);
    closeBtn.addEventListener('click' , function() {
        parent.remove()
    })
}

function clearAll() {
    var allMesseg = document.querySelectorAll('.alert');
    for (var i = 0; i < allMesseg.length; i++) {
        allMesseg[i].remove();
    }
}

function showChiperUser() {
    if (isCorrectString()) {
        scrambler();
        var answer = createElement('p');
        addClass(answer, 'alert');
        insertElement(wrapEncoder, answer);
        addContent(answer,'Encrypted text : ' + userArray.join(''));
        addCloseBtn(answer);
     } else {
         addClass(popupTooltip , 'active');
     }
 }

function showDecrypUser() {
    if (isCorrectString()) {
        decrypted();
        var answer = createElement('p');
        addClass(answer, 'alert');
        insertElement(wrapEncoder, answer);
        addContent(answer, 'Decrypted text: ' + decryptedArr.join(''));
        addCloseBtn(answer);
    } else {
        addClass(popupTooltip , 'active');
    }
}

function confirmAction(e) {
    var badTarget =  document.querySelectorAll('div .popup_hint, .popup_hint p');
    if (e.target != badTarget[0] && e.target != badTarget[1]) {
        removeClass(popupTooltip , 'active');
    }
}

encryptor.addEventListener('click', showChiperUser);
decryptor.addEventListener('click', showDecrypUser);
popupTooltip.addEventListener('click', confirmAction);
clearMessage.addEventListener('click', clearAll);
