import { List } from 'immutable';

export default(state = List(), payload) => {
    switch (payload.type) {
        case 'receive_products':
            return payload.products
        default:
            return state;
    }
};

function receiveProducts(products) {
    return {
        type: 'receive_products',
        products
    };
}

export function fetchProducts() {
    return function(dispatch, getState) {
        dispatch(
            receiveProducts(
                List([
                    {
                        productId: 1,
                        title: 'Honor 7 Lite Dual-SIM',
                        price: 148.90,
                        imageUrl: '/images/cellphone.jpg'
                    },
                    {
                        productId: 2,
                        title: 'Canon EOS 5D Mark IV',
                        price: 3294.90,
                        imageUrl: '/images/camera.jpg'
                    },
                    {
                        productId: 3,
                        title: 'LG F1496AD1',
                        price: 489.90,
                        imageUrl: '/images/washer.jpg'
                    },
                    {
                        productId: 4,
                        title: 'Samsung Gear S3 Classic',
                        price: 399.90,
                        imageUrl: '/images/watch.jpg'
                    },
                    {
                        productId: 5,
                        title: 'LEGO Technic 42065',
                        price: 66.90,
                        imageUrl: '/images/toy.jpg'
                    },
                    {
                        productId: 6,
                        title: 'Beats Solo3 Wireless',
                        price: 259.90,
                        imageUrl: '/images/headphones.jpg'
                    },
                ])
            )
        );

        //api.getItems().then(items => {
        //    dispatch(receiveItems(items));
        //});
    };
};
