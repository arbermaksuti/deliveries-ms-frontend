/* eslint-disable react-hooks/exhaustive-deps */
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
import { useEffect, useState } from 'react'
import Added_Item from 'src/components/AddedItem'
import { colors } from 'src/utils/colors'
import { navbar_height, rightSidebar_width } from 'src/utils/consts'
import Dynamic_Dialog from 'src/components/DynamicDialog'
import Order_Dialog from 'src/components/OrderDialog'

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
const RightSidebar: React.FC<Props> = (props) => {
  const { openedSidebar, closedSidebar, smallDevice } = props
  const [items, setItems] = useState<any>(added_items)
  const [loading, setLoading] = useState<number | string>('')
  const [discount, setDiscount] = useState<string>('0')
  const [price, setPrice] = useState<number>(2.54)
  const [discountedPrice, setDiscountedPrice] = useState<number>(price)
  const [openedDialog, setOpenedDialog] = useState<any>({
    type: 'create_order',
    show: false,
  })

  const remove_item_handler = (id: any) => {
    setLoading(id)
    setTimeout(() => {
      const new_items = items.filter((item: any) => item.id !== id)
      setItems(new_items)
      setLoading('')
    }, 1000)
  }

  useEffect(() => {
    setDiscountedPrice(
      parseFloat((price - (price / 100) * parseInt(discount)).toFixed(2))
    )
  }, [discount])

  return (
    <>
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
          sx={{
            overflowY: 'scroll',
            '::-webkit-scrollbar': { display: 'none' },
          }}
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
                <span style={{ fontWeight: 600, fontSize: '18px' }}>
                  {price}€
                </span>
              </Typography>
              <Typography>
                Total me zbritje:{' '}
                <span
                  style={{ fontWeight: 600, fontSize: '20px', lineHeight: 1 }}
                >
                  {discountedPrice}€
                </span>
              </Typography>
            </Box>
            <FormControl sx={{ width: 90 }} size="small">
              <InputLabel id="zbritje">Zbritje (%)</InputLabel>
              <Select
                label="Zbritje (%)"
                labelId="zbritje"
                id="zbritje-select"
                value={discount}
                onChange={(e) => setDiscount(e.target.value)}
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
              onClick={() =>
                setOpenedDialog({
                  ...openedDialog,
                  type: 'delete_order',
                  show: true,
                })
              }
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
              onClick={() =>
                setOpenedDialog({
                  ...openedDialog,
                  type: 'create_order',
                  show: true,
                })
              }
            >
              Krijo
            </Button>
          </Box>
        </Box>
      </Drawer>
      <Dynamic_Dialog
        opened={
          openedDialog.type === 'delete_order' ? openedDialog.show : false
        }
        onClose={() =>
          setOpenedDialog({ ...openedDialog, type: '', show: 'false' })
        }
        content={<Order_Dialog type="delete_order" />}
        firstActionsButton="Fshij"
        secondActionsButton="Vazhdo"
      />
      <Dynamic_Dialog
        opened={
          openedDialog.type === 'create_order' ? openedDialog.show : false
        }
        onClose={() =>
          setOpenedDialog({ ...openedDialog, type: '', show: 'false' })
        }
        content={<Order_Dialog type="create_order" />}
        firstActionsButton="Fshij"
        secondActionsButton="Vazhdo"
      />
    </>
  )
}

export default RightSidebar
