import { Grid } from '@mui/material'
import React, { useState } from 'react'
import Dynamic_Dialog from 'src/components/DynamicDialog'
import AddToShopDialog from 'src/components/MenuItems/AddToShopDialog'
import MenuItem from 'src/components/MenuItems/Item'
import { menu_items } from 'src/utils/enums'

interface MenuItemsProps {
  foods_type: string
}
const MenuItems: React.FC<MenuItemsProps> = (props) => {
  const { foods_type } = props
  const [addToShopDialog, setAddToShopDialog] = useState<boolean | string>(
    false
  )

  return (
    <>
      <Grid container spacing={2}>
        {menu_items.map((menuItem, i) => (
          <MenuItem
            key={i}
            {...menuItem}
            onClick={() => setAddToShopDialog(true)}
          />
        ))}
      </Grid>
      <Dynamic_Dialog
        opened={addToShopDialog ? true : false}
        onClose={() => setAddToShopDialog(false)}
        onSubmit={() => {
          setAddToShopDialog(false)
          alert('Produkti u shtua në shportë')
        }}
        content={<AddToShopDialog />}
        firstActionsButton="Mbyll"
        secondActionsButton="Shto"
      />
    </>
  )
}

export default MenuItems
