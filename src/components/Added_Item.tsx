import { KeyboardArrowDown } from '@mui/icons-material'
import { Box, Button, CircularProgress, Typography } from '@mui/material'
import { useState } from 'react'

interface Props {
  id: number | string
  img: string
  quantity: number | string
  name: string
  price: number | string
  description: string
  loading: number | string
  onRemove: (id: any) => void
}
const Added_Item: React.FC<Props> = (props) => {
  const { id, img, quantity, name, price, description, loading, onRemove } =
    props
  const [removeItem, setRemoveItem] = useState<boolean>(false)

  return (
    <Box
      sx={{
        mb: 1,
        border: '1px solid rgba(0, 0, 0, 0.23)',
        borderRadius: '8px',
        p: 1.5,
        pb: removeItem ? 1 : 1.5,
        overflow: 'hidden',
        maxHeight: removeItem ? '200px' : '60px',
        transition: 'all 0.2s linear',
      }}
    >
      {loading === id ? (
        <Box
          sx={{
            maxHeight: `calc(60px - 24px - 2px)`,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <CircularProgress />
        </Box>
      ) : (
        <>
          <Box
            sx={{
              maxHeight: `calc(60px - 24px - 2px)`,
              display: 'flex',
              alignItems: 'center',
              margin: 'auto',
              position: 'relative',
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
            {!removeItem && (
              <Box
                sx={{
                  position: 'absolute',
                  bottom: '-14px',
                  right: '-10px',
                  display: 'flex',
                  alignItems: 'center',
                  cursor: 'pointer',
                }}
                onClick={() => setRemoveItem(true)}
              >
                <Typography fontSize="small">Më shumë</Typography>
                <KeyboardArrowDown fontSize="small" />
              </Box>
            )}
          </Box>
          <Box
            sx={{
              mt: 1,
              pl: 0.5,
              display: 'flex',
              flexDirection: 'column',
            }}
          >
            <Typography sx={{ fontSize: '14px' }}>{description}</Typography>
            <Box sx={{ ml: 'auto', mt: 0.5 }}>
              <Button
                variant="contained"
                size="small"
                color="error"
                sx={{ mr: 1 }}
                onClick={onRemove}
              >
                Fshij
              </Button>
              <Button
                variant="contained"
                size="small"
                onClick={() => setRemoveItem(false)}
              >
                Mbyll
              </Button>
            </Box>
          </Box>
        </>
      )}
    </Box>
  )
}

export default Added_Item
