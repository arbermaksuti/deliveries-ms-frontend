import { Dashboard, Person, RoomService } from '@mui/icons-material'
import Offer1 from 'src/assets/offer_1.webp'
import Offer2 from 'src/assets/offer_2.webp'
import MenuItem1 from 'src/assets/menuItem_1.jpg'
import MenuItem2 from 'src/assets/menuItem_2.jpg'
import MenuItem3 from 'src/assets/menuItem_3.jpg'

export const leftSidebar_menu = [
  {
    title: 'Ballina',
    icon: <Dashboard />,
    path: '/dashboard',
    access: [0, 1, 2, 3, 4],
  },
  {
    title: 'Porositë',
    icon: <RoomService />,
    path: '/orders',
    access: [0, 1, 2, 3, 4],
  },
  {
    title: 'Klientët',
    icon: <Person />,
    path: '/customers',
    access: [0, 1, 2, 3, 4],
  },
]

export const main_menu_items = [
  {
    title: 'All',
    key: 'all',
  },
  {
    title: 'Bowl',
    key: 'bowl',
  },
  {
    title: 'Burrito',
    key: 'burrito',
  },
  {
    title: 'Burgers',
    key: 'burgers',
  },
  {
    title: 'Taquito',
    key: 'taquito',
  },
  {
    title: 'Chimichanga',
    key: 'chimichanga',
  },
  {
    title: 'Quesadilla',
    key: 'quesadilla',
  },
  {
    title: 'Expres Tacos',
    key: 'exprestacos',
  },
  {
    title: 'Sweet & Salty',
    key: 'sweetsalty',
  },
]

export const offers_items = [
  {
    img: Offer1,
    name: 'Hamburger',
    description: 'Ofertë per 2 javë',
    euroPrice: 3,
    centPrice: 99,
  },
  {
    img: Offer2,
    name: 'Quesadilla',
    description: 'Testing Offers',
    euroPrice: 5,
    centPrice: 0,
  },
]

export const menu_items = [
  {
    img: MenuItem1,
    name: 'Hamburger',
    description:
      'Onion soup mix, lean ground beef, soy sauce, cheddar cheese, worcestershire sauce',
    price: 1.99,
  },
  {
    img: MenuItem2,
    name: 'Burrito',
    description:
      'Onion soup mix, lean ground beef, soy sauce, cheddar cheese, worcestershire sauce',
    price: 0.45,
  },
  {
    img: MenuItem3,
    name: 'Burrito',
    description:
      'Onion soup mix, lean ground beef, soy sauce, cheddar cheese, worcestershire sauce',
    price: 0.45,
  },
  {
    img: MenuItem1,
    name: 'Hamburger',
    description:
      'Onion soup mix, lean ground beef, soy sauce, cheddar cheese, worcestershire sauce',
    price: 1.99,
  },
  {
    img: MenuItem2,
    name: 'Burrito',
    description:
      'Onion soup mix, lean ground beef, soy sauce, cheddar cheese, worcestershire sauce',
    price: 0.45,
  },
  {
    img: MenuItem3,
    name: 'Burrito',
    description:
      'Onion soup mix, lean ground beef, soy sauce, cheddar cheese, worcestershire sauce',
    price: 0.45,
  },
  {
    img: MenuItem1,
    name: 'Hamburger',
    description:
      'Onion soup mix, lean ground beef, soy sauce, cheddar cheese, worcestershire sauce',
    price: 1.99,
  },
  {
    img: MenuItem2,
    name: 'Burrito',
    description:
      'Onion soup mix, lean ground beef, soy sauce, cheddar cheese, worcestershire sauce',
    price: 0.45,
  },
  {
    img: MenuItem3,
    name: 'Burrito',
    description:
      'Onion soup mix, lean ground beef, soy sauce, cheddar cheese, worcestershire sauce',
    price: 0.45,
  },
]
