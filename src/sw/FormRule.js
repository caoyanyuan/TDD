export default class FormRule {
    /*
    *  key：表单字段名, 
    *  type: 
    *  validate:          验证类型  
    *  
    */

    /**
     * @param {Number} required 是否必须 1为true 2为false
     * @param {String} type 触发类型  select radio autocomplete => change / 其他 => blur
     * @param {String} validate  验证类型 max/phone/email
     * @param {Object} extend    拓展字段   method unique验证下的api接口
     * extend： {          拓展字段
     *     max: 10,         最大字符数
     * }
     */
    static typeStr = 'select radio autocomplete'
    constructor({ required, type, validate,  extend, }) {
        Object.assign(this, { type, validate, required, extend})

        this.rule = { 
            required: required,
            trigger:  'blur',
            validator: ""   
        }

        this._setTrigger()
        this._setValidator()
    }   

    _setTrigger() {
        let ret = "blur"
        if(this.type.indexOf(FormRule.typeStr)) {
            ret = 'change'
        }
        this.rule.trigger = ret
    }

    _setValidator() {
        this.rule.validator = (rule, value, callback) => {
            
        }
    }

    
}