import { Box, Typography } from '@mui/material'

interface Props {
  type: 'create_order' | 'delete_order'
}
const Order_Dialog: React.FC<Props> = (props) => {
  const { type } = props
  return (
    <Box>
      <Typography variant="h6" fontWeight="500">
        A jeni të sigurt që doni të{' '}
        {type === 'create_order'
          ? 'krijoni'
          : type === 'delete_order'
          ? 'fshini'
          : ''}{' '}
        këtë porosi ?
      </Typography>
    </Box>
  )
}

export default Order_Dialog
