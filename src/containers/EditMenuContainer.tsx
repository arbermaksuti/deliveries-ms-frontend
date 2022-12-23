import {
  Edit,
  RadioButtonChecked,
  RadioButtonUnchecked,
} from '@mui/icons-material'
import {
  Box,
  ButtonBase,
  Card,
  Checkbox,
  TextField,
  Typography,
} from '@mui/material'
import Button from '@mui/material/Button'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import { useState } from 'react'
import { main_menu_items, menu_items } from 'src/utils/enums'
import Offer1 from 'src/assets/offer_1.webp'
import CardActions from '@mui/material/CardActions'
import { navbar_height } from 'src/utils/consts'

const EditMenuContainer = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('')
  return (
    <Box sx={{ height: `calc(90vh - ${navbar_height}px)` }}>
      <Typography variant="h6">Kategoritë</Typography>
      <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 2, mt: 2 }}>
        {main_menu_items.map((item, i) => {
          if (item.key !== 'all')
            return (
              <Card key={i}>
                <ButtonBase
                  onClick={() => setSelectedCategory(item.key)}
                  sx={{
                    pl: 1,
                    pr: 2,
                    py: 1,
                    display: 'flex',
                    alignItems: 'center',
                    backgroundColor:
                      item.key === selectedCategory
                        ? 'rgba(242, 223, 182, 0.8)'
                        : 'initial',
                  }}
                >
                  <Checkbox
                    size="small"
                    color="secondary"
                    checked={item.key === selectedCategory}
                    icon={<RadioButtonUnchecked />}
                    checkedIcon={<RadioButtonChecked />}
                    disabled={!(item.key === selectedCategory)}
                  />
                  <Typography
                    sx={{ ml: 0.5, fontSize: '16px', fontWeight: '500' }}
                  >
                    {item.title}
                  </Typography>
                </ButtonBase>
              </Card>
            )
        })}
      </Box>
      <Box sx={{ mt: 2 }}>
        {selectedCategory && (
          <Card sx={{ py: 2, px: 2 }}>
            <Box
              sx={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
              }}
            >
              <TextField
                label="Emri i kategorisë"
                variant="outlined"
                size="small"
                value={
                  main_menu_items.find((item) => item.key === selectedCategory)
                    ?.title
                }
              />
              <Button variant="contained">Ndrysho emrin</Button>
            </Box>
            <Box sx={{ mt: 2 }}>
              <Typography>Produktet: </Typography>
              <Box
                sx={{
                  display: 'flex',
                  flexWrap: 'wrap',
                  gap: 1,
                  ' >div': { width: '24%' },
                }}
              >
                {menu_items.map((oneItem, i) => (
                  <Card variant="outlined" sx={{ borderRadius: 2 }} key={i}>
                    <CardMedia
                      component="img"
                      image={oneItem.img ? oneItem.img : Offer1}
                      alt={oneItem.name}
                      height="120"
                    />
                    <CardContent sx={{ py: 1 }}>
                      <Typography variant="h5" component="div" gutterBottom>
                        {oneItem.name}
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        {oneItem.description}
                      </Typography>
                    </CardContent>
                    <CardActions
                      sx={{
                        px: 2,
                        pt: 0,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                      }}
                    >
                      <Typography sx={{ fontSize: '20px', fontWeight: '500' }}>
                        {oneItem.price}€
                      </Typography>
                      <Button
                        variant="outlined"
                        color="secondary"
                        size="small"
                        startIcon={<Edit />}
                      >
                        Modifiko
                      </Button>
                    </CardActions>
                  </Card>
                ))}
              </Box>
            </Box>
          </Card>
        )}
      </Box>
    </Box>
  )
}

export default EditMenuContainer
