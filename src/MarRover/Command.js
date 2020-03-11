export default class Command {
    /**传入命令 */
    constructor(line) {

        let list = line && line.split(' ')
        let i = 0

        this.map = {}
        while(list[i]) {
            let cur = list[i],
                next = list[i+1]

            if(!this.isNumber(cur)) {
                this.map[cur] = next
            }

            i++
        }
    }

    getValue(key) {
        if(key in this.map) {
            let value = this.map[key]
            if(this.isNumber(value)) {
                return Number(value)
            }else{
                return this.map[key]
            }
        }
    }

    isNumber(val) {
        return Math.abs(val) >= 0
    }
}
