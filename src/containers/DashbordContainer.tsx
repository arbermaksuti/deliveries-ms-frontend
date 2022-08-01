import { Box, TextField } from '@mui/material'
import { useState } from 'react'
import MenuItems from 'src/components/MenuItems'
import SelectItems from 'src/components/SelectItems'
import { main_menu_items } from 'src/utils/enums'

const DashbordContainer = () => {
  const [selectedMenu, setSelectedMenu] = useState<string>('all')

  return (
    <>
      Dashbord_Container
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          flexWrap: 'wrap',
          my: 2,
        }}
      >
        {main_menu_items.map((item, index) => (
          <SelectItems
            key={index}
            title={item.title}
            selected={item.key === selectedMenu}
            onClick={() => setSelectedMenu(item.key)}
          />
        ))}
        <TextField
          label="Kërko produktin"
          variant="outlined"
          size="small"
          sx={{
            ml: { md: 5 },
            mt: { xs: 2, md: 0 },
            ' >.MuiOutlinedInput-root': { borderRadius: '8px' },
          }}
        />
      </Box>
      <Box>
        <MenuItems foods_type={selectedMenu} />
      </Box>
    </>
  )
}

export default DashbordContainer
