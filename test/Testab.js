
export default class Test {
    constructor({title} = {}) {
        this.title = title
    }

    test({list, desc, testFn}) {
        list.map(item => {
            test(desc, function() {
                expect(testFn({...item.params})).toBe(item.target);
            });
        });
    }
}
