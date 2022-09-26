import { Dashboard, Person, RoomService } from '@mui/icons-material'
import Offer1 from 'src/assets/offer_1.webp'
import Offer2 from 'src/assets/offer_2.webp'

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
    description: 'Ofert per 2 jave',
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
