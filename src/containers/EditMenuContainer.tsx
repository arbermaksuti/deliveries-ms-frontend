import { Box, Card, Grid, TextField, Typography } from '@mui/material'
import { useState } from 'react'
import Categories from 'src/components/Categories'
import DynamicDialog from 'src/components/DynamicDialog'
import MenuItem from 'src/components/MenuItems/Item'
import ItemDialog from 'src/components/MenuItems/ItemDialog'
import { navbar_height } from 'src/utils/consts'
import { main_menu_items, menu_items } from 'src/utils/enums'

const EditMenuContainer = () => {
  const [editItemDialog, setEditItemDialog] = useState<boolean | string>(false)

  return (
    <>
      <DynamicDialog
        content={<ItemDialog {...menu_items[0]} />}
        opened={editItemDialog ? true : false}
        onClose={() => setEditItemDialog(false)}
        onSubmit={() => {
          setEditItemDialog(false)
          alert('Produkti është modifikuar')
        }}
        firstActionsButton="Mbyll"
        secondActionsButton="Modifiko"
      />
      <Box sx={{ height: `calc(90vh - ${navbar_height}px)` }}>
        <Categories onClick={() => setEditItemDialog(true)} />
        <Box sx={{ py: 3 }}>
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
            }}
          >
            <Typography variant="h6">Të gjithë produktet</Typography>
            <TextField
              label="Kërko produktin"
              variant="outlined"
              size="small"
            />
          </Box>
          {main_menu_items.map((item, i) => {
            if (item.key !== 'all')
              return (
                <Card
                  sx={{
                    p: 2,
                    pt: 1,
                    mt: 2,
                  }}
                  key={i}
                >
                  <Typography
                    sx={{ fontSize: '20px', fontWeight: '500', mb: 1.2 }}
                  >
                    {item.title}
                  </Typography>
                  <Grid container spacing={1}>
                    {menu_items.slice(0, 4).map((oneItem, i) => (
                      <MenuItem
                        key={i}
                        {...oneItem}
                        editable
                        onClick={() => setEditItemDialog(true)}
                      />
                    ))}
                  </Grid>
                </Card>
              )
          })}
        </Box>
      </Box>
    </>
  )
}

export default EditMenuContainer
