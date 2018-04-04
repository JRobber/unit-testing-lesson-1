let Person = require('./../src/Person')

test('2 is 2', () => {
    expect(2).toBe(2)
})

describe('millenials', () => {
    test('isMillenial is millenial', () => {
        let person = new Person(1984);

        let result = person.isMillenial();

        expect(result).toBeTruthy();
    })

    test('is unborn millenial', () => {
        let person = new Person(2025);

        let result = person.isMillenial();

        expect(result).toBeTruthy();
    })

    test('is 40s millenial', () => {
        let person = new Person(1970);

        let result = person.isMillenial();

        expect(result).toBeFalsy();
    })
    test('is on the line millenial', () => {
        let person = new Person(1982);

        let result = person.isMillenial();

        expect(result).toBeFalsy();
    })
})