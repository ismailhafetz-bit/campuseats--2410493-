
const vendors = [
  {
    id: 'jazz-coffee',
    name: 'Jazz Coffee',
    location: 'Mahallah Uthman, Bloc PG Parking Lot',
    openHours: '6:00 pm - 10:00 pm',
    isOpen: true,
    menu: [
      {
        id: 'ice-butter-latte',
        name: 'Ice Butter Cream Latte',
        description: 'Caffein, Creamy, Sweet, Soft, Cold',
        price: 11.5,
        category: 'Drinks',
        available: true,
      },
      {
        id: 'iced-coffee',
        name: 'Iced Coffee',
        description: 'Chilled coffee with a smooth taste',
        price: 8.0,
        category: 'Drinks',
        available: true,
      },
      {
        id: 'hot-latte',
        name: 'Hot Latte',
        description: 'Espresso with steamed milk',
        price: 9.0,
        category: 'Drinks',
        available: true,
      },
    ],
  },
  {
    id: 'campus-bites',
    name: 'Campus Bites',
    location: 'Mahallah Food Court',
    openHours: '8:00 am - 8:00 pm',
    isOpen: true,
    menu: [
      {
        id: 'chicken-rice',
        name: 'Chicken Rice',
        description: 'Rice served with roasted chicken',
        price: 10.0,
        category: 'Rice',
        available: true,
      },
      {
        id: 'fried-noodles',
        name: 'Fried Noodles',
        description: 'Fried noodles with vegetables',
        price: 7.5,
        category: 'Noodles',
        available: true,
      },
      {
        id: 'iced-tea',
        name: 'Iced Tea',
        description: 'Refreshing chilled tea',
        price: 3.0,
        category: 'Drinks',
        available: true,
      },
    ],
  },
]

export default vendors
