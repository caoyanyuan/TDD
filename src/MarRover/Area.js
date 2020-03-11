import Command from './command'

export default class Area {
    constructor(command) {
        this.command = new Command(command)   
        
        this.x = this.command.getValue('X')
        this.y = this.command.getValue('Y')

    }

    getX() {
        return this.x
    }

    getY() {
        return this.y
    }

    
}