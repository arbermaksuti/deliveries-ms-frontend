import AddIcon from '@mui/icons-material/Add'
import RemoveIcon from '@mui/icons-material/Remove'
import { Box, Button, ButtonGroup, TextField, Typography } from '@mui/material'
import { useState } from 'react'

const AddToShopDialog = () => {
  const [count, setCount] = useState<number>(1)

  return (
    <Box>
      <Typography sx={{ fontSize: '20px' }}>
        Jepni më shume detaje për {count > 1 ? 'këto produkte' : `këtë produkt`}
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
          <TextField
            placeholder={`Shënime për ${
              count > 1 ? 'këto produkte' : `këtë produkt`
            }`}
            type="text"
            variant="outlined"
            size="small"
            multiline
            rows={5}
            maxRows={10}
            sx={{ mt: 1 }}
          />
        </Box>
        <Box
          sx={{
            display: 'flex',
            flexDirection: { md: 'column' },
            textAlign: 'center',
          }}
        >
          <Typography sx={{ fontSize: '18px', mr: { xs: 1, md: 'initial' } }}>
            Sasia {count}
          </Typography>
          <ButtonGroup>
            <Button
              disabled={count <= 1 ? true : false}
              size="small"
              onClick={() => {
                if (count > 1) {
                  setCount((prev) => prev - 1)
                }
              }}
            >
              <RemoveIcon fontSize="small" />
            </Button>
            <Button
              size="small"
              onClick={() => {
                setCount((prev) => prev + 1)
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
