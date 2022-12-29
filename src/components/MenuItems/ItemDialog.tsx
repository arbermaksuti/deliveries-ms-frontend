import {
  AddPhotoAlternate,
  Edit,
  RadioButtonChecked,
  RadioButtonUnchecked,
} from '@mui/icons-material'
import {
  Box,
  Button,
  Checkbox,
  Fab,
  FormControl,
  IconButton,
  InputLabel,
  MenuItem,
  Select,
  TextField,
  Typography,
} from '@mui/material'
import React, { useState } from 'react'
import Offer1 from 'src/assets/offer_1.webp'
import { main_menu_items } from 'src/utils/enums'
import theme from 'src/utils/theme'

interface Props {
  img: string
  name: string
  description: string
  price: string | number
}

const ItemDialog: React.FC<Props> = (props) => {
  const { img, name, description, price } = props
  const [itemImg, setItemImg] = useState<string>(img)
  const [itemCateg, setItemCateg] = useState<string>('Offers')
  const [itemName, setITemName] = useState<string>(name)
  const [itemDesc, setITemDesc] = useState<string>(description)
  const [itemPrice, setITemPrice] = useState<string>(price.toString())
  const [itemStatus, setItemStatus] = useState<boolean>(true)

  return (
    <>
      <Typography sx={{ mb: 2 }} variant="h6">
        Modifikimi i produktit: {name}
      </Typography>
      <Box
        sx={{
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'space-between',
          '> div': { width: { xs: '100%', sm: '48%', md: '45%' } },
        }}
      >
        <TextField
          value={itemName}
          onChange={(e) => setITemName(e.target.value)}
          label="Emri i produktit"
          variant="outlined"
          size="small"
        />
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
          }}
        >
          <Typography>Statusi: </Typography>
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
            }}
          >
            <Checkbox
              size="small"
              color="secondary"
              checked={itemStatus}
              onChange={(e) => !itemStatus && setItemStatus(!e.target.checked)}
              icon={<RadioButtonUnchecked />}
              checkedIcon={<RadioButtonChecked />}
            />
            <Typography>Aktive</Typography>{' '}
            <Checkbox
              size="small"
              color="secondary"
              checked={!itemStatus}
              onChange={(e) => itemStatus && setItemStatus(!e.target.checked)}
              icon={<RadioButtonUnchecked />}
              checkedIcon={<RadioButtonChecked />}
            />
            <Typography>Jo aktive</Typography>
          </Box>
        </Box>
        <TextField
          value={itemDesc}
          onChange={(e) => setITemDesc(e.target.value)}
          label="Përbërësit e produktit"
          variant="outlined"
          size="small"
          multiline
          rows={5}
          sx={{ my: 2 }}
        />
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            my: 2,
          }}
        >
          <Box
            sx={{
              position: 'relative',
              maxHeight: '132px',
            }}
          >
            <Box
              component="img"
              alt={itemName || 'image'}
              src={itemImg || Offer1}
              sx={{ height: '100%', width: '100%', borderRadius: 1 }}
            />
            <Box
              sx={{
                position: 'absolute',
                top: 0,
                right: 0,
              }}
            >
              <input
                accept="image/*"
                id="contained-button-file"
                type="file"
                style={{ display: 'none' }}
                onChange={(e) => {
                  if (e.target.files) {
                    setItemImg(URL.createObjectURL(e.target.files[0]))
                  }
                }}
              />
              <label htmlFor="contained-button-file">
                <IconButton
                  component="span"
                  sx={{
                    border: `1px solid ${theme.palette.primary.main}`,
                  }}
                  size="small"
                >
                  <Edit color="primary" fontSize="small" />
                </IconButton>
              </label>
            </Box>
          </Box>
        </Box>
        <FormControl>
          <InputLabel id="demo-simple-select-label">Kategoria</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={itemCateg}
            label="Kategoria"
            onChange={(e) => setItemCateg(e.target.value)}
            size="small"
          >
            {main_menu_items.map((item, i) => (
              <MenuItem value={item.title} key={i}>
                {item.title}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
        <TextField
          value={itemPrice}
          onChange={(e) => setITemPrice(e.target.value)}
          label="Çmimi"
          variant="outlined"
          size="small"
        />
      </Box>
    </>
  )
}

export default ItemDialog
