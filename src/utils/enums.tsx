import { Dashboard, Person, RoomService } from '@mui/icons-material'

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
