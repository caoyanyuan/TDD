import Command from './command'




export default class MarCar {
    constructor(command) {
        this.command = new Command(command)

        this.x = this.command.getValue('x')
        this.y = this.command.getValue('y')
        this.d = this.command.getValue('d')

    }

    getX() {
        return this.x
    }

    getY() {
        return this.y
    }

    getD() {
        return this.d
    }

    turn(direction) {
        let isLeft = direction == 'l'

        switch(this.d) {
            case 'N' :
                this.d = isLeft ? 'W' : 'E'
                break;
            case 'S':
                this.d = isLeft ? 'E' : 'W'
                break;
            case 'W' :
                this.d = isLeft ? 'S' : 'N'
                break;
            case 'E':
                this.d = isLeft ? 'N' : 'S'
                break;
            default:
                break;
        }
    }

    move(type, distance) {
        let isForward = type == 'f'

        switch(this.d) {
            case 'N' :
                this.y = isForward ? this.y + distance : this.y - distance
                break;
            case 'S':
                this.y = isForward ? this.y - distance : this.y + distance
                break;
            case 'W' :
                this.x = isForward ? this.x - distance : this.x + distance
                break;
            case 'E':
                this.x = isForward ? this.x + distance : this.x - distance
                break;
            default:
                break;
        }
    }

    forword(distance) {
        this.move('f', distance)
    }

    back(distance) {
        this.move('b', distance)
    }

}
