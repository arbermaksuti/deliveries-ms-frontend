import { Chip } from '@mui/material'

interface SelectItemProps {
  title: string
  selected: boolean
  onClick: () => void
}
const SelectItem: React.FC<SelectItemProps> = (props) => {
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
        mr: 2,
        my: 1,
        borderRadius: '8px',
      }}
    />
  )
}

export default SelectItem
