import MarCar from '../../src/marRover/MarCar'

class MarCarTest{
    constructor() {

    }

    test_move() {
        let marCar = new MarCar('x 10 y 10 d N')

        test('test forward', () => {
            marCar.forword(10)
            expect(marCar.getX()).toBe(10)
            expect(marCar.getY()).toBe(20)
            expect(marCar.getD()).toBe('N')

            marCar.back(5)
            expect(marCar.getX()).toBe(10)
            expect(marCar.getY()).toBe(15)
            expect(marCar.getD()).toBe('N')
        })
    }

    test_turn() {
        let marCar = new MarCar('x 10 y 10 d N')

        test('test forward', () => {
            marCar.turn('l')
            expect(marCar.getX()).toBe(10)
            expect(marCar.getY()).toBe(10)
            expect(marCar.getD()).toBe('W')

            marCar.turn('r')
            expect(marCar.getX()).toBe(10)
            expect(marCar.getY()).toBe(10)
            expect(marCar.getD()).toBe('N')
        })
    }
}

let temp = new MarCarTest()

temp.test_move()
temp.test_turn()
