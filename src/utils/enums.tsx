import {
  Call,
  Dashboard,
  DirectionsCar,
  Home,
  Microwave,
  Person,
  RoomService,
  MenuBook,
} from '@mui/icons-material'
import { Box, Button, Typography } from '@mui/material'
import moment from 'moment'
import 'moment/min/locales'
import MenuItem1 from 'src/assets/menuItem_1.jpg'
import MenuItem2 from 'src/assets/menuItem_2.jpg'
import MenuItem3 from 'src/assets/menuItem_3.jpg'
import Offer1 from 'src/assets/offer_1.webp'
import Offer2 from 'src/assets/offer_2.webp'
import { colors } from './colors'

export const roles = {
  0: 'SuperAdmin',
  1: 'Admin',
  2: 'CallCenter',
  3: 'Kitchen',
  4: 'Deliver',
}

export const leftSidebar_menu = [
  {
    title: 'Ballina',
    icon: <Dashboard />,
    path: '/dashboard',
    access: [0, 1, 2],
  },
  {
    title: 'Porositë',
    icon: <RoomService />,
    path: '/orders',
    access: [0, 1, 2],
  },
  {
    title: 'Klientët',
    icon: <Person />,
    path: '/customers',
    access: [0, 1, 2],
  },
  {
    title: 'Menyja',
    icon: <MenuBook />,
    path: '/edit-menu',
    access: [0, 1],
  },
]

export const main_menu_items = [
  {
    title: 'All',
    key: 'all',
  },
  {
    title: 'Offers',
    key: 'offers',
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

const checkStatusOfOrder = (status: number) => {
  switch (status) {
    case 1:
      return (
        <Box sx={{ backgroundColor: colors.order }}>
          <Call fontSize="small" />
          <Typography>Porosi</Typography>
        </Box>
      )
      break
    case 2:
      return (
        <Box sx={{ backgroundColor: colors.kitchen }}>
          <Microwave fontSize="small" /> <Typography>Kuzhinë</Typography>
        </Box>
      )
      break
    case 3:
      return (
        <Box sx={{ backgroundColor: colors.delivery }}>
          <DirectionsCar fontSize="small" /> <Typography>Dërgim</Typography>
        </Box>
      )
      break
    case 4:
      return (
        <Box sx={{ backgroundColor: colors.received }}>
          <Home fontSize="small" /> <Typography>Pranuar</Typography>
        </Box>
      )
      break
    default:
      return (
        <Box sx={{ backgroundColor: colors.order }}>
          <Call fontSize="small" />
          <Typography>Porosi</Typography>
        </Box>
      )
      break
  }
}

export const orders_dummy_table_columns = [
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
    headerName: 'Koha',
    minWidth: 80,
    maxWidth: 80,
    sortable: false,
  },
  {
    field: 'action',
    flex: 1,
    headerName: 'Veprime',
    minWidth: 190,
    maxWidth: 190,
    renderCell: (params: any) => {
      return (
        <div
          style={{
            flex: 1,
            display: 'flex',
            justifyContent: 'space-between',
          }}
        >
          <Button
            size="small"
            href={`tel:${params.row.phone_no}`}
            variant="contained"
            sx={{ textTransform: 'none' }}
          >
            Telefono
          </Button>
          <Button
            size="small"
            variant="contained"
            color="secondary"
            sx={{ textTransform: 'none' }}
          >
            Më shumë
          </Button>
        </div>
      )
    },
  },
]

export const orders_dummy_table_rows = [
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

export const customers_dummy_table_columns = [
  {
    field: 'total_ordes',
    flex: 1,
    headerName: 'Porositë',
    minWidth: 80,
    maxWidth: 80,
    sortable: false,
  },
  {
    field: 'phone_no',
    flex: 1,
    headerName: 'Numri i telefonit',
    minWidth: 150,
    sortable: false,
  },
  {
    field: 'name',
    flex: 1,
    headerName: 'Emri',
    minWidth: 150,
    sortable: false,
  },
  {
    field: 'location',
    flex: 1,
    headerName: 'Lokacioni',
    minWidth: 150,
    sortable: false,
  },
  {
    field: 'action',
    flex: 1,
    headerName: 'Veprime',
    minWidth: 190,
    maxWidth: 190,
    renderCell: (params: any) => {
      return (
        <div
          style={{
            flex: 1,
            display: 'flex',
            justifyContent: 'space-between',
          }}
        >
          <Button
            size="small"
            href={`tel:${params.row.phone_no}`}
            variant="contained"
            sx={{ textTransform: 'none' }}
          >
            Telefono
          </Button>
          <Button
            size="small"
            variant="contained"
            color="secondary"
            sx={{ textTransform: 'none' }}
          >
            Më shumë
          </Button>
        </div>
      )
    },
  },
]

export const customers_dummy_table_rows = [
  {
    _id: 1,
    total_ordes: 2,
    phone_no: '044758441',
    name: 'Testing Testing',
    location: 'Muharrem Fejza',
  },
  {
    _id: 2,
    total_ordes: 4,
    phone_no: '044758441',
    name: 'Testing Testing',
    location: 'Muharrem Fejza',
  },
  {
    _id: 3,
    total_ordes: 4,
    phone_no: '044758441',
    name: 'Testing Testing',
    location: 'Muharrem Fejza',
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
