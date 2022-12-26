import { Edit } from '@mui/icons-material'
import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Grid,
  IconButton,
  Typography,
  useMediaQuery,
} from '@mui/material'
import Offer1 from 'src/assets/offer_1.webp'

export interface MenuItemProps {
  img?: string
  name: string
  description: string
  price: number | string
  editable?: boolean
  onClick?: () => void
}
const MenuItem: React.FC<MenuItemProps> = (props) => {
  const { img, name, description, price, editable, onClick } = props
  const smallDevice = useMediaQuery(
    (theme: any) => theme.breakpoints.down('md'),
    {
      defaultMatches: true,
      noSsr: false,
    }
  )

  return (
    <Grid item xs={6} sm={editable ? 3 : 4} md={3}>
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
          {editable ? (
            smallDevice ? (
              <IconButton
                color="secondary"
                size="small"
                sx={{ border: '1px solid', borderRadius: '10px' }}
                onClick={onClick}
              >
                <Edit />
              </IconButton>
            ) : (
              <Button
                variant="outlined"
                color="secondary"
                size="small"
                startIcon={<Edit fontSize="small" />}
                onClick={onClick}
              >
                Modifiko
              </Button>
            )
          ) : (
            <Button
              variant="outlined"
              color="secondary"
              size="small"
              onClick={onClick}
            >
              Shto
            </Button>
          )}
        </CardActions>
      </Card>
    </Grid>
  )
}

export default MenuItem
