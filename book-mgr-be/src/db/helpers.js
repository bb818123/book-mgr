const getMate = () => {
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

module.exports={
    getMate,
}