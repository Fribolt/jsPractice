'use strict';

class Animal {

    walk() {
        console.log(this.name);
    }
}

class Rabbit extends Animal {

    constructor(name) {
        super();

        this.name = name;
    }

    jump() {
        console.log(this.name + 'jump');
    }
}


function User(name) {
    this.name = name;
}

function Admin() {
    this.isAdmin = true;
}

Admin.prototype.method = function () {
    console.log(this.name);
};

function Test() {
    this.test = true;
}

User.prototype = Object.create(new Admin());
Admin.prototype = Object.create(new Test());

let userAdmin = new User('Vlad');