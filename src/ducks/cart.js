export default(state = [], payload) => {
    switch (payload.type) {
        case 'add':
            return [...state, payload.item];
        case 'remove':
            return state.filter((item, idx) => idx !== payload.itemIndex);
        default:
            return state;
    }
};

export const addToCart = (item) => {
    return {
        type: 'add',
        item
    };
};

export const removeFromCart = (itemIndex) => {
    return {
        type: 'remove',
        itemIndex
    };
};
