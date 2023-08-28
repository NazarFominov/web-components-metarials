class User {
    constructor(name) {
        this.name = name;
    }

    set age(age) {
        this._age = age;
    }

    get age() {
        return this._age;
    }

    sayHi() {
        console.log(`${User.getGreeting(this.age)}, ${this.name}`);
    }

    static getGreeting(age) {
        if (!age || age < 18) return 'Привет'

        return 'Здравствуйте'
    }
}

const user = new User('Иван')
