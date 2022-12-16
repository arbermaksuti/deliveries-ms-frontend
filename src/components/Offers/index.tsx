import { Box } from '@mui/material'
import Carousel from 'react-material-ui-carousel'
import OfferItem from 'src/components/Offers/Item'
import { offers_items } from 'src/utils/enums'
import theme from 'src/utils/theme'

const Offers = () => {
  return (
    <Box
      sx={{
        backgroundColor: theme.palette.primary.main,
        borderRadius: 1,
        overflow: 'hidden',
        py: 1.5,
      }}
    >
      <Carousel indicatorContainerProps={{ style: { marginTop: 0 } }}>
        {offers_items.map((offer, i) => (
          <OfferItem {...offer} key={i} />
        ))}
      </Carousel>
    </Box>
  )
}

export default Offers
