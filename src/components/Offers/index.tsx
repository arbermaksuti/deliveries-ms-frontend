import { Box } from '@mui/material'
import Carousel from 'react-material-ui-carousel'
import OfferItem from 'src/components/Offers/Item'
import { offers_items } from 'src/utils/enums'

const index = () => {
  return (
    <Box
      sx={{
        backgroundColor: '#F8D68C',
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

export default index
