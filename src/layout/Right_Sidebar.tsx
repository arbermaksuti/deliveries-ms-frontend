/* eslint-disable react/jsx-pascal-case */
import { Box, Drawer, Typography } from '@mui/material'
import { useState } from 'react'
import Added_Item from 'src/components/Added_Item'
import { colors } from 'src/utils/colors'
import { navbar_height, rightSidebar_width } from 'src/utils/consts'

const added_items = [
  {
    id: 1,
    img: '/logo192.png',
    quantity: 2,
    name: 'Quesadillas',
    price: 2.54,
    description: 'Just for testing',
  },
  {
    id: 2,
    img: '/logo192.png',
    quantity: 2,
    name: 'Quesadillas',
    price: 2.54,
    description: 'Just for testing',
  },
  {
    id: 3,
    img: '/logo192.png',
    quantity: 2,
    name: 'Quesadillas',
    price: 2.54,
    description: 'Just for testing',
  },
]

interface Props {
  openedSidebar: boolean
  closedSidebar: () => void
  smallDevice: boolean
}
const Right_Sidebar: React.FC<Props> = (props) => {
  const { openedSidebar, closedSidebar, smallDevice } = props
  const [items, setItems] = useState<any>(added_items)
  const [loading, setLoading] = useState<number | string>('')

  const remove_item_handler = (id: any) => {
    setLoading(id)
    setTimeout(() => {
      const new_items = items.filter((item: any) => item.id !== id)
      setItems(new_items)
      setLoading('')
    }, 1000)
  }
  return (
    <Drawer
      anchor="right"
      variant={smallDevice ? 'temporary' : 'permanent'}
      open={openedSidebar}
      onClose={closedSidebar}
      elevation={1}
      transitionDuration={{ enter: 300, exit: 300 }}
      PaperProps={{
        sx: {
          top: navbar_height,
          width: rightSidebar_width,
          overflowY: 'initial',
          borderLeft: `1px solid ${colors.border_color}`,
          boxShadow: 'none',
          p: 1,
        },
      }}
      BackdropProps={{ sx: { top: navbar_height } }}
    >
      <Box>
        <Typography align="center" variant="h6" sx={{ mb: 1 }} fontWeight={500}>
          Porositë e fundit
        </Typography>
        {items.map((item: any) => (
          <Added_Item
            {...item}
            key={item.id}
            loading={loading}
            onRemove={() => remove_item_handler(item.id)}
          />
        ))}
      </Box>
    </Drawer>
  )
}

export default Right_Sidebar
