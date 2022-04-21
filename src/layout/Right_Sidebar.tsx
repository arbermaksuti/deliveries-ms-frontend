import { Drawer } from '@mui/material'
import { colors } from 'src/utils/colors'
import { navbar_height, rightSidebar_width } from 'src/utils/consts'

interface Props {
    openedSidebar: boolean
    closedSidebar: () => void
    smallDevice: boolean
}
const Right_Sidebar: React.FC<Props> = (props) => {
    const { openedSidebar, closedSidebar, smallDevice } = props

    return (
        <Drawer
            anchor="right"
            variant={smallDevice ? 'temporary' : 'permanent'}
            open={openedSidebar}
            onClose={closedSidebar}
            elevation={1}
            transitionDuration={{ enter: 300, exit: 300 }}
            PaperProps={{
                sx: {
                    top: navbar_height,
                    width: rightSidebar_width,
                    overflowY: 'initial',
                    borderRight: `1px solid ${colors.border_color}`,
                    boxShadow: 'none',
                },
            }}
            BackdropProps={{ sx: { top: navbar_height } }}
        ></Drawer>
    )
}

export default Right_Sidebar
