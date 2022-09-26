import { Box, Typography } from '@mui/material'
import React from 'react'

interface OfferItemInterface {
  img: string
  name: string
  description?: string
  euroPrice: string | number
  centPrice: string | number
}

const Item: React.FC<OfferItemInterface> = (props) => {
  const { img, name, description, euroPrice, centPrice } = props
  return (
    <Box
      sx={{
        py: 1,
        px: 3,
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
      }}
    >
      <Box
        sx={{
          width: { md: '30%' },
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          maxHeight: '150px',
        }}
      >
        <img
          src={img}
          alt="Offer"
          style={{ maxWidth: '100%', maxHeight: '100%' }}
        />
      </Box>
      <Box
        sx={{
          width: { md: '40%' },
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <Typography
          sx={{
            fontSize: '26px',
            fontWeight: '600',
            textAlign: 'center',
            textTransform: 'uppercase',
          }}
        >
          {name}
        </Typography>
        {description && (
          <Typography
            sx={{
              p: 1,
              mx: 'auto',
              borderRadius: 1,
              fontSize: '20px',
              width: 'fit-content',
              backgroundColor: '#F9E4B1',
            }}
          >
            {description}
          </Typography>
        )}
      </Box>
      <Box
        sx={{
          width: { md: '30%' },
          display: 'flex',
          justifyContent: 'flex-end',
        }}
      >
        <Typography sx={{ fontSize: '50px', fontWeight: '700' }}>€</Typography>
        <Typography
          sx={{
            fontSize: { xs: '60px', md: '120px' },
            fontWeight: '700',
            mt: { md: '-5px' },
            ml: 1,
          }}
        >
          {euroPrice}
        </Typography>
        <Typography sx={{ fontSize: '50px', fontWeight: '700' }}>
          {centPrice.toString().padEnd(2, '0')}
        </Typography>
      </Box>
    </Box>
  )
}

export default Item
