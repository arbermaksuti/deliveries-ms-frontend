import { Grid, Typography } from '@mui/material'
import React, { useState } from 'react'
import { menu_items } from 'src/utils/enums'
import MenuItem from './Item'
import Dynamic_Dialog from 'src/components/DynamicDialog'
import AddToShopDialog from 'src/components/MenuItems/AddToShopDialog'

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
            openAddToShopDialog={() => setAddToShopDialog(true)}
          />
        ))}
      </Grid>
      <Dynamic_Dialog
        opened={addToShopDialog ? true : false}
        onClose={() => setAddToShopDialog(false)}
        content={<AddToShopDialog />}
        firstActionsButton="Mbyll"
        secondActionsButton="Shto"
      />
    </>
  )
}

export default MenuItems
