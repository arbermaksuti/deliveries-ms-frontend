/* eslint-disable react/jsx-pascal-case */
import { AddCircleOutlined, DeleteOutlined } from '@mui/icons-material'
import {
  Box,
  Button,
  Drawer,
  FormControl,
  FormControlLabel,
  InputLabel,
  MenuItem,
  Radio,
  RadioGroup,
  Select,
  TextField,
  Typography,
} from '@mui/material'
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
      <Box
        height={`calc(100% - ${navbar_height}px)`}
        sx={{ overflowY: 'scroll', '::-webkit-scrollbar': { display: 'none' } }}
      >
        <Box>
          <Typography
            align="center"
            variant="h6"
            sx={{ mb: 1 }}
            fontWeight={500}
          >
            Porosia e re
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
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}
        >
          <Box>
            <Typography>
              Total:{' '}
              <span style={{ fontWeight: 600, fontSize: '18px' }}>2.54€</span>
            </Typography>
            <Typography>
              Total me zbritje:{' '}
              <span
                style={{ fontWeight: 600, fontSize: '20px', lineHeight: 1 }}
              >
                2.54€
              </span>
            </Typography>
          </Box>
          <FormControl sx={{ width: 90 }} size="small">
            <InputLabel id="zbritje">Zbritje (%)</InputLabel>
            <Select
              label="Zbritje (%)"
              labelId="zbritje"
              id="zbritje-select"
              defaultValue="no"
              value="0"
              // value={discount}
              // onChange={(e) => setDiscount(e.target.value)}
            >
              <MenuItem value={0}>
                <em>Jo</em>
              </MenuItem>
              <MenuItem value={5}>5%</MenuItem>
              <MenuItem value={25}>25%</MenuItem>
              <MenuItem value={50}>50%</MenuItem>
              <MenuItem value={100}>100%</MenuItem>
            </Select>
          </FormControl>
        </Box>
        <TextField
          label="Adresa e klientit"
          variant="outlined"
          size="small"
          fullWidth
          sx={{ my: 1 }}
        />
        <TextField
          label="Emri i klientit"
          variant="outlined"
          size="small"
          fullWidth
          sx={{ my: 1 }}
        />
        <TextField
          label="Numri i klientit"
          variant="outlined"
          size="small"
          fullWidth
          sx={{ my: 1 }}
        />
        <TextField
          multiline
          rows={3}
          label="Koment rreth porosisë"
          size="small"
          fullWidth
          sx={{ my: 1 }}
        />
        <Box sx={{ my: 2 }}>
          <Typography fontWeight={500}>Zgjedh pikën:</Typography>
          <RadioGroup row sx={{ justifyContent: 'space-evenly' }}>
            <FormControlLabel
              label="Qendër"
              value="pika1"
              labelPlacement="bottom"
              control={<Radio />}
            />
            <FormControlLabel
              label="Rruga C"
              value="pika2"
              labelPlacement="bottom"
              control={<Radio />}
            />
          </RadioGroup>
        </Box>
        <Box textAlign="right" sx={{ mt: 4 }}>
          <Button
            variant="contained"
            size="small"
            startIcon={<DeleteOutlined />}
            color="error"
            // onClick={() => setNewDelivery(false)}
          >
            Fshij
          </Button>
          <Button
            variant="contained"
            size="small"
            sx={{ ml: 1 }}
            startIcon={<AddCircleOutlined />}
            color="success"
          >
            Krijo
          </Button>
        </Box>
      </Box>
    </Drawer>
  )
}

export default Right_Sidebar
