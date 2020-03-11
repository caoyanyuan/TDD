import Command from '../../src/marRover/Command'

class CommandTest{
    constructor() {

    }

    test_area() {
        let command = new Command('X 100 Y 100')

        test('test get Value', () => {
            expect(command.getValue('X')).toBe(100)
        })
    }

    test_car() {
        let command = new Command('x 10 y 10 d N')

        test('test get Value', () => {
            expect(command.getValue('x')).toBe(10)
            expect(command.getValue('y')).toBe(10)
            expect(command.getValue('d')).toBe('N')

        })
    }

}

let temp = new CommandTest()

temp.test_area()
temp.test_car()
