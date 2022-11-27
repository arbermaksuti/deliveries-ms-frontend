import { Box, TextField } from '@mui/material'
import { useState } from 'react'
import MenuItems from 'src/components/MenuItems'
import Offers from 'src/components/Offers'
import SelectItem from 'src/components/SelectItem'
import { main_menu_items } from 'src/utils/enums'

const DashbordContainer = () => {
  const [selectedMenu, setSelectedMenu] = useState<string>('all')

  return (
    <>
      <Offers />
      <Box sx={{ display: 'flex', flexWrap: 'wrap', my: 2 }}>
        <Box sx={{ maxWidth: { md: '75%' } }}>
          {main_menu_items.map((item, index) => (
            <SelectItem
              key={index}
              title={item.title}
              selected={item.key === selectedMenu}
              onClick={() => setSelectedMenu(item.key)}
            />
          ))}
        </Box>
        <Box sx={{ width: { md: '25%' }, textAlign: 'right' }}>
          <TextField
            label="Kërko produktin"
            variant="outlined"
            size="small"
            sx={{
              mt: 1,
              ' >.MuiOutlinedInput-root': { borderRadius: '8px' },
            }}
          />
        </Box>
      </Box>
      <Box>
        <MenuItems foods_type={selectedMenu} />
      </Box>
    </>
  )
}

export default DashbordContainer
