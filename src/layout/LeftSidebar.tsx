import {
  Box,
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from '@mui/material'
import React from 'react'
import { navbar_height, leftSidebar_width } from 'src/utils/consts'
import { leftSidebar_menu as menu } from 'src/utils/enums'
import { colors } from 'src/utils/colors'
import { Link, useLocation } from 'react-router-dom'
import { Logout } from '@mui/icons-material'

interface Props {
  openedSidebar: boolean
  closedSidebar: () => void
  smallDevice: boolean
}
const LeftSidebar: React.FC<Props> = (props) => {
  const { openedSidebar, closedSidebar, smallDevice } = props
  const location = useLocation()

  return (
    <Drawer
      anchor="left"
      elevation={1}
      hideBackdrop={!smallDevice}
      open={openedSidebar}
      onClose={closedSidebar}
      transitionDuration={{ enter: 300, exit: 300 }}
      PaperProps={{
        sx: {
          top: navbar_height,
          width: leftSidebar_width,
          overflowY: 'initial',
          borderRight: `1px solid ${colors.border_color}`,
          boxShadow: 'none',
        },
      }}
      BackdropProps={{ sx: { top: navbar_height } }}
    >
      <Box
        display="flex"
        flexDirection="column"
        height={`calc(100% - ${navbar_height}px)`}
      >
        <List sx={{ paddingTop: 0 }}>
          {menu.map((item, index) => {
            return (
              <Link
                key={index}
                to={item.path}
                style={{ color: '#111111' }}
                onClick={closedSidebar}
              >
                <ListItem
                  button
                  sx={{
                    ...(location.pathname.startsWith(item.path) && {
                      backgroundColor: 'rgba(0, 0, 0, 0.05)',
                    }),
                    mb: 1,
                  }}
                >
                  <ListItemIcon>{item.icon}</ListItemIcon>
                  <ListItemText primary={item.title} />
                </ListItem>
              </Link>
            )
          })}
        </List>
        <List
          sx={{
            mt: 'auto',
            py: 0,
            '&:hover': {
              backgroundColor: 'rgba(0, 0, 0, 0.09)',
            },
          }}
        >
          <ListItem
            button
            onClick={() => console.log('Logout')}
            sx={{
              color: '#111',
            }}
          >
            <ListItemIcon>
              <Logout />
            </ListItemIcon>
            <ListItemText primary="Shkyçu" />
          </ListItem>
        </List>
      </Box>
    </Drawer>
  )
}

export default LeftSidebar
