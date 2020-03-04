import Args from "../src/Args"
import Test from './Test'

const Args = require('../src/Args')
const Test = require('./Test')

console.log(Args)
// 把项目的文档都看了一遍，

/**
 * 需求列表：
 * 解析：-l true -p 8080 -d /user/logs
 * 1. 取出 l 的值为 布尔型 true
 * 2. 取出 p 的值为 整数型 8080
 * 3. 取出 d 的值为 字符串 /user/logs
 *
 * 测试用例
 * 一、参数结构规则
 * 1. 一个参数
 * a. l: bool
 *    l: true => true
 *    1: false => false
 *    l: 0 => false
 *    l:   => null
 * b. p: int
 *    p: 8080 => 8080
 *    p: '1'  => 1
 *    p: true => 1
 *    p: '-9' => -9
 * c. d: string
 *    d: 8080 => '8080'
 *    d: 'user'  => user
 *    d: true => 'true'
 *    d: '-9' => '-9'
 * 2. 多个参数
 * a. l: bool d: string d:int
 *    l: true => true
 *    p: true => 'true'
 *    d: true => 1
 *
 *
 * 二、取值
 * 1. 全部都有值的情况
 * -l true -p 8080 -d /user/logs => l:true  p:8080  d:/user/logs
 * 2. 部分没有值
 * -l true -p -d /user/logs      => l:true  p:null  d:/user/logs
 * 3. 负数(-9)出现的情况
 * -l true -p -9 -d /user/logs   => l:true  p:-9   d:/user/logs
 * 4. 负数和没有值都出现的情况
 * -l -p -9 -d /user/logs        => l:null  p:-9   d:/user/logs
 */
class ArgsTest extends Test {
    constructor() {
        super({title: 'args test'})

        this.schema = 'l:bool p:int d:string'
    }

    test_has_value() {
        let command = '-l true -p 8080 -d /user/logs'
        let tempFn = new Args({schema: this.schema,  command})

        console.log(tempFn.getValue('l'))
        test('xxx', () => {
            expect(tempFn.getValue('l')).toBe(true);
        })

        // this.test({
        //     desc: 'test all have value',
        //     testFn: tempFn.getValue.bind(tempFn),
        //     list: [
        //         { params: "l", target: true },
        //     ]
        // })
    }

    test_no_value() {

    }

    test_has_negative() {

    }
}

let temp = new ArgsTest()

temp.test_has_value()
