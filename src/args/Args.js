import Schema from './Schema'
import Command from './Command'

export default class Args {
    constructor({schema, command}) {
        this.schema = new Schema(schema)
        this.command = new Command(command)
    }

    getValue(name) {
        let value = this.command.getValue(name)
        // console.log(value)
        return this.schema.getValue(name, this.command.getValue(name))
    }
}