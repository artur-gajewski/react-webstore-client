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
                        productId: 18346282,
                        title: 'Honor 7 Lite Dual-SIM',
                        specs: 'The P9 lite borrows the sharp edges and straight lines from the flagship P9 while the Honor 7 Lite is curvier. The difference is only skin deep here, as both phones share a pretty capable interior.',
                        price: 148.90,
                        imageUrl: '/images/cellphone.jpg'
                    },
                    {
                        productId: 23342454,
                        title: 'Canon EOS 5D Mark IV',
                        specs: 'The EOS 5D Mark IV camera builds on the powerful legacy of the 5D series, offering amazing refinements in image quality, performance and versatility. Canon\'s commitment to imaging excellence is the soul of the EOS 5D Mark IV. Wedding and portrait photographers, nature and landscape shooters, as well as creative videographers will appreciate the brilliance and power that the EOS 5D Mark IV delivers. Superb image quality is achieved with Canon\'s all-new 30.4 Megapixel full-frame sensor, and more!',
                        price: 3294.90,
                        imageUrl: '/images/camera.jpg'
                    },
                    {
                        productId: 31138264,
                        title: 'LG F1496AD1',
                        specs: '13 built-in programs, Intelligent Load recognition, Aquacontrol: AquaStop safety hose, Smart Diagnosis (telephone fault diagnosis), Electronic balance control, Start time delay (3-19 hours) and time remaining display, parental control, beep on / off, German plaintext control panel.',
                        price: 489.90,
                        imageUrl: '/images/washer.jpg'
                    },
                    {
                        productId: 48856334,
                        title: 'Samsung Gear S3 Classic',
                        specs: 'The successor to last year\'s Gear S2, the Samsung Gear S3 is the smartwatch for the new generation. With the Apple Watch Series 2 heralding serious new tech, the rest of the smartwatch crowd has had to up its game.',
                        price: 399.90,
                        imageUrl: '/images/watch.jpg'
                    },
                    {
                        productId: 55536249,
                        title: 'LEGO Technic 42065',
                        specs: 'Spin, turn, clamber over obstacles and race at breakneck speed with this fully motorized, remote-controlled LEGO® Technic RC Tracked Racer, featuring a lime-green, white and black color scheme with decorative stickers, driver’s cab with roll bars and two large tracks, each powered by six wheels. Drive forward or backward, left or right and make 360° turns. Rebuild to create an RC Off-Road Truck.',
                        price: 66.90,
                        imageUrl: '/images/toy.jpg'
                    },
                    {
                        productId: 60035270,
                        title: 'Beats Solo3 Wireless',
                        specs: 'With up to 40 hours of battery life, Beats Solo 3 Wireless is your perfect everyday headphone. Get the most out of your music with an award-winning, emotionally charged Beats listening experience.',
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
