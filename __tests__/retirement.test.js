let Person = require('./../src/Person')

test('2 is 2', () => {
    expect(2).toBe(2)
})

describe('retirementers', () => {
    test('can retire by age', () => {
        let person = new Person(65);

        let result = person.isRetirementer();

        expect(result).toBeTruthy();
    })

    test('can retire by age', () => {
        let person = new Person(33);

        let result = person.isRetirementer();

        expect(result).toBeFalsy();
    })
})