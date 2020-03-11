export default class Command {
    // -l true -d user/local
    constructor(line) {
        let list = line.split(' ')
        let i = 0

        this.map = {}
        while(list[i+1]) {
            let cur = list[i],
                next = list[i+1], key, value = null
            
            //-l -p -9 -d user/local
            if(this.isKey(cur)) {
                key = list[i].substring(1)

                if(this.isValue(next)) {
                    value = next
                }

                this.map[key] = value
            }
            i++
        }

        //console.log(this.map)
    }

    //是否是 key
    isKey(value) {
        if(value.charAt(0) == '-') {
            // -9
            if(this.isNumber(value)){
                return false
            }
            // -
            if(value.length == 1) {
                return false
            }
            return true
        }
        return false
    }

    //是否是 value
    isValue(value) {
        if(value.charAt(0) == '-') {
            // -9
            if(this.isNumber(value) ){
                return true
            }
            return false
        }
        return true
    }

    isNumber(val) {
        return Math.abs(val) >= 0
    }

    getValue(name) {
        return this.map[name]
    }

}

