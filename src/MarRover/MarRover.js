import MarCar from "./Marcar"
import Area from "./Area"
import Command from './command'


export default class MarRover{
    constructor({marCar, area}) {
        this.area = new Area(area)
        this.marCar = new MarCar(marCar)
    }

    getX() {
        return this.marCar.getX()
    }

    getY() {
        return this.marCar.getY()
    }

    getD() {
        return this.marCar.getD()
    }

    execute(line) {
        let command = new Command(line);

        for(let key in command.map) {
            let value = command.getValue(key)

            switch (key) {
                case 'f':
                    this.marCar.move(value, 'f')
                    break;
                case 'b':
                    this.marCar.move(value, 'b')
                    break;
                case 't':
                    this.marCar.turn(value)
                    break;

                default:
                    break;
            }
        }
    }

}
