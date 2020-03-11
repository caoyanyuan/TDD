export default class Fz {
    constructor() {}

    print(number) {
        this.number = number
        let ret = ""
        if(this.isDivided(3) && this.isDivided(5)) {
            ret = "fizzbuzz"
        }else if(this.isDivided(3)) {
            ret = "fizz"
        }else if(this.isDivided(5)) {
            ret = 'buzz'
        }else{
            ret = number
        }
        return ret
    }

    isDivided(times) {
        return this.number%times == 0
    }

    printAll() {
        let str = ""
        for(let i=1; i<=100; i++) {
            str += this.print(i)
        } 
        return str
    }
}