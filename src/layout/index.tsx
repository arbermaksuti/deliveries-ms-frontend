/* eslint-disable react/jsx-pascal-case */
import { ReactNode, useState } from 'react'
import { Badge, Box, IconButton, useMediaQuery } from '@mui/material'
import Header from 'src/layout/Header'
import Left_Sidebar from 'src/layout/LeftSidebar'
import {
  largeRightSidebar_width,
  leftSidebar_width,
  navbar_height,
  smallRightSidebar_width,
} from 'src/utils/consts'
import {
  ChevronLeft,
  ChevronRight,
  ShoppingCartOutlined,
} from '@mui/icons-material'
import { colors } from 'src/utils/colors'
import Right_Sidebar from 'src/layout/RightSidebar'

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
  const [openedRightSidebar, setOpenedRightSidbebar] = useState<boolean>(
    smallDevice ? false : true
  )

  const handleLeftSidebar = () => {
    if (smallDevice && openedRightSidebar) {
      setOpenedRightSidbebar(false)
      setOpenedLeftSidebar(true)
    } else {
      setOpenedLeftSidebar(!openedLeftSidebar)
    }
  }

  const handleRightSidebar = () => {
    if (smallDevice && openedLeftSidebar) {
      setOpenedLeftSidebar(false)
      setOpenedRightSidbebar(true)
    } else if (smallDevice) {
      setOpenedRightSidbebar(!openedRightSidebar)
    }
  }

  return (
    <Box>
      <Header
        handleLeftSidebar={handleLeftSidebar}
        openedLeftSidebar={openedLeftSidebar}
        smallDevice={smallDevice}
        handleRightSidebar={handleRightSidebar}
        openedRightSidebar={openedRightSidebar}
      />
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

      <Box
        sx={{
          backgroundColor: colors.bg,
          px: { xs: 2, sm: 6, lg: 8 },
          py: 2.5,
          width: {
            lg: `calc(100% - ${
              smallDevice ? smallRightSidebar_width : largeRightSidebar_width
            }px)`,
          },
        }}
      >
        {children}
      </Box>
    </Box>
  )
}

export default Layout
