class Person{
    constructor(birthYear){
        this.age = this.calculateAge(new Date("01/01/"+ birthYear));
        this.birthYear = birthYear;
    }
    isMillenial(){
        return this.birthYear > 1982;
    }

    isRetirementer(){
        return this.age >= 65;
    }

    calculateAge(birthday) { // birthday is a date YYYYMMDD
        var ageDifMs = Date.now() - birthday.getTime();
        var ageDate = new Date(ageDifMs); // miliseconds from epoch
        return Math.abs(ageDate.getUTCFullYear() - 1970);
    }
}

module.exports = Person;