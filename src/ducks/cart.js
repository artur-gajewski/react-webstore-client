export default(state = [], payload) => {
    switch (payload.type) {
        case 'add':
            return [...state, payload.product];
        case 'remove':
            return state.filter((product, idx) => idx !== payload.productIndex);
        default:
            return state;
    }
};

export const addToCart = (product) => {
    return {
        type: 'add',
        product
    };
};

export const removeFromCart = (productIndex) => {
    return {
        type: 'remove',
        productIndex
    };
};
