import { RadioButtonChecked, RadioButtonUnchecked } from '@mui/icons-material'
import {
  Box,
  Button,
  Card,
  Checkbox,
  Grid,
  TextField,
  Typography,
} from '@mui/material'
import { useState } from 'react'
import MenuItem, { MenuItemProps } from 'src/components/MenuItems/Item'

interface Props {
  onClick: () => void
  category: { name: string; status: boolean; products: MenuItemProps[] }
}
const UpdateCategory: React.FC<Props> = (props) => {
  const {
    onClick,
    category: { name, status, products },
  } = props

  const [categName, setCategName] = useState<string>(name)
  const [categStatus, setCategStatus] = useState<boolean>(status)

  return (
    <Card
      sx={{
        p: 2,
        my: 2,
      }}
    >
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          flexWrap: 'wrap',
        }}
      >
        <TextField
          label="Emri i kategorisë"
          variant="outlined"
          size="small"
          value={categName}
          onChange={(e) => setCategName(e.target.value)}
          sx={{ maxWidth: { xs: 150, md: 'initial' } }}
        />
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            flexDirection: { xs: 'column', md: 'initial' },
          }}
        >
          <Typography>Statusi: </Typography>
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
            }}
          >
            <Checkbox
              size="small"
              color="secondary"
              checked={categStatus}
              onChange={(e) => !categStatus && setCategStatus(e.target.checked)}
              icon={<RadioButtonUnchecked />}
              checkedIcon={<RadioButtonChecked />}
            />
            <Typography>Aktive</Typography>{' '}
            <Checkbox
              size="small"
              color="secondary"
              checked={!categStatus}
              onChange={(e) => categStatus && setCategStatus(!e.target.checked)}
              icon={<RadioButtonUnchecked />}
              checkedIcon={<RadioButtonChecked />}
            />
            <Typography>Jo aktive</Typography>
          </Box>
        </Box>
        <Button variant="contained" sx={{ mx: { xs: 'auto', md: 'initial' } }}>
          Modifiko kategorinë
        </Button>
      </Box>
      <Box>
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            mt: 3,
            mb: 2,
          }}
        >
          <Typography>
            Produktet e kategorisë:{' '}
            <span style={{ fontWeight: '500', fontSize: '20px' }}>
              {name || 'Testing'}
            </span>
          </Typography>
          <Button variant="contained" size="small" onClick={onClick}>
            Shto produkte
          </Button>
        </Box>
        <Box>
          <Grid container spacing={1}>
            {products.map((menuItem, i) => (
              <MenuItem key={i} {...menuItem} editable onClick={onClick} />
            ))}
          </Grid>
        </Box>
      </Box>
    </Card>
  )
}

export default UpdateCategory
