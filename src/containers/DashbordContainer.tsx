import { Box, TextField } from '@mui/material'
import { useState } from 'react'
import SelectItems from 'src/components/SelectItems'
import { menusItems } from 'src/dummyData'

const DashbordContainer = () => {
  const [selectedMenu, setSelectedMenu] = useState<number | string>(0)
  return (
    <div>
      Dashbord_Container
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          flexWrap: 'wrap',
          my: 2,
          width: 'fit-content',
          mx: 'auto',
        }}
      >
        {menusItems.map((item, index) => (
          <SelectItems
            key={index}
            title={item.title}
            selected={index === selectedMenu}
            onClick={() => setSelectedMenu(index)}
          />
        ))}
        <TextField
          label="Kërko produktin"
          variant="outlined"
          size="small"
          sx={{
            ml: { sm: 2, lg: 6 },
            ' >.MuiOutlinedInput-root': { borderRadius: '8px' },
          }}
        />
      </Box>
    </div>
  )
}

export default DashbordContainer
