const mixin = {
    data: function() {
        return {
            a: 100,
            b: 'abc'
        }
    },
    method: {
        log: (param) => {
            console.log('this is param', param);
        }
    }
}

export default mixin;