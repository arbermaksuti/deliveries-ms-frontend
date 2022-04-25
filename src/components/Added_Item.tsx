import { Close } from '@mui/icons-material'
import { Box, CircularProgress, IconButton, Typography } from '@mui/material'
import { useState } from 'react'
import { colors } from 'src/utils/colors'

interface Props {
  id: number | string
  img: string
  quantity: number | string
  name: string
  price: number | string
  smallDevice: boolean
  loading: number | string
  onRemove: (id: any) => void
}
const Added_Item: React.FC<Props> = (props) => {
  const { id, img, quantity, name, price, smallDevice, loading, onRemove } =
    props
  const [removeItem, setRemoveItem] = useState<boolean>(false)

  return (
    <Box
      sx={{
        mb: 1,
        border: '1px solid rgba(0, 0, 0, 0.23)',
        borderRadius: '8px',
        px: 1.5,
        py: 0.8,
        height: '60px',
        position: 'relative',
        overflow: 'hidden',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
      onMouseEnter={() => {
        !smallDevice && setRemoveItem(true)
      }}
      onMouseLeave={() => {
        !smallDevice && setRemoveItem(false)
      }}
      onClick={() => {
        smallDevice && setRemoveItem(!removeItem)
      }}
    >
      {loading === id ? (
        <CircularProgress />
      ) : (
        <Box
          sx={{
            position: 'absolute',
            top: removeItem ? '-62px' : 0,
            bottom: 0,
            left: 0,
            right: 0,
            transition: 'top 0.2s',
            overflow: 'hidden',
          }}
        >
          <Box
            sx={{
              height: '100%',
              maxHeight: '60px',
              width: '100%',
              display: 'flex',
              alignItems: 'center',
              px: 1.5,
              py: 0.8,
            }}
          >
            <img src={img} alt="Product" width={40} />
            <Box display="flex" alignItems="center" sx={{ ml: 1 }}>
              <Typography fontSize="medium">{quantity}</Typography>
              <Typography color="success" sx={{ mx: 0.5 }} fontSize="smaller">
                x
              </Typography>
              <Typography fontWeight={500} fontSize="larger">
                {name}
              </Typography>
            </Box>
            <Typography
              sx={{ ml: 'auto', fontSize: 'larger', fontWeight: 500 }}
            >
              {price}€
            </Typography>
          </Box>
          <Box
            sx={{
              height: '100%',
              maxHeight: '60px',
              width: '100%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              px: 1.5,
              py: 0.8,
              backgroundColor: '#ee2400',
            }}
          >
            <Typography sx={{ fontSize: 'small', color: colors.default_white }}>
              Dëshiroj të e largoj këtë porosi!
            </Typography>
            <IconButton onClick={onRemove}>
              <Close sx={{ color: colors.default_white }} />
            </IconButton>
          </Box>
        </Box>
      )}
    </Box>
  )
}

export default Added_Item
