import AddIcon from '@mui/icons-material/Add'
import RemoveIcon from '@mui/icons-material/Remove'
import { Box, Button, ButtonGroup, TextField, Typography } from '@mui/material'
import { useEffect, useState } from 'react'

const AddToShopDialog = () => {
  const [count, setCount] = useState<number[]>([1])

  return (
    <Box>
      <Typography sx={{ fontSize: '20px' }}>
        Jepni më shume detaje për{' '}
        {count.length > 1 ? 'këto produkte' : `këtë produkt`}
      </Typography>
      <Box
        sx={{
          mt: 2,
          display: 'flex',
          justifyContent: 'space-between',
          flexDirection: { xs: 'column-reverse', md: 'row' },
        }}
      >
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            width: '80%',
          }}
        >
          {count.map((item, i) => (
            <TextField
              placeholder={`Shënime për produktin e ${item}`}
              type="text"
              size="small"
              key={i}
              sx={{ mt: 1 }}
            />
          ))}
        </Box>
        <Box
          sx={{
            display: 'flex',
            flexDirection: { md: 'column' },
            textAlign: 'center',
          }}
        >
          <Typography sx={{ fontSize: '18px', mr: { xs: 1, md: 'initial' } }}>
            Sasia {count[count.length - 1]}
          </Typography>
          <ButtonGroup>
            <Button
              disabled={count.length <= 1 ? true : false}
              size="small"
              onClick={() => {
                if (count.length > 1) {
                  const copyCount = [...count]
                  copyCount.splice(-1)
                  setCount(copyCount)
                }
              }}
            >
              <RemoveIcon fontSize="small" />
            </Button>
            <Button
              size="small"
              onClick={() => {
                setCount((prev) => [...prev, prev[prev.length - 1] + 1])
              }}
            >
              <AddIcon fontSize="small" />
            </Button>
          </ButtonGroup>
        </Box>
      </Box>
    </Box>
  )
}

export default AddToShopDialog
