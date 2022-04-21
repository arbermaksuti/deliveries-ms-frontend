import { AppBar, Avatar, Box, Toolbar, Typography } from '@mui/material'
import { navbar_height } from 'src/utils/consts'

const Header = () => {
  return (
    <Box sx={{ flexGrow: 1, height: navbar_height }}>
      <AppBar position="static" elevation={0}>
        <Toolbar sx={{ height: navbar_height }}>
          <Typography variant="h6">Deliveries - MS</Typography>
          <Box flexGrow={1} />
          <Box display="flex" alignItems="center">
            <Typography mr={1}>Arbër Maksuti</Typography>
            <Avatar>EP</Avatar>
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  )
}

export default Header
