/* eslint-disable react/jsx-pascal-case */
import { ReactNode, useState } from 'react'
import { Badge, Box, IconButton, useMediaQuery } from '@mui/material'
import Header from './Header'
import Left_Sidebar from './Left_Sidebar'
import {
  leftSidebar_width,
  navbar_height,
  rightSidebar_width,
} from 'src/utils/consts'
import {
  ChevronLeft,
  ChevronRight,
  ShoppingCartOutlined,
} from '@mui/icons-material'
import { colors } from 'src/utils/colors'
import Right_Sidebar from './Right_Sidebar'

interface Props {
  children: ReactNode
}
const Layout: React.FC<Props> = (props) => {
  const { children } = props
  const smallDevice = useMediaQuery(
    (theme: any) => theme.breakpoints.down('lg'),
    {
      defaultMatches: true,
      noSsr: false,
    }
  )

  const [openedLeftSidebar, setOpenedLeftSidebar] = useState<boolean>(false)
  const [openedRightSidebar, setOpenedRightSidbebar] = useState<boolean>(smallDevice ? false : true)

  const handleLeftSidebar = () => setOpenedLeftSidebar(!openedLeftSidebar)
  const handleRightSidebar = () => {
    smallDevice && setOpenedRightSidbebar(!openedRightSidebar)
  }

  return (
    <Box position="relative">
      <Header />
      <Left_Sidebar
        openedSidebar={openedLeftSidebar}
        closedSidebar={handleLeftSidebar}
        smallDevice={smallDevice}
      />
      <Right_Sidebar
        openedSidebar={openedRightSidebar}
        closedSidebar={handleRightSidebar}
        smallDevice={smallDevice}
      />
      <Box>
        {/* Button for opening/closing left sidebar */}
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
            backgroundColor: '#fff',
            zIndex: '10000',
            transition: `left 0.30s`,
            borderBottomRightRadius: '20px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            overflow: 'hidden',
          }}
          onClick={handleLeftSidebar}
        >
          <IconButton onClick={handleLeftSidebar}>
            {openedLeftSidebar ? <ChevronLeft /> : <ChevronRight />}
          </IconButton>
        </Box>
        {/* Button for opening/closing right sidebar */}
        <Box
          sx={{
            position: 'absolute',
            right: openedRightSidebar ? rightSidebar_width : 0,
            top: navbar_height,
            width: '50px',
            height: '50px',
            border: `1px solid ${colors.border_color}`,
            borderTop: 'none',
            borderRight: 'none',
            borderRadius: 0,
            backgroundColor: '#fff',
            zIndex: '10000',
            transition: `right 0.30s`,
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
              color="primary"
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
            // overlap="rectangular"
            >
              <ShoppingCartOutlined />
            </Badge>
          </IconButton>
        </Box>
        <Box
          sx={{
            px: 8,
            py: 2.5,
            width: { lg: `calc(100% - ${rightSidebar_width}px)` },
          }}
        >
          {children}
        </Box>
      </Box>
    </Box>
  )
}

export default Layout
