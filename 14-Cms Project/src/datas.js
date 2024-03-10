let xAxisData = [
    {
        "name": 'Jan',
        "Sale": 112_000
    },
    {
        "name": 'Feb',
        "Sale": 99_000
    },
    {
        "name": 'Mar',
        "Sale": 12_090
    },
    {
        "name": 'Apr',
        "Sale": 99_000
    },
    {
        "name": 'May',
        "Sale": 54_000
    },
    {
        "name": 'Jun',
        "Sale": 85_000
    },
    {
        "name": 'Jul',
        "Sale": 34_000
    },
    {
        "name": 'Agu',
        "Sale": 18_598
    },
    {
        "name": 'Sep',
        "Sale": 0
    },
    {
        "name": 'Oct',
        "Sale": 73_078
    },
    {
        "name": 'Nov',
        "Sale": 12_900
    },
    {
        "name": 'Dev',
        "Sale": 97_000
    },
]

const newMembers = [
    {
        id: 1,
        username: 'Mahdiye',
        title: 'Web Developer',
        img: 'images/amin.jpg'
    },
    {
        id: 2,
        username: 'Shahin',
        title: 'Seo Eng',
        img: 'images/sasan.jpg'
    },
    {
        id: 3,
        username: 'Elvin',
        title: 'Weblog',
        img: 'images/zahra.jpg'
    },
    {
        id: 4,
        username: 'Nima',
        title: 'Backend Dev',
        img: 'images/qadir.jpg'
    },
]

const transactions = [
    {
        id: 1,
        customer: 'Mahdiye',
        date: '12 Jun 2022',
        amount: 123,
        status: 'Approved',
        img: 'images/qadir.jpg'
    },
    {
        id: 2,
        customer: 'Shahin',
        date: '23 Jul 2022',
        amount: 123,
        status: 'Declined',
        img: 'images/amin.jpg'
    },
    {
        id: 3,
        customer: 'Elvin',
        date: '28 May 2022',
        amount: 123,
        status: 'Pending',
        img: 'images/mmd.jpg'
    },
    {
        id: 4,
        customer: 'Nima',
        date: '1 Feb 2022',
        amount: 123,
        status: 'Approved',
        img: 'images/sasan.jpg'
    },
]

let userRows = [
    {
        id: 1,
        username: 'Mahdiye',
        avatar: 'images/qadir.jpg',
        status: 'active',
        transaction: '$129.52',
        email: 'amin@gmail.com'
    },
    {
        id: 2,
        username: 'Shahin',
        avatar: 'images/amin.jpg',
        status: 'non-active',
        transaction: '$110',
        email: 'amin@gmail.com'
    },
    {
        id: 3,
        username: 'Elvin',
        avatar: 'images/sasan.jpg',
        status: 'active',
        transaction: '$98',
        email: 'amin@gmail.com'
    },
    {
        id: 4,
        username: 'Zahra Agayi',
        avatar: 'images/zahra.jpg',
        status: 'active',
        transaction: '$0',
        email: 'amin@gmail.com'
    },
    {
        id: 5,
        username: 'Nima',
        avatar: 'images/hamze.jpg',
        status: 'active',
        transaction: '$55.98',
        email: 'amin@gmail.com'
    }
]

let products = [
    {
        id: 1,
        title: 'Asus',
        avatar: 'images/asus.jpeg',
        price: 890
    },
    {
        id: 2,
        title: 'Acer',
        avatar: 'images/acer.jpg',
        price: 890
    },
    {
        id: 3,
        title: 'HP',
        avatar: 'images/hp.jpg',
        price: 890
    },
    {
        id: 4,
        title: 'Dell',
        avatar: 'images/dell.jpg',
        price: 890
    },
]

const productsData = [
    {
        name: 'Jan',
        sales: 4000,
    },
    {
        name: 'Feb',
        sales: 3000,
    },
    {
        name: 'Mar',
        sales: 5000,
    },
]

export { xAxisData, newMembers, transactions, userRows, products, productsData }