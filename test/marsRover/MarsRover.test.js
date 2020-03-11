/*
探索区域信息：告知火星车，整片区域的长度（X）和宽度（Y）有多大
初始化信息：火星车的降落地点（x, y）和朝向（N, S, E, W）信息
移动指令：火星车可以前进（f）或后退（b）
转向指令：火星车可以左转90度（l）或右转90度（r）

X 10 Y 10 x 0 y 0 d: [N, S, E, W] f 10 t:[l, r]

指令必须批量发送，火星车执行完整批指令之后，再回报自己所在的位置坐标和朝向。

对象分析：
    火星对象mar：坐标值x，y， 当前朝向  可执行转向 前进
    区域对象area：长宽XY
    指令解析对象：解析 X 10 Y 10 x 0 y 0 N f 10 l 90

0310打卡：
    用JavaScript实现MarsRover, 依然从测试出发 => MarRover (发现要new出Area对象) => Area对象 (发现要解析X 100 Y 100这一命令行)
    => command对象（需要测试） => commandTest, 按照这样的方向比较顺利的去推导出整个项目，这和我之前的开发有点相悖，学完TDD
    之后，对我最大的帮助就是更加深刻地认识了测试，很好的保证了代码质量，虽然就速度而言，并没有很好地去改善。但是观念先行，熟练度会慢慢练出来。而且对于业务比较复杂的情况，TDD已经可以明显加快开发的速度。

    关于指令解析 d: [N, S, E, W]\
    顺序问题
    两次 tr问题
    */

import MarRover from '../../src/marRover/MarRover'

class MarRoverTest{
    constructor() {
        this.marRover = new MarRover({area: 'X 100 Y 100', marCar: 'x 10 y 10 d N'})
    }
    //不执行任何指令
    test_init() {
        test('test init info', () => {

            expect(this.marRover.getX()).toBe(10)
            expect(this.marRover.getY()).toBe(10)
            expect(this.marRover.getD()).toBe('N')
        })
    }

    test_north() {
        test('test get Value', () => {
            this.marRover.execute('f 10')
            expect(this.marRover.getX()).toBe(10)
            expect(this.marRover.getY()).toBe(20)
            expect(this.marRover.getD()).toBe('N')
            this.marRover.execute('t r b 10')
            expect(this.marRover.getX()).toBe(0)
            expect(this.marRover.getY()).toBe(20)
            expect(this.marRover.getD()).toBe('E')
        })
    }
}


let temp = new MarRoverTest()

temp.test_init()
