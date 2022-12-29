import { RadioButtonChecked, RadioButtonUnchecked } from '@mui/icons-material'
import {
  Box,
  Button,
  ButtonBase,
  Card,
  Checkbox,
  Typography,
} from '@mui/material'
import { main_menu_items, menu_items } from 'src/utils/enums'
import { useState } from 'react'
import UpdateCategory from './UpdateCategory'

interface Props {
  onClick: () => void
}
const Categories: React.FC<Props> = (props) => {
  const { onClick } = props
  const [selectedCategory, setSelectedCategory] = useState<string>('')

  return (
    <>
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          mt: { xs: 4, md: 'initial' },
        }}
      >
        <Typography variant="h6">Kategoritë</Typography>
        <Button size="small" variant="contained">
          Shto kategori të re
        </Button>
      </Box>
      <Box
        sx={{
          display: 'flex',
          flexWrap: 'wrap',
          gap: 2,
          mt: 2,
        }}
      >
        {main_menu_items.map((item, i) => {
          if (item.key !== 'all') {
            return (
              <Card key={i}>
                <ButtonBase
                  onClick={() => setSelectedCategory(item.key)}
                  sx={{
                    pl: 1,
                    pr: 2,
                    py: 1,
                    display: 'flex',
                    alignItems: 'center',
                    backgroundColor:
                      item.key === selectedCategory
                        ? 'rgba(242, 223, 182, 0.8)'
                        : 'initial',
                  }}
                >
                  <Checkbox
                    size="small"
                    color="secondary"
                    checked={item.key === selectedCategory}
                    icon={<RadioButtonUnchecked />}
                    checkedIcon={<RadioButtonChecked />}
                  />
                  <Typography
                    sx={{ ml: 0.5, fontSize: '16px', fontWeight: '500' }}
                  >
                    {item.title}
                  </Typography>
                </ButtonBase>
              </Card>
            )
          } else {
            return null
          }
        })}
      </Box>
      {selectedCategory && (
        <UpdateCategory
          onClick={onClick}
          category={{
            name:
              main_menu_items.find((item) => item.key === selectedCategory)
                ?.title || 'Testing',
            status: true,
            products: menu_items.slice(0, 4),
          }}
        />
      )}
    </>
  )
}

export default Categories
