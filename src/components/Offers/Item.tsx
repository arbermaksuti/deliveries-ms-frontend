import { Box, Button, Typography } from '@mui/material'
import React from 'react'
import theme from 'src/utils/theme'

interface OfferItemInterface {
  img: string
  name: string
  description?: string
  euroPrice: string | number
  centPrice: string | number
}

const OffersItem: React.FC<OfferItemInterface> = (props) => {
  const { img, name, description, euroPrice, centPrice } = props
  return (
    <Box
      sx={{
        py: 1,
        px: 3,
        display: 'flex',
        alignItems: 'center',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
      }}
    >
      <Box
        sx={{
          width: { xs: '50%', md: '30%' },
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          maxHeight: '100px',
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
          width: { xs: '50%', md: '40%' },
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
              backgroundColor: theme.palette.primary.light,
              textAlign: 'center',
            }}
          >
            {description}
          </Typography>
        )}
      </Box>
      <Box
        sx={{
          display: 'flex',
          alignItems: { xs: 'center', md: 'flex-end' },
          justifyContent: 'space-between',
          flexDirection: { md: 'column' },
          width: { xs: '100%', md: '30%' },
          mt: { xs: 2, md: 'initial' },
        }}
      >
        <Box sx={{ display: 'flex' }}>
          <Typography
            sx={{ fontSize: { xs: '30px', md: '50px' }, fontWeight: '700' }}
          >
            €
          </Typography>
          <Typography
            sx={{
              fontSize: { xs: '40px', md: '80px' },
              fontWeight: '700',
              mt: { md: '-5px' },
              ml: 1,
            }}
          >
            {euroPrice}
          </Typography>
          <Typography
            sx={{ fontSize: { xs: '30px', md: '50px' }, fontWeight: '700' }}
          >
            {centPrice.toString().padEnd(2, '0')}
          </Typography>
        </Box>
        <Button variant="outlined" size="small" color="secondary">
          Shto në shportë
        </Button>
      </Box>
    </Box>
  )
}

export default OffersItem
