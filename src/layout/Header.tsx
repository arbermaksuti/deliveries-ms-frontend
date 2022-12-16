import {
  ChevronLeft,
  ChevronRight,
  ShoppingCartOutlined,
} from '@mui/icons-material'
import {
  AppBar,
  Avatar,
  Badge,
  Box,
  IconButton,
  Toolbar,
  Typography,
} from '@mui/material'
import { colors } from 'src/utils/colors'
import {
  largeRightSidebar_width,
  leftSidebar_width,
  navbar_height,
  smallRightSidebar_width,
} from 'src/utils/consts'

interface HeaderProps {
  handleLeftSidebar: () => void
  openedLeftSidebar: boolean
  smallDevice: boolean
  handleRightSidebar: () => void
  openedRightSidebar: boolean
}
const Header: React.FC<HeaderProps> = (props) => {
  const {
    handleLeftSidebar,
    openedLeftSidebar,
    smallDevice,
    handleRightSidebar,
    openedRightSidebar,
  } = props

  return (
    <Box sx={{ flexGrow: 1, height: navbar_height }}>
      <AppBar position="fixed" elevation={0} sx={{ zIndex: '1400' }}>
        <Toolbar sx={{ height: navbar_height }}>
          <Typography variant="h6">Deliveries - MS</Typography>
          <Box flexGrow={1} />
          <Box display="flex" alignItems="center">
            <Typography mr={1}>Arbër Maksuti</Typography>
            <Avatar>EP</Avatar>
          </Box>
        </Toolbar>
        <Box
          sx={{
            position: 'absolute',
            left: openedLeftSidebar ? leftSidebar_width : 0,
            top: navbar_height,
            width: '45px',
            height: '45px',
            border: `1px solid ${colors.border_color}`,
            borderTop: 'none',
            borderLeft: 'none',
            borderRadius: 0,
            backgroundColor: colors.default_white,
            zIndex: '2400',
            transition: `left 0.28s`,
            borderBottomRightRadius: '20px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
          onClick={handleLeftSidebar}
        >
          <IconButton onClick={handleLeftSidebar}>
            {openedLeftSidebar ? <ChevronLeft /> : <ChevronRight />}
          </IconButton>
        </Box>
        <Box
          sx={{
            position: 'absolute',
            right:
              openedRightSidebar && smallDevice
                ? smallRightSidebar_width
                : openedRightSidebar && !smallDevice
                ? largeRightSidebar_width
                : 0,
            top: navbar_height,
            width: '50px',
            height: '50px',
            border: `1px solid ${colors.border_color}`,
            borderTop: 'none',
            borderRight: 'none',
            borderRadius: 0,
            backgroundColor: colors.default_white,
            zIndex: '2400',
            transition: `right 0.28s`,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            borderBottomLeftRadius: '20px',
          }}
          onClick={handleRightSidebar}
        >
          <IconButton
            disableRipple={!smallDevice}
            disableFocusRipple={!smallDevice}
            disableTouchRipple={!smallDevice}
            sx={{
              '&:hover': !smallDevice
                ? {
                    cursor: 'context-menu',
                  }
                : {},
            }}
            onClick={handleRightSidebar}
          >
            <Badge
              badgeContent={1}
              color="secondary"
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
            >
              <ShoppingCartOutlined />
            </Badge>
          </IconButton>
        </Box>
      </AppBar>
    </Box>
  )
}

export default Header
