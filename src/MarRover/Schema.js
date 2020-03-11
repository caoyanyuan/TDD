export default class Schema {
    /**
     * 支持参数类型"l:bool p:int d:string g：this,is,a,list d： 1,2,-3,5"
     * @param {String} config
     */
    constructor(config) {
        this.map = {}
        this.listMap = {}
        let list = config.split(' ')
        list.map(item => {
            let arr = item.split(':'),
                key = arr[0],
                type = arr[1],
                typeList = type.split(',')

            if(typeList.length > 1) {
                this.listMap[key] = typeList
            }else{
                this.map[key] = type
            }
        })
    }

    getValue(name, value) {
        let type = this.map[name],
            listType = this.listMap[name],
            ret = value;

        if(type || listType) {
            if(listType) {
                ret = listType.find(item => item == value) || null
            }
            if(type) {
                switch(type) {
                    case 'bool':
                        ret = Boolean(value)
                        break;
                    case 'int':
                        if(ret !== null) {
                            ret = Number(ret)
                        }
                        break;
                    case 'string':
                        ret = String(value)
                        break;
                    default:
                        break;
                }
            }
            return ret
        }else{
            throw new Error('传入类型错误')
        }
    }

}
