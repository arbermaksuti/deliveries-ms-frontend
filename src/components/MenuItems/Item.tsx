import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Grid,
  Typography,
} from '@mui/material'
import Offer1 from 'src/assets/offer_1.webp'

interface MenuItemProps {
  img?: string
  name: string
  description: string
  price: number | string
  openAddToShopDialog: () => void
}
const MenuItem: React.FC<MenuItemProps> = (props) => {
  const { img, name, description, price, openAddToShopDialog } = props

  return (
    <Grid item xs={6} sm={4} md={3}>
      <Card variant="outlined" sx={{ borderRadius: 2 }}>
        <CardMedia
          component="img"
          image={img ? img : Offer1}
          alt={name}
          height="120"
        />
        <CardContent sx={{ py: 1 }}>
          <Typography variant="h5" component="div" gutterBottom>
            {name}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {description}
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
            {price}€
          </Typography>
          <Button
            variant="outlined"
            color="secondary"
            size="small"
            onClick={openAddToShopDialog}
          >
            Shto
          </Button>
        </CardActions>
      </Card>
    </Grid>
  )
}

export default MenuItem
