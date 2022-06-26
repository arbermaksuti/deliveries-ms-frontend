import { Chip } from '@mui/material'

interface SelectItemsProps {
  title: string
  selected: boolean
  onClick: () => void
}
const SelectItems: React.FC<SelectItemsProps> = (props) => {
  const { title, selected, onClick } = props
  return (
    <Chip
      label={title}
      variant={selected ? 'filled' : 'outlined'}
      color={selected ? 'primary' : 'default'}
      onClick={onClick}
      sx={{
        fontSize: '16px',
        height: { md: '40px' },
        minWidth: { md: '70px', lg: '90px' },
        ml: 2,
        my: 1,
        borderRadius: '8px',
        ':first-of-type': {
          ml: 0,
        },
      }}
    />
  )
}

export default SelectItems
