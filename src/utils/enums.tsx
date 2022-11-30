import {
  Call,
  Dashboard,
  DirectionsCar,
  Home,
  Microwave,
  Person,
  RoomService,
} from '@mui/icons-material'
import { Box, Button, Typography } from '@mui/material'
import moment from 'moment'
import 'moment/min/locales'
import MenuItem1 from 'src/assets/menuItem_1.jpg'
import MenuItem2 from 'src/assets/menuItem_2.jpg'
import MenuItem3 from 'src/assets/menuItem_3.jpg'
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

export const dummy_table_rows = [
  {
    _id: 1,
    delivery_id: 12344,
    phone_no: '044758441',
    status: 1,
    name: 'Testing Testing',
    location: 'Muharrem Fejza',
    ordered_time: moment().locale('sq').format('LT'),
  },
  {
    _id: 2,
    delivery_id: 12344,
    phone_no: '044758441',
    status: 2,
    name: 'Testing Testing',
    location: 'Muharrem Fejza',
    ordered_time: moment().locale('sq').format('LT'),
  },
  {
    _id: 3,
    delivery_id: 12344,
    phone_no: '044758441',
    status: 3,
    name: 'Testing Testing',
    location: 'Muharrem Fejza',
    ordered_time: moment().locale('sq').format('LT'),
  },
  {
    _id: 4,
    delivery_id: 12344,
    phone_no: '044758441',
    status: 4,
    name: 'Testing Testing',
    location: 'Muharrem Fejza',
    ordered_time: moment().locale('sq').format('LT'),
  },
]
const checkStatusOfOrder = (status: number) => {
  switch (status) {
    case 1:
      return (
        <Box sx={{ backgroundColor: '#C3B59F' }}>
          <Call fontSize="small" />
          <Typography>Porosi</Typography>
        </Box>
      )
      break
    case 2:
      return (
        <Box sx={{ backgroundColor: '#F19A3E' }}>
          <Microwave fontSize="small" /> <Typography>Kuzhinë</Typography>
        </Box>
      )
      break
    case 3:
      return (
        <Box sx={{ backgroundColor: '#93BEDF' }}>
          <DirectionsCar fontSize="small" /> <Typography>Dërgim</Typography>
        </Box>
      )
      break
    case 4:
      return (
        <Box sx={{ backgroundColor: '#5EFC8D' }}>
          <Home fontSize="small" /> <Typography>Pranuar</Typography>
        </Box>
      )
      break
    default:
      return (
        <Box sx={{ backgroundColor: '#C3B59F' }}>
          <Call fontSize="small" />
          <Typography>Porosi</Typography>
        </Box>
      )
      break
  }
}
export const dummy_table_columns = [
  {
    field: 'delivery_id',
    flex: 1,
    minWidth: 80,
    maxWidth: 80,
    headerName: 'Porosia',
    sortable: false,
  },
  {
    field: 'phone_no',
    flex: 1,
    minWidth: 100,
    maxWidth: 100,
    headerName: 'Numri i telefonit',
    sortable: false,
  },
  {
    field: 'status',
    flex: 1,
    minWidth: 120,
    maxWidth: 120,
    headerName: 'Statusi Aktual',
    renderCell: (params: any) => (
      <Box
        sx={{
          '>div': {
            display: 'flex',
            alignItems: 'center',
            borderRadius: 1,
            px: 1,
            py: 0.5,
            width: 100,
            '>p': { ml: 1 },
          },
        }}
      >
        {checkStatusOfOrder(params.formattedValue)}
      </Box>
    ),
    sortable: false,
  },
  {
    field: 'name',
    flex: 1,
    minWidth: 150,
    headerName: 'Emri',
    sortable: false,
  },
  {
    field: 'location',
    flex: 1,
    minWidth: 150,
    headerName: 'Lokacioni',
    sortable: false,
  },
  {
    field: 'ordered_time',
    flex: 1,
    minWidth: 80,
    maxWidth: 80,
    headerName: 'Koha',
    sortable: false,
  },
  {
    field: 'action',
    headerName: 'Actions',
    flex: 1,
    minWidth: 110,
    maxWidth: 110,
    renderCell: () => (
      <div style={{ flex: 1, display: 'flex', padding: 3 }}>
        <Button size="small" variant="contained" sx={{ textTransform: 'none' }}>
          Më shumë
        </Button>
      </div>
    ),
  },
]

export const frequent_orders = [
  {
    name: 'Burger',
    img: Offer1,
    total: 12,
  },
  {
    name: 'Burrito',
    img: Offer2,
    total: 5,
  },
  {
    name: 'Chicken',
    img: Offer1,
    total: 1,
  },
]

export const frequent_customers = [
  {
    phone: '044412213',
    total: 12,
  },
  {
    phone: '044412213',
    total: 10,
  },
  {
    phone: '044412213',
    total: 10,
  },
]
