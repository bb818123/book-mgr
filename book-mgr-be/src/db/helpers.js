const {
    model
} = require('mongoose');

const getMeta = () => {
    return {
        createdAt: {
            type: Number,
            dafault: (new Date()).getTime(),
        },
        updatedAt: {
            type: Number,
            dafault: (new Date()).getTime(),
        },
    };
};

const preSave = function (next) {
    if (this.isNew) {
        const ts = Date.now();

        this['meta'].createdAt = ts;
        this['meta'].updatedAt = ts;
    }else{
        this['meta'].createdAt = Date.now();
    }

    next();
};

module.exports={
    getMeta,
    preSave,
}