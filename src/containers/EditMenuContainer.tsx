import {
  Edit,
  RadioButtonChecked,
  RadioButtonUnchecked,
} from '@mui/icons-material'
import {
  Box,
  ButtonBase,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Checkbox,
  Grid,
  TextField,
  Typography,
} from '@mui/material'
import Button from '@mui/material/Button'
import { useState } from 'react'
import { navbar_height } from 'src/utils/consts'
import { main_menu_items, menu_items } from 'src/utils/enums'
import Offer1 from 'src/assets/offer_1.webp'
import useMediaQuery from '@mui/material/useMediaQuery'
import IconButton from '@mui/material/IconButton'

const EditMenuContainer = () => {
  const smallDevice = useMediaQuery(
    (theme: any) => theme.breakpoints.down('md'),
    {
      defaultMatches: true,
      noSsr: false,
    }
  )

  const [selectedCategory, setSelectedCategory] = useState<string>('')
  return (
    <Box sx={{ height: `calc(90vh - ${navbar_height}px)` }}>
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          mt: { xs: 4, md: 'initial' },
        }}
      >
        <Typography variant="h6">Kategoritë</Typography>
        <Button size="small" variant="contained">
          Shto kategori të re
        </Button>
      </Box>
      <Box
        sx={{
          display: 'flex',
          flexWrap: 'wrap',
          gap: 2,
          mt: 2,
        }}
      >
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
      {selectedCategory && (
        <Card
          sx={{
            p: 2,
            my: 2,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            // flexDirection: 'column',
          }}
        >
          <TextField
            label="Emri i kategorisë"
            variant="outlined"
            size="small"
            value="Testing"
            defaultValue="Testing"
            sx={{ maxWidth: { xs: 150, md: 'initial' } }}
          />
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              flexDirection: { xs: 'column', md: 'initial' },
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
                checked
                icon={<RadioButtonUnchecked />}
                checkedIcon={<RadioButtonChecked />}
                // disabled={!(item.key === selectedCategory)}
              />
              <Typography>Aktive</Typography>{' '}
              <Checkbox
                size="small"
                color="secondary"
                checked={false}
                icon={<RadioButtonUnchecked />}
                checkedIcon={<RadioButtonChecked />}
                // disabled={!(item.key === selectedCategory)}
              />
              <Typography>Jo aktive</Typography>
            </Box>
          </Box>
          <Button
            variant="contained"
            sx={{ mx: { xs: 'auto', md: 'initial' } }}
          >
            Modifiko kategorinë
          </Button>
        </Card>
      )}
      <Box sx={{ py: 3 }}>
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}
        >
          <Typography variant="h6">Produktet</Typography>
          <TextField
            label="Kërko produktin"
            variant="outlined"
            size="small"
            sx={{
              mt: 1,
              // ' >.MuiOutlinedInput-root': { borderRadius: '8px' },
            }}
          />
        </Box>
        {main_menu_items.map((item, i) => {
          if (item.key !== 'all')
            return (
              <Card
                sx={{
                  p: 2,
                  pt: 1,
                  mt: 2,
                }}
                key={i}
              >
                <Typography
                  sx={{ fontSize: '20px', fontWeight: '500', mb: 1.2 }}
                >
                  {item.title}
                </Typography>
                <Grid container spacing={1}>
                  {menu_items.slice(0, 4).map((oneItem, i) => (
                    <Grid key={i} item xs={6} sm={3} md={3}>
                      <Card
                        variant="outlined"
                        sx={{ borderRadius: 2, width: 'fit-content' }}
                      >
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
                          <Typography
                            sx={{ fontSize: '20px', fontWeight: '500' }}
                          >
                            {oneItem.price}€
                          </Typography>
                          {smallDevice ? (
                            <IconButton
                              color="secondary"
                              size="small"
                              sx={{ border: '1px solid', borderRadius: '10px' }}
                            >
                              <Edit />
                            </IconButton>
                          ) : (
                            <Button
                              variant="outlined"
                              color="secondary"
                              size="small"
                              startIcon={<Edit fontSize="small" />}
                            >
                              Modifiko
                            </Button>
                          )}
                        </CardActions>
                      </Card>
                    </Grid>
                  ))}
                </Grid>
              </Card>
            )
        })}
      </Box>
    </Box>
  )
}

export default EditMenuContainer
