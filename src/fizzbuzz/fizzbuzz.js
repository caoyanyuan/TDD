export default {
    print(number) {
        let str = number
        if(number%15 == 0) str = "FizzBuzz"
        else if(number%3 == 0) str = "Fizz"
        else if(number%5 == 0) str = "Buzz"
        return str
    },
    printAll() {
        let str = ""
        for(let i=1; i<=100; i++) {
            str += this.print(i)
        } 
        return str
    }
  }